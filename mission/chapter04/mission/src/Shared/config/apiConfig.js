const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const apiConfig = (method) => {
  return {
    method: method,
    headers: {
      //"Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
};

const fetchData = async (method, url) => {
  const response = await fetch(url, apiConfig(method));

  let result;
  switch (response.status) {
    case 200:
      result = await response.json();
      break;
    default:
      alert("api error");
      result = null;
      break;
  }

  return result;
};

export default fetchData;
