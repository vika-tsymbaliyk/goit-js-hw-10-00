const selectCat = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

const API_KEY = 'live_8zAi5XiUTLZyOAgsYoI3KU97aQVEBkFkhfB50Co1DSBhkjX7cHCzs7lU8OH1sDnr';

const apiAdress = 'https://api.thecatapi.com/v1/breeds';
const apiSearch = 'https://api.thecatapi.com/v1/images/search';

export { selectCat, catInfo, loader, error, API_KEY, apiAdress, apiSearch}