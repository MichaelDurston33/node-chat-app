const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new User', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office fans'
    };
    var reUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie'])
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen'])
  });

  it('should remove a user', () => {

  });

  it('should not remove a user', () => {
    //use the same func as before but using another name;.
  })

  if('should find a user'), () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

});
