// 0-promise.js

// Prototype function getResponseFromAPI
function getResponseFromAPI() {
  // Creating a new Promise
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Simulating a successful response
      resolve('Response from API');
    }, 1000);
  });
}

export default getResponseFromAPI;
