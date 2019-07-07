let userEmail = prompt('Input valid email');
let emailValid = ['user@gmail.com', 'admin@gmail.com']
if (userEmail === '') {
  alert('Canceled');
} else if (userEmail.length < 6) {
  alert('input less than 6 symbols');
} else if (emailValid.indexOf(userEmail) < 0) {
  alert('I don\'t know you');
} else {
  let userPassword = prompt('Input password');

  if (userPassword === '') {
    alert('Canceled');
  } else if (userEmail === 'user@gmail.com' && userPassword !== 'UserPass' ||
    userEmail === 'admin@gmail.com' && userPassword !== 'AdminPass') {
    alert('Wrong password');
  } else {
    if (confirm('Do you want to change your password?')) {
      let oldPassword = prompt('Write the old password');
      if (oldPassword !== userPassword) {
        alert('You wrote the wrong old password.');
      } else {
        let newPassword = prompt('Input new password');
        if (newPassword === '') {
          alert('Canceled');
        } else if (newPassword.length < 5) {
          alert('It’s too short password. Sorry.');
        } else if (newPassword !== prompt('Input password again')) {
          alert('You wrote the wrong password.');
        } else {
          alert('You have successfully changed your password');
        }
      } 
    } else {
      alert('You have failed the change.');
    }
  }
}