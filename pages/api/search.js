import fetch from 'node-fetch'

const defaultEndpoint = "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&applicationId=1031547588614100400keyword=マックブック"

export default async (req, res) => {
  let url = defaultEndpoint

  if (typeof req.query.keyword !== undefined) {
    url = `${url}&keyword=${req.query.keyword}`
  }

  url = encodeURI(url)

  const result = await fetch(url)
  res.json(result.body)
}
