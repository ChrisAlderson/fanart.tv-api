'use strict'

const { expect } = require('chai')
const FanartTVAPI = require('../fanart.tv-api')

describe('Fanart.tv', () => {
  let fanart, movieId, tvId, artistId, albumId, labelId

  before(() => {
    console.warn = () => {}
    fanart = new FanartTVAPI({
      apiKey: process.env.FANART_KEY,
      debug: true
    })

    movieId = '10195'
    tvId = '75682'
    artistId = 'f4a31f0a-51dd-4fa7-986d-3095c40c5ed9'
    albumId = '9ba659df-5814-32f6-b95f-02b738698e7c'
    labelId = 'e832b688-546b-45e3-83e5-9f8db5dcde1d'
  })

  it('should throw an error when there is no apiKey', () => {
    try {
      const fanartApi = new FanartTVAPI()
      expect(fanartApi).to.be.an('object')
    } catch (err) {
      expect(err).to.be.an('Error')
    }
  })

  it('should get movie images', done => {
    fanart.getMovieImages(movieId).then(res => {
      expect(res).to.be.an('object')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('shoud get latest movies images', done => {
    fanart._debug = false
    fanart.getLatestMoviesImages().then(res => {
      expect(res).to.be.an('array')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get show images', done => {
    fanart.getShowImages(tvId).then(res => {
      expect(res).to.be.an('object')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get latest shows images', done => {
    fanart.getLatestShowsImages().then(res => {
      expect(res).to.be.an('array')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get artist images', done => {
    fanart.getArtistImages(artistId).then(res => {
      expect(res).to.be.an('object')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get album images', done => {
    fanart.getAlbumImages(albumId).then(res => {
      expect(res).to.be.an('object')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get label images', done => {
    fanart.getLabelImages(labelId).then(res => {
      expect(res).to.be.an('object')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })

  it('should get latest artists images', done => {
    fanart.getLatestArtistsImages().then(res => {
      expect(res).to.be.an('array')
      setTimeout(done, 1000)
    }).catch(err => setTimeout(() => done(err), 1000))
  })
})
