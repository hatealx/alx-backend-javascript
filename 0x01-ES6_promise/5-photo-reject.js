export default function uploadPhoto(filename) {
  if (typeof filename !== 'string' || arguments.length !== 1) {
    return Promise.reject(new Error());
  }

  return new Promise((reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
