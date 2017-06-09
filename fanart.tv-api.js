'use strict';

const querystring = require('querystring');
const got = require('got');

module.exports = class FanartTVAPI {

  constructor({api_key, baseUrl = 'http://webservice.fanart.tv/v3/', debug = false} = {}) {
    this._baseUrl = baseUrl;
    this._debug = debug;

    if (!api_key) throw new Error(`No API key given!`);
    FanartTVAPI.api_key = api_key;
  }

  _get(uri, query = {api_key: FanartTVAPI.api_key}) {
    if (this._debug)
      console.warn(`Making request to: '${uri}${querystring.stringify(query)}`);

    return got.get(`${this._baseUrl}/${uri}`, { query })
      .then(({body}) => body);
  }

  getMovieImages(id) {
    return this._get(`movies/${id}`);
  }

  getLatestMoviesImages() {
    return this._get('movies/latest');
  }

  getShowImages(id) {
    return this._get(`tv/${id}`);
  }

  getLatestShowsImages() {
    return this._get('tv/latest');
  }

  getArtistImages(id) {
    return this._get(`music/${id}`);
  }

  getAlbumImages(id) {
    return this._get(`music/albums/${id}`);
  }

  getLabelImages(id) {
    return this._get(`music/labels/${id}`);
  }

  getLatestArtistsImages() {
    return this._get('music/latest');
  }

}
