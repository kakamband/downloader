
import cheerio from 'cheerio'
import { parse } from '@babel/parser';
import generate from '@babel/generator';

async function getCredentials(html) {
 const $ = cheerio.load(html, { xmlMode: true })
 let script, scriptDownload, search, urlVerify;
 let scripts = $('script').map((i, e) => {
   return $(e).html().replace(/ |\s/gi, "")
 }).get()
 
 let js = scripts.join(' ')
 
// console.log(js)
 
 let verifyPath = js.match(/(?<=url:').+?(?=')/)[0]
 let urlDownload = js.match(/(?<=downloadUrl":").+?(?=")/)[0]
 let t = js.match(/(?<=t:').+?(?=')/)[0]
 
 
 let credentials: any = {
  t,
  s: 'false',
  r: '',
  b: 'true'
 }
 
 credentials = JSON.stringify(credentials)
 
 return { credentials, verifyPath, urlDownload}
}


export default getCredentials