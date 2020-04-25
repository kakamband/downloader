


async function getId(url) {
 let id;
 
 if(url.match(/\//gm).length === 4){
  id = url.match(/(?<=.com\/).+?(?=\/)/gm)[0]
   
 }
 
 else{
  
  id = url.match(/(?<=\/)/)[0]
  console.log(id)
 }
 
 return id
}


export default getId;