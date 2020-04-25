import r from 'request';

import getCookies from './getCookies'

import getMeta from './getMetaData';
import getId from './getId';
import dl from '../../utils/downloader';


async function downloadUrl(url) {
 return new Promise(async rs => {
  
  let { id, fullUrl } = await getId(url)
  
  
  let {fl, sz} = await getMeta(fullUrl)
  
  let {location, headers}: any = await getCookies(id)
  
  let opts = {
   url: location,
   cookies: headers,
   responseType: 'stream'
  }
  
  let stream = await dl(opts)
  
  
  rs({stream, name: fl})
 })
}






export default downloadUrl;