'use strict';

const querystring = require('querystring');
const request = require('request');

const defaultOptions = {
  baseUrl: 'http://webservice.fanart.tv/v3/',
  timeout: 5 * 1000
};

module.exports = class FanartTVAPI {

  constructor({api_key, options = defaultOptions, debug = false} = {}) {
    this._request = request.defaults(options);
    this._debug = debug;

    if (!api_key) throw new Error(`No API key given!`);
    FanartTVAPI.api_key = api_key;
  }

  _get(uri, qs, retry = true) {
    if (this._debug) console.warn(`Making request to uri: ${uri}, qs: '${querystring.stringify(qs)}'`);
    return new Promise((resolve, reject) => {
      return this._request({ uri, qs }, (err, res, body) => {
        if (err && retry) {
          return resolve(this._get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found for uri: ${uri}, qs: '${querystring.stringify(qs)}', statuscode: ${res.statusCode}`))
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  }

  getMovieImages(id) {
    return this._get(`movies/${id}`, {
      api_key: FanartTVAPI.api_key
    });
  }

  getLatestMoviesImages() {
    return this._get('movies/latest', {
      api_key: FanartTVAPI.api_key
    });
  }

  getShowImages(id) {
    return this._get(`tv/${id}`, {
      api_key: FanartTVAPI.api_key
    });
  }

  getLatestShowsImages() {
    return this._get('tv/latest', {
      api_key: FanartTVAPI.api_key
    });
  }

  getArtistImages(id) {
    return this._get(`music/${id}`, {
      api_key: FanartTVAPI.api_key
    });
  }

  getAlbumImages(id) {
    return this._get(`music/albums/${id}`, {
      api_key: FanartTVAPI.api_key
    });
  }

  getLabelImages(id) {
    return this._get(`music/labels/${id}`, {
      api_key: FanartTVAPI.api_key
    });
  }

  getLatestArtistsImages() {
    return this._get('music/latest', {
      api_key: FanartTVAPI.api_key
    });
  }

}
