'use strict'

// Import the necessary modules.
const got = require('got')
const { stringify } = require('querystring')

/**
 * The image model.
 * @typedef {Object} Image
 * @property {string} id The id of the image.
 * @property {string} url The url to the image.
 * @property {string} lang The language of the image.
 * @property {string} likes The amount of likes.
 */

/**
 * The movie images model.
 * @typedef {Object} MovieImages
 * @property {string} name The name of the movie.
 * @property {string} tmdb_id The tmdb id of the movie.
 * @property {string} imdb_id The imdb id of the movie.
 * @property {Array<Image>} hdmovielogo The hdmovielogo of the response.
 * @property {Array<Image>} moviedisc The moviedisc of the response.
 * @property {Array<Image>} movielogo The movielogo of the response.
 * @property {Array<Image>} movieposter The movieposter of the response.
 * @property {Array<Image>} hdmovieclearart The hdmovieclearart of the
 * response.
 * @property {Array<Image>} movieart The movieart of the response.
 * @property {Array<Image>} moviebackground The moviebackground of the
 * response.
 * @property {Array<Image>} moviethumb The moviethumb of the response.
 */

/**
 * The latest movie images model.
 * @typedef {Object} LatestMoviesImages
 * @property {string} tmdb_id The tmdb id of the movie. 
 * @property {string} imdb_id The imdb id of the movie. 
 * @property {string} name The name of the movie. 
 * @property {string} new_images The amount of new images.
 * @property {string} total_images The amount of total images.
 */

/**
 * The show images model.
 * @typedef {Object} ShowImages
 * @property {string} name The name of the show.
 * @property {string} thetvdb_id The thetvdb id of the show.
 * @property {Array<Image>} clearlogo The clearlogo of the response.
 * @property {Array<Image>} hdtvlogo The hdtvlogo of the response.
 * @property {Array<Image>} clearart The clearart of the response.
 * @property {Array<Image>} showbackground The showbackground of the
 * response.
 * @property {Array<Image>} tvthumb The tvthumb of the response.
 * @property {Array<Image>} seasonposter The seasonposter of the response.
 * @property {Array<Image>} seasonthumb The seasonthumb of the response.
 * @property {Array<Image>} hdclearart The hdclearart of the response.
 * @property {Array<Image>} tvbanner The tvbanner of the response.
 * @property {Array<Image>} characterart The characterart of the response.
 * @property {Array<Image>} tvposter The tvposter of the response.
 * @property {Array<Image>} seasonbanner The seasonbanner of the response.
 */

/**
 * The latest show images model.
 * @typedef {Object} LatestShowsImages
 * @property {string} id The thetvdb id of the show.
 * @property {string} name The name of the show.
 * @property {string} new_images The amount of new images.
 * @property {string} total_images The amount of total images.
 */

/**
 * The album images model.
 * @typedef {Object} AlbumImages
 * @property {Array<Image>} albumcover
 * @property {Array<Image>} cdart
 */

/**
 * The album model.
 * @typedef {Object} Album
 * @property {AlbumImages} mbid_id
 */

/**
 * The artist images model.
 * @typedef {Object} ArtistImages
 * @property {!string} name The name of the artist.
 * @property {!string} mbid_id The mbid id of the artist.
 * @property {?Array<Image>} artistbackground The artistbackground of the
 * response.
 * @property {?Array<Image>} artistthumb The artistthumb of the response.
 * @property {?Array<Image>} musiclogo The musiclogo of the response.
 * @property {?Array<Image>} hdmusiclogo The hdmusiclogo of the response.
 * @property {?Album} albums The albums of the response.
 * @property {?Array<Image>} musicbanner The musicbanner of the response.
 */

/**
 * The latest artist images model.
 * @typedef {Object} LatestArtistsImages
 * @property {!string} id The mbid id of the album.
 * @property {!string} name The name of the album.
 * @property {!string} new_images The amount of new images.
 * @property {!string} total_images The amount of total images.
 */

/**
 * The album images model.
 * @typedef {Object} AlbumImages
 * @property {!string} name The name of the album.
 * @property {!string} mbid_id The mbid id of the album.
 * @property {!Album} albums The albums of the response.
 */

/**
 * The music label images model.
 * @typedef {Object} LabelImages
 * @property {!string} name The name of the music label.
 * @property {!string} id The mbid id of the music label.
 * @property {!Array<Image>} musiclabel The musiclabel of the response.
 */

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
   * @param {!string} endpoint - The endpoint to make the request to.
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
   * @returns {Promise<MovieImages, Error>} - The promise to get images from a
   * movie.
   */
  getMovieImages(id) {
    return this._get(`movies/${id}`)
  }

  /**
   * Get the latest movie images.
   * @returns {Promise<Array<LatestMoviesImages>, Error>} - The promise to get
   * the latest movie images.
   */
  getLatestMoviesImages() {
    return this._get('movies/latest')
  }

  /**
   * Get show images based on the given id.
   * @param {!string} id - The id of the show you want images of.
   * @returns {Promise<ShowImages, Error>} - The promise to get images from a
   * show.
   */
  getShowImages(id) {
    return this._get(`tv/${id}`)
  }

  /**
   * Get the latest shows images.
   * @returns {Promise<Array<LatestShowsImages>, Error>} - The promise to get
   * the latest show images.
   */
  getLatestShowsImages() {
    return this._get('tv/latest')
  }

  /**
   * Get artist images based on the given id.
   * @param {!string} id - The id of the artist you want images of.
   * @returns {Promise<ArtistImages, Error>} - The promise to get images from
   * an artist.
   */
  getArtistImages(id) {
    return this._get(`music/${id}`)
  }

  /**
   * Get album images based on the given id.
   * @param {!string} id - The id of the album you want images of.
   * @returns {Promise<AlbumImages, Error>} - The promise to get images from
   * an album.
   */
  getAlbumImages(id) {
    return this._get(`music/albums/${id}`)
  }

  /**
   * Get label images based on the given id.
   * @param {!string} id - The id of the label you want images of.
   * @returns {Promise<LabelImages, Error>} - The promise to get images from a
   * label.
   */
  getLabelImages(id) {
    return this._get(`music/labels/${id}`)
  }

  /**
   * Get the latest artists images.
   * @returns {Promise<Array<LatestArtistsImages>, Error>} - The promise to
   * get the latest artists images.
   */
  getLatestArtistsImages() {
    return this._get('music/latest')
  }

}
