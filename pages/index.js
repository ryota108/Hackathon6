// import { Link } from "react-router-dom"
import Link from "next/link";
import { useState,useEffect, } from "react";
import Form from "../components/Form";
const defaultEndpoint = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&applicationId=1031547588614100400"

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint+"&keyword=モバイル")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const [search,setSearch] = useState("");
  const [product, updateProduct] = useState(data.Items)
  // 時給のデータ型 
  // const info =  {
  //   payment: 1050,  時給（固定）
  //   saving: 100000,　貯金
  //   monday: ~
  // } 

  // const [page, updatePage] = useState({
  //   results_available: results_available,
  //   results_start: results_start,
  // })
  
  
  useEffect(() => {
    if (search === '') return
    const params = { keyword: search }
    const query = new URLSearchParams(params)
    const request = async () => {
      const res = await fetch(`${defaultEndpoint}&keyword=${search}`)
      const data = await res.json()
      const nextData = data.Items

      updateProduct(nextData);
    }

    request()
  }, [search])

  const handlerOnSubmitSearch = (e) => {
    e.preventDefault()

    const { currentTarget = {} } = e
    const fields = Array.from(currentTarget?.elements)
    const fieldQuery = fields.find((field) => field.name === 'query')

    // keywordをセット
    const value = fieldQuery.value || ''
    setSearch(value)
  }

  const searchChangeHandle = (event) =>{
    setSearch(event.target.value);
  }
   
  return (
    <>
        <form onSubmit={handlerOnSubmitSearch} >
              <input
                type="search"
                name="query"
                placeholder="キーワードを入力して下さい"
              />
              <button>
                Search
              </button>
        </form>
          {/* <h1>{data.count}</h1> */}
         <Form />
         <ul>
          {product.map((item, index) => {
            return (
              <li key={index}>
              <Link href={`products/${item.Item.itemCode}`}>
                  <a>
                    <div >
                      <div >
                        <div>
                          <img src={item.Item.mediumImageUrls[0].imageUrl} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <h3> {item.Item.itemName.substr(0,40)+"..."} </h3></div>
                        <div>
                          <h2> {item.Item.itemPrice}円</h2>
                        </div>
                      </div>
                    </div>
                  </a>
              </Link>
              </li>
            )
          })}
        </ul> 
   </>
  )
}
