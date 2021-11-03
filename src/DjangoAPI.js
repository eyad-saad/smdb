

const API_URL = 'http://127.0.0.1:8000';

const SEARCH_BASE_URL = `${API_URL}/movie`;

// For login
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/register`;
const LOGIN_URL = `${API_URL}authentication/obtain-token-auth`;


const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
      const endpoint = `${API_URL}&page=${page}&search_term=${search}`;
      return await (await fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
    },

    getRequestToken: async () => {
      const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
      return reqToken.request_token;
    },
    authenticate: async (requestToken, username, password) => {
      const bodyData = {
        username,
        password,
        request_token: requestToken
      };
      // First authenticate the requestToken
      const data = await (
        await fetch(LOGIN_URL, {
          ...defaultConfig,
          body: JSON.stringify(bodyData)
        })
      ).json();
      // Then get the sessionId with the requestToken
      if (data.success) {
        const sessionId = await (
          await fetch(SESSION_ID_URL, {
            ...defaultConfig,
            body: JSON.stringify({ request_token: requestToken })
          })
        ).json();
        return sessionId;
      }
    },
    rateMovie: async (sessionId, movieId, value) => {
      const endpoint = `${API_URL}movie/rate`;
  
      const rating = await (
        await fetch(endpoint, {
          ...defaultConfig,
          body: JSON.stringify({ value }),

        })
      ).json();
  
      return rating;
    }
  };
  
  export default apiSettings;
  