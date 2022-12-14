import axios from 'axios';
// import qs from 'query-string';
const API_KEY = '28499360-c7f5e1b7bc9940d556e6926b7';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const FetchData = async (value, page, perPage) => {
  const response = await axios.get(
    `?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_pere=${perPage}`
  );
  const responseData = await response.data;
  if (!responseData.total) {
    return Promise.reject(new Error(`No image with name ${value}`));
  }
  return responseData;
};
