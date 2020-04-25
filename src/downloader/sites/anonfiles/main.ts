
import cheerio from 'cheerio'
import axios from 'axios'
import dl from '../../utils/downloader';
import getData from './api'
import getId from './getId';
async function main(url){
 
 
 let id = await getId(url)
 
 let {name, size} = await getData(id)
  
  let {headers, data} = await axios.get(url)
  
  let cfduid = headers['set-cookie'][0].split(';')[0]
  
  const $ = cheerio.load(data)
  
 let urlDownload =  $('#download-url').attr('href')
 

   
 let cookie = {
     'Cookie': cfduid
   }
 
 let opts = {
  url: urlDownload,
  cookies: cookie,
 }
 
 let stream = await dl(opts)
 
 return { stream, name}
}


export default main;


