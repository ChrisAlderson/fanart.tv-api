'use strict'

// Import the necessary modules.
const { expect } = require('chai')
const FanartTvApi = require('../fanart.tv-api')

/** @test {FanartTvApi} */
describe('Fanart.tv', () => {
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
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getShowImages} */
  it('should get show images', done => {
    fanart.getShowImages(tvId).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLatestShowsImages} */
  it('should get latest shows images', done => {
    fanart.getLatestShowsImages().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getArtistImages} */
  it('should get artist images', done => {
    fanart.getArtistImages(artistId).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getAlbumImages} */
  it('should get album images', done => {
    fanart.getAlbumImages(albumId).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLabelImages} */
  it('should get label images', done => {
    fanart.getLabelImages(labelId).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {FanartTvApi#getLatestArtistsImages} */
  it('should get latest artists images', done => {
    fanart.getLatestArtistsImages().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
