var expect = require('expect');

var {isRealString} = require("./validation");

//import isRealString
describe('isRealString', () => {
  it('Should test whether is a real string', () => {
    var strTrue = 'Happy happy ocean land';

    expect(isRealString(strTrue)).toBe(true);
  })
})

describe('isRealString', () => {
  it('Should return false to something that is not a string', () => {
    var strFalse = true;

    expect(isRealString(strFalse)).toBe(false);
  });
});

describe('isRealString', () => {
  it ('Should reject string with only spaces', () => {
    var strSpaces = '     ';

    expect(isRealString(strSpaces)).toBe(false);
  })
})



//is real String
  //should reject non-String



  //should reject string with only spaces
  //should allow strings with non-space characters
