// Import the necessary modules.
/* eslint-disable no-console */
const FanartTvApi = require('../fanart.tv-api')

// Create a new instance of the module.
const fanart = new FanartTvApi({
  apiKey: process.env.FANART_KEY
})

// An example of all the available functions chained together.
fanart.getMovieImages('10195').then(res => {
  console.log(res)
  return fanart.getLatestMoviesImages()
}).then(res => {
  console.log(res)
  return fanart.getShowImages('75682')
}).then(res => {
  console.log(res)
  return fanart.getLatestShowsImages()
}).then(res => {
  console.log(res)
  return fanart.getArtistImages('f4a31f0a-51dd-4fa7-986d-3095c40c5ed9')
}).then(res => {
  console.log(res)
  return fanart.getAlbumImages('9ba659df-5814-32f6-b95f-02b738698e7c')
}).then(res => {
  console.log(res)
  return fanart.getLabelImages('e832b688-546b-45e3-83e5-9f8db5dcde1d')
}).then(res => {
  console.log(res)
  return fanart.getLatestArtistsImages()
}).then(res => console.log(res))
  .catch(err => console.error(err))
