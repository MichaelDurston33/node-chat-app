[{
  id: '/123123',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser()
// removeUser
// fetch a user
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
      //return user object that was removed
      var user = this.getUser(id);

      if (user) {
        this.users = this.users.filter((user) => user.id !== id)
      }
      return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room)
    var namesArray = users.map((user) => user.name)

    return namesArray;
    }
  }

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     getUserDescription () {
//       return `${this.name} is ${this.age} years old`;
//     }
// }
//
// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();
// console.log(description);

module.exports = {Users};
