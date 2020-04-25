import axios from 'axios'
import cheerio from 'cheerio'


async function getCookies(url) {

 let { data, headers } = await axios.get(url)

 const $ = cheerio.load(data)

 //const text = $('script')[0].text();
let name = $('[class="box-content meta"] h1').text().split()
 //middlewa4e cookei
 const middlewaretoken = $('meta[name="token"]').attr('content')
 let cookie = headers['set-cookie'][0].split(';')[0] //.slice(0,-1)

 let uniqueid = headers['set-cookie'][1].split(';')[0]

 let send = `csrfmiddlewaretoken=${middlewaretoken}&referrer=`

 return { cookie, uniqueid, send, name }
}

export default getCookies;