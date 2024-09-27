import axios from 'axios';

import { API_URL } from '../../configs/configs';

const getBlogsList = () => {
  const url = `${API_URL}/api/blogs/getBlogsList`;
  console.log('apir url is ', url);
  return axios.get(
    url,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.data)
    .catch((err) => new Error(`There was an error fetching blogs list ${err.message}`));
};

export { getBlogsList };
