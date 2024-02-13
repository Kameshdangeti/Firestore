function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'Kamesh', email: 'kamesh@d.com' },
        { username: 'kiran', email: 'kiran@t.com' },
      ]);
    }, 1000);
  }
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('Kamesh', console.log);