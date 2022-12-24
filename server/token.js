const { google } = require('googleapis');
const axios = require('axios').default;

const code =
  '4/0AWgavdcCrhTpFVlfdaVhWVQl88xYz71landgbTeSlZR4zqd88e6EWf6a8TilTky3htEbCg';
const oAuth2Client = new google.auth.OAuth2({
  clientId:
    '72244162417-psvcd3vtb4qlrqvu4152gaitenr1k8t1.apps.googleusercontent.com',
  clientSecret: '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',
  redirectUri: 'http://localhost:4200/google',
});

(async () => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log(tokens);
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.message);
    });

  console.log();
  console.log();
  console.log();
  console.log(googleUser);
})();
