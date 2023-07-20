import { selectCat, catInfo, error} from "./refs";
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';


Loading.standard('Loading data, please wait...', {
    backgroundColor: 'rgba(0.5,0,0,0.2)',
});

fetchBreeds()
    .then(breeds => {
        Loading.remove();
        selectCat.innerHTML = breeds.map(({ id, name }) => {
            return `<option value="${id}"> ${name}</option>`
        }).join('');
        new SlimSelect({
            select: selectCat,
        })
    })
    .catch(() => {
        Report.failure(
            'Oops!',
            'Something went wrong! Try reloading the page!',
            'Okay',
        )
    }
    )
        .finally(
            Loading.remove()
);
        
selectCat.addEventListener('change', onSelect);

function onSelect(event) {
    event.preventDefault();
    Loading.standard('Loading data, please wait...', {
    backgroundColor: 'rgba(0.5,0,0,0.2)',
    });
    const breedId = event.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(data => {
            catInfo.innerHTML = createMarkup(data)
            Loading.remove();
        }
    )
        .catch(() => {
            catInfo.innerHTML = '';
            Report.failure(
        'Oops!',
        'Something went wrong! Try reloading the page!',
        'Okay',
        );
        } 
    )
    .finally(
            Loading.remove()
    );
}


function createMarkup(data) {
    const { url, breeds } = data[0];
    return `<h2 class = "cat-name">${breeds[0].name}</h2>
      <div class = "cat-card">
      <img src="${url}" alt="" width="300" />
      <div>
        <p>${breeds[0].description}</p>
        <p><span class = "temperament">Temperament: </span>${breeds[0].temperament}</p>
        </div>
      </div>`
}