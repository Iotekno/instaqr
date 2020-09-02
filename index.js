require('babel-polyfill');
require('webrtc-adapter');

var InstaQR = {
  Scanner: require('./src/scanner'),
  Camera: require('./src/camera')
};

module.exports = InstaQR;
