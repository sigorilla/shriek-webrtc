function getIframe(text) {
  var iframeRegex = /@@iframe src=\"(https?:\/\/[^\s<\[]+)\"@@/g;

  var iframe = text.replace(iframeRegex, function (match, url, offset, string) {
    return '<iframe src="' + url + '"></iframe>';
  });

  return iframe;
}

function getWebRTC(messages, callback) {
  try {
    callback(null, messages.map(function (message) {
      var webrtcMessage = message;
      webrtcMessage.text = getIframe(message.text);
      return webrtcMessage;
    }));
  } catch (err) {
    callback(err, null);
  }
};

module.exports = getWebRTC;
module.exports.forEvent = 'channelGet';
