const { google } = require('googleapis');
const fs = require('fs');

const oAuth2Client = new google.auth.OAuth2({
  clientId:
    '72244162417-psvcd3vtb4qlrqvu4152gaitenr1k8t1.apps.googleusercontent.com',
  clientSecret: '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',
  redirectUri: 'http://localhost:4200/google',
});
const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

const url = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope,
});

fs.writeFileSync('url.txt', url, () => {
  console.log('ok');
});
