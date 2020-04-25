
import downloadUrl from './downloadUrl'



async function main(url) {
 return new Promise(async(resolve)=>{
  let data = await downloadUrl(url)
  resolve(data)
 })
}



export default main;