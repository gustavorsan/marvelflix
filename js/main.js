const timeStamp = 'theoser';
const apiKey = '36c65f83acd3134a12372a31ed585a1a';
const hash = 'da6919880b12cef416cb1ab8cfb0362c';

const randomCharacter = Math.random() * 1200;
const limit = 11





const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&offset=${randomCharacter}&limit=${limit}`




fetch(baseUrl).then(res => {
  if (res.ok) {
    return res.json();
  }
  else {
    throw new Error(res.status + ' ' + res.statusText);
  }
}).then(jsonParsed => {
  console.log(jsonParsed.data.results);
}).catch(err => {
  console.log(err)
})