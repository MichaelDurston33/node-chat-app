var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'wank';
    var text = 'sausage';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text})
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
      var from = "crocodile";
      var url = "https://www.google.com/maps?q=51.5842612,-0.1640652";
      var locationMessage = generateLocationMessage('crocodile', 51.5842612, -0.1640652)

      expect(locationMessage.createdAt).toBeA('number');
      expect(locationMessage).toInclude({from, url})
  });
});
