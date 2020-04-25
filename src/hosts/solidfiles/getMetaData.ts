
import cheerio from 'cheerio'
import axios from 'axios'
async function (url) {
 
 
 let { data } = await axios.get(url)
 
 const $ = cheerio.load(data)
 
 let name = $('[class="box-content meta"] h1').text()
 
 console.log(name)
 
let name = $('[class="box-content meta"] p').text()
 
 
 return { name, size }

 
}

export default getMetaData;