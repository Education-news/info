// change language

const checkBox = document.getElementById('checkBox');
const english = document.getElementsByClassName('english');
const bengla = document.getElementsByClassName('bengla');

checkBox.addEventListener('change', function() {
  if (this.checked) {
    for (let i = 0; i < english.length; i++) {
      english[i].style.display = 'none';
    }
    for (let i = 0; i < bengla.length; i++) {
      bengla[i].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < english.length; i++) {
      english[i].style.display = 'flex';
    }
    for (let i = 0; i < bengla.length; i++) {
      bengla[i].style.display = 'none';
    }
  }
});



// set year

var days = document.getElementById('days');
var years = document.getElementById('years');
var daysBn = document.getElementById('daysBn');
var yearsBn = document.getElementById('yearsBn');
let today = new Date();
let date1 = new Date("03/23/2007");

let Difference_In_Time =
  today.getTime() - date1.getTime();
 
let Difference_In_Days =
  Math.round
    (Difference_In_Time / (1000 * 3600 * 24));

let Difference_In_Year =
  Math.round
    (Difference_In_Time / (1000 * 3600 * 24 * 365));

days.innerHTML += `${Difference_In_Days} days `;
years.innerHTML += ` ${Difference_In_Year} years`;
daysBn.innerHTML += `${Difference_In_Days} দিন `;
yearsBn.innerHTML += ` ${Difference_In_Year} বছর`;

// set anime & manga list

const episode = document.getElementById('episode');
const anime = document.getElementById('anime');
const manga = document.getElementById('manga');
const episodeBn = document.getElementById('episodeBn');
const animeBn = document.getElementById('animeBn');
const mangaBn = document.getElementById('mangaBn');

fetch('./sample.json')
  .then(response => response.json())
  .then(data => {
    episode.innerHTML += `${data.episode} episodes`;
    anime.innerHTML += `${data.anime} anime series`;
    manga.innerHTML += `${data.manga} manga chapters`;
    episodeBn.innerHTML += `${data.episode}টি পর্ব`;
    animeBn.innerHTML += `${data.anime}টি অ্যানিমে`;
    mangaBn.innerHTML += `${data.manga}টি মাঙ্গা`;
  })