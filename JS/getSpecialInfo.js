import renderHTML from './renderHtml'

const getSpecialInfo = async (title, i) => {
    const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=dfff31dd&t=${title}`
  
    const res = await fetch(URL)
    const data = await res.json()
  
    const html = renderHTML(data, i, 'plus')
    return html
  }

  export default getSpecialInfo