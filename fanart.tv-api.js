'use strict'

// Import the necessary modules.
const got = require('got')

// Create a new instance of the module.
const { stringify } = require('querystring')

/**
 * A Fanart.tv API wrapper for NodeJS.
 * @type {FanartTvApi}
 */
module.exports = class FanartTvApi {

  /**
   * Create a new instance of the module.
   * @param {!Object} config={} - The configuration object for the module.
   * @param {!string} config.apiKey - Your fanart API key.
   * @param {!string} config.baseUrl=https://webservice.fanart.tv/v3/ - The
   * base url of the fanart API service.
   * @param {?boolean} [config.debug=false] - Show extra output.
   */
  constructor({
    apiKey,
    baseUrl = 'https://webservice.fanart.tv/v3/',
    debug = false
  } = {}) {
    /**
     * The base url of the fanart API service.
     * @type {string}
     */
    this._baseUrl = baseUrl

    /**
     * Show extra output.
     * @type {boolean}
     */
    this._debug = debug

    if (!apiKey) {
      throw new Error(`No API key given!`)
    }

    /**
     * Your fanart API key.
     * @type {string}
     */
    FanartTvApi.apiKey = apiKey
  }

  /**
   * Send a GET request to the fanart API service.
   * @returns {Promise<Function, Error>} - A promise object.
   */
  _get(endpoint) {
    const uri = `${this._baseUrl}${endpoint}`
    const query = {
      api_key: FanartTvApi.apiKey
    }

    if (this._debug) {
      console.warn(`Making request to: '${uri}?${stringify(query)}`)
    }

    return got.get(uri, {
      query,
      json: true
    }).then(({body}) => body)
  }

  /**
   * Get movie images based on the given id.
   * @param {!string} id - The id of the movie you want images of.
   * @returns {Promise<Object, Error>} - The promise to get images from a
   * movie.
   */
  getMovieImages(id) {
    return this._get(`movies/${id}`)
  }

  /**
   * Get the latest movie images.
   * @returns {Promise<Object, Error>} - The promise to get the latest movie
   * images.
   */
  getLatestMoviesImages() {
    return this._get('movies/latest')
  }

  /**
   * Get show images based on the given id.
   * @param {!string} id - The id of the show you want images of.
   * @returns {Promise<Object, Error>} - The promise to get images from a
   * show.
   */
  getShowImages(id) {
    return this._get(`tv/${id}`)
  }

  /**
   * Get the latest shows images.
   * @returns {Promise<Object, Error>} - The promise to get the latest show
   * images.
   */
  getLatestShowsImages() {
    return this._get('tv/latest')
  }

  /**
   * Get artist images based on the given id.
   * @param {!string} id - The id of the artist you want images of.
   * @returns {Promise<Object, Error>} - The promise to get images from an
   * artist.
   */
  getArtistImages(id) {
    return this._get(`music/${id}`)
  }

  /**
   * Get album images based on the given id.
   * @param {!string} id - The id of the album you want images of.
   * @returns {Promise<Object, Error>} - The promise to get images from an
   * album.
   */
  getAlbumImages(id) {
    return this._get(`music/albums/${id}`)
  }

  /**
   * Get label images based on the given id.
   * @param {!string} id - The id of the label you want images of.
   * @returns {Promise<Object, Error>} - The promise to get images from a
   * label.
   */
  getLabelImages(id) {
    return this._get(`music/labels/${id}`)
  }

  /**
   * Get the latest artists images.
   * @returns {Promise<Object, Error>} - The promise to get the latest
   * artists images.
   */
  getLatestArtistsImages() {
    return this._get('music/latest')
  }

}
