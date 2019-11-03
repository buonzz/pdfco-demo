const axios = require('axios')

// load the environment settings 
require('dotenv').config()

axios.post('https://api.pdf.co/v1/pdf/convert/to/json', {
    url: 'https://github.com/buonzz/pdfco-demo/raw/master/wordpress-pdf-invoice-plugin-sample.pdf',
    inline: true
  },{
      headers : { "x-api-key": process.env.API_KEY}
  })
.then(function (response) {
    console.log(response.data.body.document);
  })
.catch(function (error) {
    console.log(error);
  });

