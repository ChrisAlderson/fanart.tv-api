'use strict'

// Import the necessary modules.
const { expect } = require('chai')
const FanartTvApi = require('../fanart.tv-api')

/** @test {FanartTvApi} */
describe('FanartTvApi', () => {
  /**
   * The FanartTvApi instance.
   * @type {FanartTvApi}
   */
  let fanart

  /**
   * The movie id to get.
   * @type {string}
   */
  let movieId

  /**
   * The tv show id to get.
   * @type {string}
   */
  let tvId

  /**
   * The artist id to get.
   * @type {string}
   */
  let artistId

  /**
   * The album id to get.
   * @type {string}
   */
  let albumId

  /**
   * The label id to get.
   * @type {string}
   */
  let labelId

  /**
   * Hook for setting up the FanartTvApi tests.
   * @type {Function}
   */
  before(() => {
    // Disable the warn logging function to testing.
    console.warn = () => {}

    fanart = new FanartTvApi({
      apiKey: process.env.FANART_KEY,
      debug: true
    })

    movieId = '10195'
    tvId = '75682'
    artistId = 'f4a31f0a-51dd-4fa7-986d-3095c40c5ed9'
    albumId = '9ba659df-5814-32f6-b95f-02b738698e7c'
    labelId = 'e832b688-546b-45e3-83e5-9f8db5dcde1d'
  })

  /**
   * Test the attributes of an image.
   * @param {Image} image - The image to test.
   * @returns {undefined}
   */
  function testImageAttributes(image) {
    expect(image).to.be.an('object')
    expect(image.id).to.be.a('string')
    expect(image.likes).to.be.a('string')
    expect(image.url).to.be.a('string')
  }

  /**
   * Test all the arrays of images.
   * @param {Object] res - The object with image arrays.
   * @returns {undefined}
   */
  function testImagesArrays(res) {
    Object.keys(res).map(k => {
      if (res[k] instanceof Array) {
        const random = Math.floor(Math.random() * res[k].length)
        testImageAttributes(res[k][random])
      }
    })
  }

  /**
   * Test the album attributes.
   * @param {Album} album - The album to test.
   * @returns {undefined}
   */
  function testAlbumAttributes(album) {
    expect(album).to.be.an('object')

    const keys = Object.keys(album)
    const random = Math.floor(Math.random() * keys.length)
    const toTest = album[keys[random]]

    testImagesArrays(toTest)
  }


  /** @test {FanartTvApi#constructor} */
  it('should throw an error when there is no apiKey', () => {
    try {
      const fanartApi = new FanartTvApi()
      expect(fanartApi).to.be.an('object')
    } catch (err) {
      expect(err).to.be.an('Error')
    }
  })

  /** @test {FanartTvApi#getMovieImages} */
  it('should get movie images', done => {
    fanart.getMovieImages(movieId).then(res => {
      expect(res).to.be.an('object')
      expect(res.name).to.be.a('string')
      expect(res.tmdb_id).to.be.a('string')
      expect(res.imdb_id).to.be.a('string')
      expect(res.hdmovielogo).to.be.an('array')
      expect(res.moviedisc).to.be.an('array')
      expect(res.movielogo).to.be.an('array')
      expect(res.movieposter).to.be.an('array')
      expect(res.hdmovieclearart).to.be.an('array')
      expect(res.movieart).to.be.an('array')
      expect(res.moviebackground).to.be.an('array')
      expect(res.moviethumb).to.be.an('array')

      testImagesArrays(res)

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLatestMoviesImages} */
  it('shoud get latest movies images', done => {
    fanart = new FanartTvApi({
      apiKey: process.env.FANART_KEY
    })
    fanart.getLatestMoviesImages().then(res => {
      expect(res).to.be.an('array')

      const random = Math.floor(Math.random() * res.length)
      const toTest = res[random]

      expect(toTest.tmdb_id).to.be.a('string')
      expect(toTest.imdb_id).to.be.a('string')
      expect(toTest.name).to.be.a('string')
      expect(toTest.new_images).to.be.a('string')
      expect(toTest.total_images).to.be.a('string')

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getShowImages} */
  it('should get show images', done => {
    fanart.getShowImages(tvId).then(res => {
      expect(res).to.be.an('object')
      expect(res.name).to.be.a('string')
      expect(res.thetvdb_id).to.be.a('string')
      expect(res.clearlogo).to.be.an('array')
      expect(res.hdtvlogo).to.be.an('array')
      expect(res.showbackground).to.be.an('array')
      expect(res.tvthumb).to.be.an('array')
      expect(res.seasonposter).to.be.an('array')
      expect(res.seasonthumb).to.be.an('array')
      expect(res.hdclearart).to.be.an('array')
      expect(res.tvbanner).to.be.an('array')
      expect(res.characterart).to.be.an('array')
      expect(res.tvposter).to.be.an('array')
      expect(res.seasonbanner).to.be.an('array')

      testImagesArrays(res)

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLatestShowsImages} */
  it('should get latest shows images', done => {
    fanart.getLatestShowsImages().then(res => {
      expect(res).to.be.an('array')

      const random = Math.floor(Math.random() * res.length)
      const toTest = res[random]

      expect(toTest.id).to.be.a('string')
      expect(toTest.name).to.be.a('string')
      expect(toTest.new_images).to.be.a('string')
      expect(toTest.total_images).to.be.a('string')

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getArtistImages} */
  it('should get artist images', done => {
    fanart.getArtistImages(artistId).then(res => {
      expect(res).to.be.an('object')
      expect(res.name).to.be.a('string')
      expect(res.mbid_id).to.be.a('string')
      expect(res.artistbackground).to.be.an('array')
      expect(res.musiclogo).to.be.an('array')
      expect(res.hdmusiclogo).to.be.an('array')
      testAlbumAttributes(res.albums)
      expect(res.musicbanner).to.be.an('array')

      testImagesArrays(res)

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getAlbumImages} */
  it('should get album images', done => {
    fanart.getAlbumImages(albumId).then(res => {
      expect(res).to.be.an('object')

      expect(res.name).to.be.a('string')
      expect(res.mbid_id).to.be.a('string')
      testAlbumAttributes(res.albums)

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLabelImages} */
  it('should get label images', done => {
    fanart.getLabelImages(labelId).then(res => {
      expect(res).to.be.an('object')
      expect(res.name).to.be.a('string')
      expect(res.id).to.be.a('string')

      testImagesArrays(res)

      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLatestArtistsImages} */
  it('should get latest artists images', done => {
    fanart.getLatestArtistsImages().then(res => {
      expect(res).to.be.an('array')

      const random = Math.floor(Math.random() * res.length)
      const toTest = res[random]

      expect(toTest.name).to.be.a('string')
      expect(toTest.id).to.be.a('string')
      expect(toTest.new_images).to.be.a('string')
      expect(toTest.total_images).to.be.a('string')

      done()
    }).catch(done)
  })
})
