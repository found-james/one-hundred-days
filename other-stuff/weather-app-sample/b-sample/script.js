console.log("Hi hames")

let $els = null;

const API = {
  url: 'https://api.openweathermap.org/data/2.5/weather',
  key: '7f5bbd6dd05e3fdd62172d000f0b41ef',
  params: [],

  set(key, value) {
    this[key] = value;
    this.params.push(key);
    return this;
  },

    // add param to params array to add all params to the url later.
    // return this to enable chaining.


  get(callback) {
    $.ajax({
      url: this.createURL(),
      type: 'GET',
      dataType: 'json',
    })
    .done(data => callback(data))
    .fail(console.log);
  },

  clear(key) {
    delete this.key;
  },

  createURL() {
    let query = this.params.map(key => `${key}=${this[key]}`).join('&');
    return `${this.url}?${query}&appid=${this.key}`;
  },
}

    // make api request here


function update(data) {
  $els.$location.text(data.name);
  $els.$temp.html(toDeg(data.main.temp));
  $els.$desc.text(data.weather.map(desc => desc.description).join(' and '));

  $els.$min.html('min ' + toDeg(data.main.temp_min));
  $els.$max.html('max ' + toDeg(data.main.temp_max));

  if (data.main.temp <= 40) $els.$temp.css({ color: 'mediumblue'});
  if (data.main.temp >= 90) $els.$temp.css({ color: '#FF0092'});
  if (data.main.temp > 40 && data.main.temp < 90) $els.$temp.css({ color: '#fff'});
  console.log(data);
}
  // update dom elements here.


function toObject(queryStr) {
// convert form input into an object
  let obj = {};
  let values = queryStr.split('&').map(param => param.split('='));
  values.forEach(value => { obj[value[0]] = value[1] });
  return obj;
}

  // convert form query string into a two dimensional array
  // with each element containing an array with the key and value.
  // create key value pairs using the form's name and value for
  // each input.

function toDeg(temp) {
  return `${Math.round(temp)}&#176;`;
}

$(document).ready(() => {
  $els = {
    $location: $('#location'),
    $desc: $('#desc'),
    $temp: $('#temp'),
    $min: $('#min'),
    $max: $('#max'),
    $weatherDetails: $('#weather-details'),
    $searchBar: $('.search-bar'),
    $searchPage: $('#search-page'),
  };

  // if user clicks on page, then fade it out.
  $els.$searchPage.on('click', (evt) => {
    if (evt.target === $els.$searchPage[0]) {
      fadeOut($els.$searchPage[0]);
    }
  });

  $els.$searchBar.on('submit', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const values = toObject($(this).serialize());

    // set the zipcode
    if (values.hasOwnProperty('zipcode')) {
      API.set('zip', `${values.zipcode},us`);
    }

    // make api request and update page
    API
      .set('units', 'imperial')
      .get(data => update(data));

    fadeOut($els.$searchPage[0]);
  });
});

/* HELPER FUNCTIONS */

function newGame(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  window.location.href = window.location.href;
}

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

function animate(el, animationName, callback = () => {}, remove = true) {
  el.classList.toggle(animationName);
  el.addEventListener('animationend', function animationHandler() {
    if (remove) el.classList.toggle(animationName);
    el.removeEventListener('animationend', animationHandler);
    callback(el);
  });
}

function fadeOut(el) {
  animate(el, 'fadeOut', () => {
    el.style.visibility = 'hidden';
  });
}

function fadeIn(el) {
  el.style.visibility = 'visible';
  animate(el, 'fadeIn');
}

function toObject(queryStr) {
    // convert form input into an object

  let obj = {};
  let values = queryStr.split('&').map(param => param.split('='));
  values.forEach(value => { obj[value[0]] = value[1] });
  return obj;
}

  // convert form query string into a two dimensional array
  // with each element containing an array with the key and value.
  // create key value pairs using the form's name and value for
  // each input.