import axios from 'axios'
import dl from '../../utils/downloader';

import getCredentials from './getCredentials'
import getCookies from './getCookies'
import getMetaData from './getMetaData'
import verifyUrl from './verifyUrl'
async function main(url) {

 let api = 'http://www.solidfiles.com'
 
// let { name } = await getMetaData(url)

 let { cookie, uniqueid, send, name } = await getCookies(url)

 let opt = {
  headers: {
   'Content-Type': 'application/x-www-form-urlencoded',
   Cookie: `${cookie};${uniqueid}`
  },
  body: send
 }


 let { data, status } = await axios.post(url + '/dl', opt)

 if (status !== 200) {
  return console.log(`ERROR`, status)
 }

 let credentials = await getCredentials(data)
 
 let verify = {
  ...credentials,
  cookie,
  uniqueid
 }

 let isVerify = await verifyUrl(verify)

 if (!isVerify) {
  return console.log('failed verification');
 }

 let opts = {
  url: credentials.urlDownload,
 }

 let stream = await dl(opts)

 return {stream, name}
}



export default main;