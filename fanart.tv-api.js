'use strict'

const querystring = require('querystring')
const got = require('got')

module.exports = class FanartTVAPI {

  constructor({
    apiKey,
    baseUrl = 'http://webservice.fanart.tv/v3',
    debug = false
  } = {}) {
    this._baseUrl = baseUrl
    this._debug = debug

    if (!apiKey) {
      throw new Error(`No API key given!`)
    }
    FanartTVAPI.apiKey = apiKey
  }

  _get(uri, query = {api_key: FanartTVAPI.apiKey}) {
    if (this._debug) {
      console.warn(`Making request to: '${uri}${querystring.stringify(query)}`)
    }

    return got.get(`${this._baseUrl}/${uri}`, {
      json: true,
      query
    }).then(({body}) => body)
  }

  getMovieImages(id) {
    return this._get(`movies/${id}`)
  }

  getLatestMoviesImages() {
    return this._get('movies/latest')
  }

  getShowImages(id) {
    return this._get(`tv/${id}`)
  }

  getLatestShowsImages() {
    return this._get('tv/latest')
  }

  getArtistImages(id) {
    return this._get(`music/${id}`)
  }

  getAlbumImages(id) {
    return this._get(`music/albums/${id}`)
  }

  getLabelImages(id) {
    return this._get(`music/labels/${id}`)
  }

  getLatestArtistsImages() {
    return this._get('music/latest')
  }

}
