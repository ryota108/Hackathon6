// import { Link } from "react-router-dom"
import Link from "next/link";
import { useState,useEffect } from "react";
const defaultEndpoint = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=モバイル&applicationId=1031547588614100400"

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const [search,setSearch] = useState("");

  // const [page, updatePage] = useState({
  //   results_available: results_available,
  //   results_start: results_start,
  // })

  // useEffect(() => {
  //   if (search === '') return

  //   const params = { keyword: search }
  //   const query = new URLSearchParams(params)

  //   const request = async () => {
  //     const res = await fetch(`/api/search?${query}`)
  //     const data = await res.json()
  //     const nextData = data.results

  //     updatePage({
  //       results_available: nextData.results_available,
  //       results_start: nextData.results_start,
  //     })

  //     updateShops(nextData.shop)
  //   }

  //   request()
  // }, [search])



  const searchChangeHandle = (event) =>{
    setSearch(event.target.value);
  }
  return (
    <>
     <input type="text" onChange={searchChangeHandle} />

         <ul>
          {data.Items.map((item, index) => {
            return (
              <Link href={`products/${item.Item.shopCode}`}key={index}>
                <a href={item.Item.shopUrl}>
                  <a>
                    <div >
                      <div >
                        <div>
                          <img src={item.Item.mediumImageUrls[0].imageUrl} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <h3> {item.Item.itemName} </h3></div>
                        <div>
                          <div>
                            <span>{item.Item.catchcopy}</span>
                          </div>
                          <h2> {item.Item.itemPrice}円</h2>

                        </div>
                      </div>
                    </div>
                  </a>
                </a>
              </Link>
            )
          })}
        </ul> 
   </>
  )
}
