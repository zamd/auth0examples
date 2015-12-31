var Qs = require('qs');
var Auth0 = require('auth0-js');
var $ = require('jquery-browserify');

var options = {
    clientID: 'YOUR_CLIENT_ID',
    domain: 'fabrikam.auth0.com' 
};
var auth0 = new Auth0(options);

$('#verifyblock').hide();


$('#spl').click(function(){
    auth0.startPasswordless(
        {
           phoneNumber: '+923102299211'
        }, function(err, result){
            if (err) console.log(err.err_description);
            else {
                console.log('result: '+ result);
               $('#verifyblock').show();
            }
        });
});


$('#verifybutton').click(function(){
    auth0.verifySMSCode(
        {
            code: $('#vcode').val(),
            phoneNumber: '+923102299211'
        },function(err, result){
            if (err) console.log(err.err_description);
            else
                console.log('result:' + JSON.stringify(result)); 
        });
});