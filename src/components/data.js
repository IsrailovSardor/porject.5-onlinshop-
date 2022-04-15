import axios from "axios";
// BESTSELLER
export const fetchDataBestseller = (limit) => {
    return axios
      .get(`http://localhost:3000/bestseller/?_limit=${limit}`)
      .then((response) => response.data);
  };
  export const fetchDataBestsellerId = (id) => {
    return axios
      .get(`http://localhost:3000/bestseller/${id}`)
      .then((response) => response.data);
  };
//   NEWS
export const fetchDataNews = (limit) => {
    return axios
      .get(`http://localhost:3000/news/?_limit=${limit}`)
      .then((response) => response.data);
  };
//   COLLECTION
export const fetchDataCollection = (limit) => {
    return axios
      .get(`http://localhost:3000/collection/?_limit=${limit}`)
      .then((response) => response.data);
  };
  export const fetchDataCollections = () => {
    return axios
      .get(`http://localhost:3000/collection`)
      .then((response) => response.data);
  };

  export const fetchDataCollectionId = (id) => {
    return axios
      .get(`http://localhost:3000/collection/${id}`)
      .then((response) => response.data);
  };
  // INFORM
  export const fetchDataInform = () => {
    return axios
      .get(`http://localhost:3000/informat`)
      .then((response) => response.data);
  };
    // PUBLIC
    export const fetchDataPubl = () => {
      return axios
        .get(`http://localhost:3000/publ`)
        .then((response) => response.data);
    };