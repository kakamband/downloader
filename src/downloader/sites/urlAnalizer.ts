import p from 'bluebird'
import { connect, spaceUsed } from '../../meganz/main'
import { dlFree, anonFiles, solidFiles } from './main'
import inquirer from 'inquirer'
import ProgressBar from 'progress'

import crypto from 'crypto'

async function analizeUrl(opts) {

 let {password, input, folderName } = opts
 
 let base64 = Buffer.from(password, 'utf8').toString('base64')
 
 let buff = Buffer.from(base64, 'utf8')
 
 let regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&/~+#-])?/gi
 
  let urls = input.match(regex)
  //console.log(urls)
 console.log('connecting')

 let storage: any = await connect()


 p.promisifyAll(storage)
 
 console.log('sucess connection')
 
 let used = await spaceUsed(storage)
 
 console.log(used)

let folder = storage.root.children.find(e => e.name === folderName)

 if (folder === undefined) {
  
  console.log('folder dont exist')
  
  let token = crypto.randomBytes(18).toString('hex')
  
  await storage.mkdirAsync(folderName)
  
  console.log('sucess created folder')
  
  
  folder = storage.root.children.find(e => e.name === folderName)
  
  //yes is created
  
  p.promisifyAll(folder)
  
 // console.log()
  
  await folder.uploadAsync(token, buff)
  
  console.log('sucess created secure password')
 }
 
 
 
 
 let data;

 for await (const [i, url] of urls.entries()) {
  
  console.log(`getting stream of${url}`)
  
  if (url.includes("dl.free")) {
   
   data = await dlFree(url)
  }

  else if (url.includes("load.to")) {
  }


  else if (url.includes("solidfiles")) {
   data = await solidFiles(url)
  }


 else if (url.includes("anonfiles")) {
   data = await anonFiles(url)

  }
  else{ 
   console.log('not match url download')
   continue;
   
  }
  
  
  /*
  console.log(folder.children.find(e => e.name === data.name))
  */
 
   
   
   let file = folder.children.find(e => e.name === data.name)
   
   if (file !== undefined) {
    console.log('file alredy exists')
    continue;
   }
   
  //is iqual to undefined
  
  let dataAll = {...data, folder}
  
  await uploadToFolder(dataAll)
  
 }
 console.log('sucess upded all. CONGRATS!!!')

}

async function uploadToFolder(opts) {
 
  return new Promise((rs, rj) => {
   
   let { stream, folder, name } = opts
  console.log('uploading')
   let ws = stream.pipe(folder.upload(name))
   
  ws.on('error', err => {
   console.log(err.message)
   
   rj(false)
   
   //await uploadToFolder(opts)
   
  })
  
  ws.on('end',  () => {
   console.log('end sucess update')
   rs(true)
  })
 })

}

export default analizeUrl;