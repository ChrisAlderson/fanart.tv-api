'use strict';

const chai = require('chai');
const assert = chai.assert;

const FanartTVAPI = require('../fanart.tv-api');

describe('Fanart.tv', () => {

  let fanart, movieId, tvId, artistId, albumId, labelId;
  before(() => {
    fanart = new FanartTVAPI({
      api_key: process.env.FANART_KEY
    });

    movieId = '10195';
    tvId = '75682';
    artistId = 'f4a31f0a-51dd-4fa7-986d-3095c40c5ed9';
    albumId = '9ba659df-5814-32f6-b95f-02b738698e7c';
    labelId = 'e832b688-546b-45e3-83e5-9f8db5dcde1d';
  });

  it('getMovieImages', done => {
    fanart.getMovieImages(movieId).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });


  it('getLatestMoviesImages', done => {
    fanart.getLatestMoviesImages().then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });


  it('getShowImages', done => {
    fanart.getShowImages(tvId).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });


  it('getLatestShowsImages', done => {
    fanart.getLatestShowsImages().then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });


  it('getArtistImages', done => {
    fanart.getArtistImages(artistId).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });


  it('getAlbumImages', done => {
    fanart.getAlbumImages(albumId).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });


  it('getLabelImages', done => {
    fanart.getLabelImages(labelId).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });


  it('getLatestArtistsImages', done => {
    fanart.getLatestArtistsImages().then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });


});
