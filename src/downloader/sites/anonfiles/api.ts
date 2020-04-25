import axios from 'axios'


async function api(id) {
 let url = `https://api.anonfiles.com/v2/file/${id}/info`
 

 let {data, status} = await axios.get(url)
 
 console.log(data)
 if(status !== 200){
  
  console.log(data.error.message)
  return;
 }
 
 let { name, size} = data.data.file.metadata
 
 return { name, size }
}


export default api;