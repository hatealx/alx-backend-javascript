import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle profile signup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Array to store the results of promises
  const results = [];

  // Call signUpUser and push the result into the results array
  results.push(
    signUpUser(firstName, lastName)
      .then(user => ({ status: 'fulfilled', value: user }))
      .catch(error => ({ status: 'rejected', value: error }))
  );

  // Call uploadPhoto and push the result into the results array
  results.push(
    uploadPhoto(fileName)
      .then(photo => ({ status: 'fulfilled', value: photo }))
      .catch(error => ({ status: 'rejected', value: error }))
  );

  // Return a Promise that resolves when all promises are settled
  return Promise.all(results);
}
