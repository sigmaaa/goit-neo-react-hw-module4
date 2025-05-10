import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID ES_4iv7hBbw2B6JRkjM0r323cIS7npq1lLs3iBr2o-E";
axios.defaults.headers.common["Accept-Version"] = "v1";

const fetchImagesFromQuery = async (searchQuery, currPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: searchQuery,
      page: currPage,
    },
  });
  return response.data.results;
};

export default fetchImagesFromQuery;
