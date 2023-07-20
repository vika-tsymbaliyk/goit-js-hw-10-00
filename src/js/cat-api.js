import axios from "axios";
import { apiAdress, API_KEY, apiSearch } from "./refs.js";

axios.defaults.headers.common["x-api-key"] = API_KEY;

function fetchBreeds() {
   return axios.get(`${apiAdress}`)
       .then(response => {
           if (response.status !== 200) {
               throw new Error(response.statusText);
           }
           return response.data;
       })
};


function fetchCatByBreed(breedId) {
    return axios.get(`${apiSearch}?breed_ids=${breedId}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.data;
        })
       
};

export {fetchBreeds, fetchCatByBreed}