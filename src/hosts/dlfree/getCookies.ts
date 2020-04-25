import axios from 'axios'

const cookieHeaders =  {headers: {
 'Origin': 'http://dl.free.fr',
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
 'Protocol': 'HTTP/1.1',
 'Content-Type': 'application/x-www-form-urlencoded'
}}
/*
const ax = axios.create({
 //baseURL: 'http://example.com',
 headers: {
  'Origin': 'http://dl.free.fr',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
  'Protocol': 'HTTP/1.1',
  'Content-Type': 'application/x-www-form-urlencoded'
 }
});
*/
const getCookies = async (id) => {

 let data = `file=%2F${id}&send=Valider+et+t%C3%A9l%C3%A9charger+le+fichier`

 let config = {
  headers: cookieHeaders,
  uri: "/get",
  body: data,
  method: 'POST'
 }

 return new Promise((rs, rj) => {
  r(config, async (err, res) => {
   let location = res.headers.location
   let strg = res.headers['set-cookie'][0];
   let array = strg.split(';')
   let cookie = array[0]
   let headers = {
    'User-Agent': userAgent,
    'Cookie': cookie
   }
   rs({ location, headers })
  })
 })

}

export default getCookies;