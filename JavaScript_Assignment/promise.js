// Task 14: Function returning a Promise to simulate asynchronous operation (fetching data)

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous operation (e.g., fetching data after a delay)
    setTimeout(() => {
      const data = { message: "Data has been fetched successfully!" };

      // Resolve the Promise with the fetched data
      resolve(data);

      // Uncomment the line below to simulate an error (rejecting the Promise)
      // reject(new Error("Failed to fetch data!"));
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

// Using the fetchData function and handling the Promise
fetchData()
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error(error.message);
  });
