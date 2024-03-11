import { uploadPhoto, createUser } from './utils';

// Prototype function handleProfileSignup
function handleProfileSignup() {
  // Collectively resolving promises returned by uploadPhoto and createUser
  Promise.all([uploadPhoto(), createUser()])
    .then(([userPhoto, user]) => {
      // Logging body firstName lastName to the console
      console.log(`${user.body.firstName} ${user.body.lastName}`);
    })
    .catch(() => {
      // Logging error message to the console in case of an error
      console.error('Signup system offline');
    });
}
export default handleProfileSignup;
