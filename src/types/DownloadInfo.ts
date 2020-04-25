export type DownloadInfo = {
 id: string
 host: string,
 size: string,
 cookies?: string | string[],
 attachment: string,
 downloadUrl: string,
 downloadStream: any,
}
