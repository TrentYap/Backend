const axios = require('axios');
const http = require('http');

// Set interval of 1 second for each request
setInterval(()=>{

    // Make a request to the endpoint in the first file
    axios.get('http://localhost:3000/random-hash')
    .then(response => {
        const hash = response.data.hash;
        console.log(`Received hash: ${hash}`);
        
        // Check if the last character of the hash is a number and it is odd
        const lastChar = hash.charAt(hash.length - 1);
        if (isNaN(lastChar) === false && lastChar % 2 !== 0) {

          // Send a success response to endpoint #2
          axios.post('http://localhost:3000/success', { hash })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }

    
    })
    .catch(error => {
    console.error(error);
    });

}, 1000);


