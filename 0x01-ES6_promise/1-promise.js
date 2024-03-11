function getFullResponseFromAPI(success) {
  // Creating a new Promise
  return new Promise((resolve, reject) => {
    // Checking the value of the 'success' parameter
    if (success) {
      // If 'success' is true, resolve the promise
      resolve({ status: 200, body: 'Success' });
    } else {
      // If 'success' is false, reject the promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
