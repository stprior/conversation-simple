var fetch = require('node-fetch');
var stringify = require('json-stringify-safe');

module.exports = {
  paysubscription: function () {
    var AUTHTOKEN=process.env.ZOHO_AUTH;
    var zohoOrgId =process.env.ZOHO_ORG;
    var makePaymentRequest = {
      "customer_id": "12212000000021054",
      "payment_mode": "cash",
      "amount": "100",
      "invoices": [
        {
          "invoice_id": "12212000000024001",
          "amount_applied": "100"
        }
      ]
    }

    action = fetch('https://subscriptions.zoho.eu/api/v1/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Zoho-authtoken ' + AUTHTOKEN,
      'X-com-zoho-subscriptions-organizationid': zohoOrgId
    },
    body: stringify(makePaymentRequest)
    })
      .then(function(response){
          return response.json();
      })
      .then(function(json){
          console.log(json);
      }).catch(err => {console.log('fail: ' + err);});
  }
}
