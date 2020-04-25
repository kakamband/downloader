import { dlFree, anonFiles, solidFiles } from './hosts/main'

import DownloadInfo from './types/DownloadInfo'

/* download 
let regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&/~+#-])?/gi

let urls = urls.match(regex)

let items: any[] = [];*/

async function analizeUrl(urls: string[]) {
 let items:any = []
 let item: downloadInfo;
 for await (const [i, url] of urls.entries()) {
  if (url.includes("dl.free")) {
   item = await dlFree(url)
  }
  else if (url.includes("load.to")) {}
  else if (url.includes("solidfiles")) {
    item = await solidFiles(url)
  }
  else if (url.includes("anonfiles")) {
   item = await anonFiles(url)
  }
   items.push(item)
 }

 return items
}

