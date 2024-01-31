// Original Promise-based function
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve('Data successfully fetched!');
      } else {
        reject(new Error('Failed to fetch data.'));
      }
    }, 1000);
  });
}

// Refactored async/await function
async function fetchDataAsync() {
  try {
    // Simulating an asynchronous operation
    const success = Math.random() > 0.5;

    if (success) {
      return 'Data successfully fetched!';
    } else {
      throw new Error('Failed to fetch data.');
    }
  } catch (error) {
    // Handle errors with try/catch
    console.error('Error:', error.message);
    throw error; // Rethrow the error if needed
  }
}

// Example usage
async function fetchDataExample() {
  try {
    const result = await fetchDataAsync();
    console.log(result);
  } catch (error) {
    console.error('An error occurred in fetchDataExample:', error.message);
  }
}

// Calling the example function
fetchDataExample();
