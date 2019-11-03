const axios = require('axios')
const fs = require('fs')


console.log('loading the .env file');
// load the environment settings 
require('dotenv').config()

console.log('makingthe API call');

axios.post('https://api.pdf.co/v1/pdf/convert/to/json', {
    url: 'https://github.com/buonzz/pdfco-demo/raw/master/wordpress-pdf-invoice-plugin-sample.pdf',
    inline: true
  },{
      headers : { "x-api-key": process.env.API_KEY}
})
.then(function (response) {
    
    console.log('API call success -- now lets save it to a file..')
    
    let jsonContent = JSON.stringify(response.data.body.document)
    
    fs.writeFile(response.data.name, jsonContent, 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
      
          console.log("JSON file has been saved!");
      });
})
.catch(function (error) {
    console.log(error);
});

