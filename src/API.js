

const API_URL = 'http://127.0.0.1:8000';

const SEARCH_BASE_URL = `${API_URL}/movie`;

// For login
const REQUEST_TOKEN_URL = `${API_URL}/register`;
const LOGIN_URL = `${API_URL}/login`;


const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
      const endpoint = `${API_URL}/movies?page=${page}&search-term=${searchTerm}`;
      console.log(endpoint)
      return await (await fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
      const endpoint = `${API_URL}/movies/${movieId}`;
      return await (await fetch(endpoint)).json();
    },
    fetchCredits: async movieId => {
      const creditsEndpoint = `${API_URL}/movies/${movieId}/actors`;
      return await (await fetch(creditsEndpoint)).json();
    },
    fetchDirectors: async movieId => {
      const creditsEndpoint = `${API_URL}/movies/${movieId}/directors`;
      return await (await fetch(creditsEndpoint)).json();
    },
    register: async (username, password) => {
      const headers = { 'Content-Type': 'application/json' }
      const body = JSON.stringify({'username': username, 'password': password});
      const reqToken = await (await fetch(REQUEST_TOKEN_URL, {method: 'POST', body: body, headers: headers})).json();
      return reqToken.token;
    },
    login: async (username, password) => {
      const headers = { 'Content-Type': 'application/json' }
      const body = JSON.stringify({'username': username, 'password': password});
      const reqToken = await (await fetch(LOGIN_URL, {method: 'POST', body: body, headers: headers})).json();
      return reqToken.token;
    },
    rateMovie: async (token, movieId, rating) => {
      const headers = {  'Content-Type': 'application/json',
                         'Authorization': 'Token ' + token }
      const body = JSON.stringify({'movie':movieId, 'rating': rating});
      const response = await (await fetch(`${API_URL}/movies/rate`, {method: 'POST', body: body, headers: headers})).json();
      return response;
    },
    // authenticate: async (requestToken, username, password) => {
    //   const bodyData = {
    //     username,
    //     password,
    //     request_token: requestToken
    //   };
    //   // First authenticate the requestToken
    //   const data = await (
    //     await fetch(LOGIN_URL, {
    //       ...defaultConfig,
    //       body: JSON.stringify(bodyData)
    //     })
    //   ).json();
    //   // Then get the sessionId with the requestToken
    //   if (data.success) {
    //     const sessionId = await (
    //       await fetch(SESSION_ID_URL, {
    //         ...defaultConfig,
    //         body: JSON.stringify({ request_token: requestToken })
    //       })
    //     ).json();
    //     return sessionId;
    //   }
    // },
  //   rateMovie: async (sessionId, movieId, value) => {
  //     const endpoint = `${API_URL}/movies/rate`;
  
  //     const rating = await (
  //       await fetch(endpoint, {
  //         ...defaultConfig,
  //         body: JSON.stringify({ value }),

  //       })
  //     ).json();
  
  //     return rating;
  //   }
  };
  
  export default apiSettings;
  