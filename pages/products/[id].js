import Link from "next/link";
import { useRouter } from "next/router";
const defaultEndpoint = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&applicationId=1031547588614100400"

const Detail = ({ data }) => {
  const  Item = data.Items[0].Item
  console.log(data)
  return (
    <>
    <img src= {Item.mediumImageUrls[0].imageUrl}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(defaultEndpoint + "&itemCode="+ id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Detail;