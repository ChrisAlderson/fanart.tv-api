# fanart.tv-api

[![Build Status](https://travis-ci.org/ChrisAlderson/fanart.tv-api.svg?branch=master)](https://travis-ci.org/ChrisAlderson/fanart.tv-api)
[![Dependency Status](https://david-dm.org/ChrisAlderson/fanart.tv-api.svg)](https://david-dm.org/ChrisAlderson/fanart.tv-api)
[![devDependency Status](https://david-dm.org/ChrisAlderson/fanart.tv-api/dev-status.svg)](https://david-dm.org/ChrisAlderson/fanart.tv-api#info=devDependencies)

A Fanart.tv API wrapper for NodeJS.

## Usage

#### Setup
```
npm install --save fanart.tv-api
```

#### Initialize
```js
const FanartAPI = require('fanart.tv-api')

// Options are the request default options.
const fanartAPI = new FanartAPI({apiKey, [options , debug]})
```

#### Example usage
```js
 - fanart.getMovieImages(movieId)
 - fanart.getLatestMoviesImages()
 - fanart.getShowImages(tvId)
 - fanart.getLatestShowsImages()
 - fanart.getArtistImages(artistId)
 - fanart.getAlbumImages(albumId)
 - fanart.getLabelImages(labelId)
 - fanart.getLatestArtistsImages()
```

## Testing
```
FANART_KEY=[YOUR API KEY HERE] npm test
```

# License

MIT License

Copyright (c) 2017 - fanart.tv-api - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
