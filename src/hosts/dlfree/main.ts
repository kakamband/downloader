import getCookies from './getCookies'

import getMeta from './getMetaData';
import getId from './getId';
import getStream from '../../utils/getStream';


async function main(url) {
 return new Promise(async(resolve)=>{
  
  let { idFile, fullUrl } = getId(url)
  
  
  let { filename, size} = await getMeta(fullUrl)
  
  let {location, headers}: any = await getCookies(id)
  
  
  
  let opts = {
   url: location,
   cookies: headers,
   responseType: 'stream'
  }
  
  let stream = await getStream(idFile)
  
  resolve({
    id: 'test',
    idFile,
    host: 'http://dl.free.fr',
    url: fullUrl,
    //type,
    size,
    stream,
   })
 })
}

export default main;