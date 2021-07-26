const timeStamp = 'theoser';
const apiKey = '36c65f83acd3134a12372a31ed585a1a';
const hash = 'da6919880b12cef416cb1ab8cfb0362c';







const randomCharacter = Math.random() * 1200;
const limit = 11



const fetchURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&offset=${randomCharacter}&limit=${limit}`




fetch(fetchURL).then(res => {
  if (res.ok) {
    return res.json();
  }
  else {
    throw new Error(res.status + ' ' + res.statusText);
  }
}).then(jsonBody => {
  const results = jsonBody.data.results;
  const heroes = []

  results.forEach(hero => {
    const { path, extension } = hero.thumbnail;
    const heroData = {
      heroImg: `${path}.${extension}`,
      heroName: hero.name
    }
    heroes.push(heroData);
  });

  createCarrossel(heroes)
  console.log(jsonBody.data.results);
}).catch(err => {
  console.log(err)
});



const createCarrossel = (heroes) => {



  heroes.forEach(items => {
    const html = createItem(items);
    $('.owl-carousel').owlCarousel('add', html).owlCarousel('update');
  })

}

const createItem = ({ heroImg, heroName }) => {

  const divItem = document.createElement('div');
  const imgHero = document.createElement('img');
  const txtName = document.createElement('text')

  imgHero.src = heroImg;
  imgHero.alt = heroName;

  txtName.textContent = heroName;

  imgHero.classList.add('box-heroi');
  divItem.appendChild(imgHero);
  divItem.appendChild(txtName);

  divItem.classList.add('item');



  return divItem;

}
