// 買うのにかかる必要日数を計算する関数

export const calcNeededDays = (pay, saving,productPrice, ...days) => {

    // １週間の給料を初期化
    let total_week_income = 0

    // 1週間で稼ぐ給料の金額を計算
    for (let i=0; i < 7; i++) {
        total_week_income += days[i]*pay;
    }

    const hasToEarn = productPrice - saving　// 買う予定の物から貯金額（支払いに使える金額）を引く
    const howmany_week = hasToEarn / total_week_income | 0; // 残った金額を週給で割る→何週間働くかが産出される

    let remain = hasToEarn - (total_week_income * howmany_week); //値段を超えない程度に週給で処理

    // 残りの稼ぐべき金額から各曜日の日給を引く処理
    let amountDays = 0;
    while (remain > 0) {
      remain = remain - (days[amountDays] * pay);
      amountDays++;
    }
    
    const neededDays = ((howmany_week)*7) + amountDays;

    // 今後使う値をローカルストレージに保存
    if (typeof window !== 'undefined') {
        localStorage.setItem("calc", JSON.stringify({total_week_income: total_week_income, hasToEarn: hasToEarn}))
    }

    return neededDays
}

// もっと早く買うために必要な期間
export const calcReduceDays = (isSatisfaction, addWorkHours, pay, total_week_income, hasToEarn) => {
  
    // チェックがFalseならそもそも計算しない
    if (!isSatisfaction) return 

    // 元々の週給に追加した労働時間の給料の金額を加算
    const increasePayWeek = addWorkHours * pay
    const week_add_income = total_week_income + increasePayWeek

    let res;

    // 新たな週給で買いたいものの残額を割り切れる→商が必要な週数　割り切れない→余りがでるため、追加で１週間必要。
    if (hasToEarn % week_add_income === 0) {
        res = hasToEarn / week_add_income | 0
    } else {
        res = ( hasToEarn / week_add_income | 0 ) +1
    }

    return res
}

// 商品の合計金額を計算する関数
export const sumProductPrice = (...products) => {
   products = products.flat()
   let sumPrice = 0
   products.forEach(element => {
    sumPrice += element.Item.itemPrice
   });
   return sumPrice
}

// calcNeededDays(1500, 0, 54000, 3, 0, 0, 4, 0, 4, 0) 22
// calcReduceDays(true, 8, 1500, 16500, 54000) 2
// const test = [{Item: {itemPrice: 4500}}, {Item: {itemPrice: 5500}}, {Item: {itemPrice: 1000}}]
// sumProductPrice(test)
