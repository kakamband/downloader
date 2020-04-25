import axios from 'axios'

async function downloader(config) {

 let { url, responseType, cookies } = config
 
 if (!cookies) {
  cookies = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36 Edg/81.0.416.58' }

 }
 if (!responseType) {
  responseType = 'stream'
 }
 return new Promise(async (resolve) => {
  let { data, headers, status } = await axios.get(url, {
   responseType,
   headers: cookies,
  })

  if (status == 200) {

   resolve(data)
  }
 })
}





export default downloader;