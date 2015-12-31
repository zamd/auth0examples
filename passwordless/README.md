# Passwordless authentication flow

**Auth0.js**

- auth0.startPasswordless({phoneNumber: ''})
- auth0.verifySMSCode({code: ''})


**HTTP**
- POST -> https://*tennant*.auth0.com/passwordless/start
- POST -> https://*tennant*.auth0.com/oauth/ro
  - reponse_type = code 
  - grant-type  = password


