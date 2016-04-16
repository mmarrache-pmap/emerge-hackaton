import request from 'request';
import fs from 'fs';

let data = JSON.stringify({
    "systemsTraceAuditNumber" : "451001",
    "retrievalReferenceNumber" : "330000550000",
    "localTransactionDateTime" : new Date().toJSON().slice(0,19),
    "acquiringBin" : "408999",
    "acquirerCountryCode" : "840",
    "senderPrimaryAccountNumber" : "4895142232120006",
    "senderCardExpiryDate" : "2015-10",
    "senderCurrencyCode" : "USD",
    "amount" : "124.02",
    "businessApplicationId" : "AA",
    "surcharge" : "11.99",
    "foreignExchangeFeeTransaction" : "11.99",
    "cavv" : "0700100038238906000013405823891061668252",
    "cardAcceptor" : {
        "name" : "Visa Inc. USA-Foster City",
        "terminalId" : "ABCD1234",
        "idCode" : "ABCD1234ABCD123",
        "address" : {
            "state" : "CA",
            "county" : "San Mateo",
            "country" : "USA",
            "zipCode" : "94404"
        }
    }
});

let req = request.defaults();

let userId = 'PSE4BDV0EUJ8RDLUWHSW211zcYis2bGBOyZbrkkGPOjyrimxA';
let password = 'BHwTOVToO5XQ8JAze33wHDr0B0oBOdsuzig';
let keyFile = './key_BatTest.pem';
let certificateFile ='./cert.pem';

req.post({
    uri : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
    key: fs.readFileSync(keyFile),
    cert: fs.readFileSync(certificateFile),
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
    },
    body: data
}, (error, response, body) => {
    if (!error) {
      console.log("Response Code: " + response.statusCode);
      console.log("Headers:");
      for(var item in response.headers) {
        console.log(item + ": " + response.headers[item]);
      }
      console.log("Body: "+ body);
    } else {
      console.log("Got error: " + error.message);
    }
  }
);
