async function getId(link: string) {
 
 let id, fullUrl;
  if(link.includes('getfile.pl')){
   let regex = /([^\/]+$)/gi
   let found: any = link.match(regex)
   id = found[0]
   fullUrl = link
  }
  else{
   let regex = /([^\/]+$)/gi
   let found: any = link.match(regex)
  id = found[0].slice(1)
   fullUrl = `http://dl.free.fr/getfile.pl?file=/${id}`
  }
 return {id, fullUrl}

}

export default getId;