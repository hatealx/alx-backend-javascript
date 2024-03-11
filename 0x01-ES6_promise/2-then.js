function handleResponseFromAPI(promise) {
  // Appending handlers to the promise
  promise
    .then(() => {
      console.log('Got a response from the API'); // Log when the promise resolves
      return { status: 200, body: 'success' }; // Return object when the promise resolves
    })
    .catch(() => {
      console.log('Got a response from the API'); // Log when the promise rejects
      return new Error(); // Return empty Error object when the promise rejects
    });
}

export default handleResponseFromAPI;
