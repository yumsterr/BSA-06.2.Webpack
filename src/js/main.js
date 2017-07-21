require('./../css/style.sass');


const users = [
  { name: 'Arya Stark', house: 'Stark' },
  { name: 'Bran Stark', house: 'Stark' },
  { name: 'Sansa Stark', house: 'Stark' },
  { name: 'Brienne Tarth', house: 'Tarth' },
  { name: 'Cersei Lannister', house: 'Lannister' },
  { name: 'Jaime Lannister', house: 'Lannister' },
  { name: 'Tyrion Lannister', house: 'Lannister' },
  { name: 'Daenerys Targaryen', house: 'Targaryen' },
  { name: 'Jon Snow', house: 'Stark' },
  { name: 'Petyr Baelish', house: 'Baelish' },
  { name: 'Theon Greyjoy', house: 'Greyjoy' },
  { name: 'Tormund Giantsbane', house: false },
];


// Houses words
const familyWords = {
  Stark: 'Winter is Coming',
  Greyjoy: 'We Do Not Sow',
  Lannister: 'Hear Me Roar!',
  Targaryen: 'Fire and Blood',
};

require('./userList')(users, familyWords);
