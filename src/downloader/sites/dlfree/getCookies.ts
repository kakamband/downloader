import axios from 'axios'
import r from 'request'
import { DLFREE, DLFREE_COOKIE } from './endpoints';

import { userAgent } from '../../utils/userAgent'
import { cookieHeaders } from './headers';

const getCookies = async (id) => {

 let data = `file=%2F${id}&send=Valider+et+t%C3%A9l%C3%A9charger+le+fichier`

 let config = {
  headers: cookieHeaders,
  uri: DLFREE_COOKIE,
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