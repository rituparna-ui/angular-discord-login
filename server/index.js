const axios = require('axios').default;

axios({
  method: 'PUT',
  url: 'https://discordapp.com/api/v8/guilds/749538661745295483/members/559048213529755661',
  data: {
    access_token: 'odyorTsYUpW7MhuLXm12mOVt37vfBE',
  },
  headers: {
    Authorization:
      'Bot ODY2MTMyMTAyMTY0MjUwNjQ1.GGdcsT.a0av4F6V0COkuDc4-V6CmqsQBQ0tPZM5DWyxpw',
    'Content-Type': 'application/json',
  },
}).then((data) => {
  console.log(data.data);
});
