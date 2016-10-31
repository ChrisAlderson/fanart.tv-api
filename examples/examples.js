"use strict";

const FanartTVAPI = require("../fanart.tv-api");
const fanart = new FanartTVAPI({
  api_key: process.env.FANART_KEY
});

fanart.getMovieImages("10195")
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getLatestMoviesImages()
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getShowImages("75682")
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getLatestShowsImages()
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getArtistImages("f4a31f0a-51dd-4fa7-986d-3095c40c5ed9")
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getAlbumImages("9ba659df-5814-32f6-b95f-02b738698e7c")
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getLabelImages("e832b688-546b-45e3-83e5-9f8db5dcde1d")
  .then(res => console.log(res))
  .catch(err => console.error(err));

fanart.getLatestArtistsImages()
  .then(res => console.log(res))
  .catch(err => console.error(err));
