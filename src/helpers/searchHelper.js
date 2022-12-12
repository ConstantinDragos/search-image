import axios from 'axios';

export const searchImages = async (search) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID BpslfHP2CwuQB1Q_Yzk7GAf3TUDxOVCJWrSymFFK8CY',
    },
    params: {
      query: search,
      items_per_page: 30,
    },
  });
  return response.data.results;
};

export const fetchImagesWithPagination = async (search, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID BpslfHP2CwuQB1Q_Yzk7GAf3TUDxOVCJWrSymFFK8CY',
    },
    params: {
      query: search,
      per_page: 30,
      page,
    },
  });
  return response.data.results;
};

export const fetchFromUrl = async (url) => {
  const response = await axios.get(url);
  return response.data.results;
};
