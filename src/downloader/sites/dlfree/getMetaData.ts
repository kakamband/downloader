import cheerio from 'cheerio'
import axios from 'axios'


async function getData(url) {
 
 let {data} = await axios.get(url)
 
 const $ = cheerio.load(data)
 
 let meta = $('#coin2').map((i, e) => {
  return $(e).html()
 }).get()
 
 let fl = meta[0]
 let sz = meta[1]
 
 
 console.log(fl, sz)
 
 return {sz, fl}
}

export default getData;