export const fetchTopRatedMovies = async () => {
  const fetch = require("node-fetch");

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TOKEN,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    // console.log(JSON.stringify(json, null, 2));
    return json.results;
  } catch (error) {
    console.log(error);
  }
};
