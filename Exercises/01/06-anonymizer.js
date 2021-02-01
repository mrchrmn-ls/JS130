"use strict";

let Account = (function() {
  let userEmail, userPassword, userFirstName, userLastName;

  function isValidPassword(password) {
    return userPassword === password;
  }

  function anonymize() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz";
    let name = "";
    let rnd;

    for (let position = 0; position < 16; position += 1) {
      rnd = Math.floor(Math.random() * 61);
      name += chars[rnd];
    }

    return name;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    resetPassword(password, newPassword) {
      if (isValidPassword(password)) {
        userPassword = newPassword;
        return true;
      } else return "Invalid Password";
    },

    firstName(password) {
      if (isValidPassword(password)) return userFirstName;
      else return "Invalid Password";
    },

    lastName(password) {
      if (isValidPassword(password)) return userLastName;
      else return "Invalid Password";
    },

    email(password) {
      if (isValidPassword(password)) return userEmail;
      else return "Invalid Password";
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else return "Invalid Password";
    }
  };

})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(displayName);
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false