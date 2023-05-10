import axios from 'axios';

export const weatherdata = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://weather.post.piyush.live/api/',
        headers: {
          'content-type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        },
        data:inputData
    };


    let response = await axios(options);
      return response;


  } catch (error) {
    console.error(error.response.data); 
  }
};