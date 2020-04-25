import axios from 'axios'


async function verifyUrl(opts) {
 let { verifyPath, credentials, downloadUrl, cookie, uniqueid } = opts
 
 
 let origin = 'https://www.solidfiles.com'


 let config = {
  headers: {
   'Content-Type': 'application/json',
   'XCSRFToken': cookie.replace(/csfrtoken=/, ''),
   'Cookie': `${cookie};${uniqueid}`,
  }
 }

 let { status } = await axios.post(origin + verifyPath, credentials, config)

 if (status === 200) {
  return true
 }
 else {
  return false
 }
}


export default verifyUrl;