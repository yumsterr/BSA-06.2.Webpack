class Hero {
  constructor(nameStr, words = false) {
    this.name = nameStr;
    if (words) {
      this.words = words;
    } else {
      this.words = 'Unknown :(';
    }
    const nameSplit = nameStr.split(' ');
    this.img = `${nameSplit[0]}.jpg`.toLowerCase();
  }

  renderHero(parentNode) {
    const imgPath = require(`../img/${this.img}`);
    // const imgPath = `./src/img/${this.img}`;
    const user = document.createElement('div');
    const character = document.createElement('div');
    const charName = document.createElement('div');
    const charWords = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');

    user.classList.add('user');
    character.classList.add('character');
    charName.classList.add('name');
    charWords.classList.add('words');
    imgCont.classList.add('avatar');

    charName.innerHTML = this.name;
    charWords.innerHTML = this.words;
    img.setAttribute('src', `dist/${imgPath}`);

    imgCont.appendChild(img);
    user.appendChild(imgCont);
    character.appendChild(charName);
    character.appendChild(charWords);
    user.appendChild(character);
    parentNode.appendChild(user);
  }
}

module.exports = function (heroes, words) {
  const parentHode = document.querySelector('.users');
  for (let i = 0; i < heroes.length; i += 1) {
    const currentHero = heroes[i];
    let houseWords = false;
    if (currentHero.house && words[currentHero.house]) {
      houseWords = words[currentHero.house];
    }
    const hero = new Hero(currentHero.name, houseWords);
    hero.renderHero(parentHode);
  }
};
