import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios, { AxiosError } from 'axios';

/**
 *
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (qp) => {
      const code = qp['code'];
      if (code) {
        try {
          const tokenResponseData = await axios.post(
            'https://discord.com/api/oauth2/token',
            new URLSearchParams({
              client_id: '866132102164250645',
              client_secret: 'fewK1_6_J-PN8ujN_6jKnTzI0Kr62M8p',
              code,
              grant_type: 'authorization_code',
              redirect_uri: `http://localhost:4200`,
              scope: 'identify guilds.join',
            }).toString(),
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
          );

          console.log(tokenResponseData.data);
          const userData = await axios.get(
            'https://discordapp.com/api/users/@me',
            {
              headers: {
                Authorization: `Bearer ${tokenResponseData.data.access_token}`,
              },
            }
          );
          console.log(userData.data);
          
        } catch (error: any) {
          console.log(error);
          console.log(error.message);
        }
      }
    });
  }
}
