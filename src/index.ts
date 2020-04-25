let url = {
 
 
 
}

interface DownloadInfo {
 
 host: string;
 size: string;
 attachment: string;
 downloadUrl: string;
 downloadStream: any;
}


async function getStream() {
 
}
async function downloader() {
 
}

class Downloader {
 downloadUrl(urls: string | string[]){
  let info: DownloadInfo = await download(urls)
  return info
 }
}

