const timeStamp = 'theoser';
const apiKey = '36c65f83acd3134a12372a31ed585a1a';
const hash = 'da6919880b12cef416cb1ab8cfb0362c';







const randomCharacter = Math.random() * 1200;
const limit = 1



const fetchURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&offset=${randomCharacter}&limit=${limit}`




fetch(fetchURL).then(res => {
  if (res.ok) {
    return res.json();
  }
  else {
    throw new Error(res.status + ' ' + res.statusText);
  }
}).then(jsonBody => {
  const carrosselHero = document.querySelector('.owl-stage');
  var owl = $('.owl-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
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


  createCarrossel(heroes, owl);


  console.log(jsonBody.data.results);
}).catch(err => {
  console.log(err)
});



const createCarrossel = (heroes, owl) => {

  const result = heroes.map(item => {
    const html = createItem(item);
    return html;
  });
  var text = '';
  heroes.forEach(items => {
    text += createItem(items);
  })
  console.log(text);/*
  $('.owl-carousel')
    .trigger('add.owl.carousel', [text])
    .trigger('refresh.owl.carousel');

  */
  owl.data('owlCarousel').addItem(text);
  owl.reinit();
}

const createItem = ({ heroImg, heroName }) => {
  /*
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
  */
  const divItem = ` 
    <div class="item">
      <img src="${heroImg}" class="box-heroi"  alt="${heroName}" srcset="" />
      <p>${heroName}</p>
    </div>
    
  `
  return divItem;

}
