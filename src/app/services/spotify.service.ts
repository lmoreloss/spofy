import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Conectado con Spotify');
  }
  
  getNewReleases() { 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAkHeyLQvgkRQV1iX07jRPci_O1baIyk5ndLsaTQ84zUG99ABUZZn_cUK4tbcQ4ClrKrfcz9wpEt8ybZxc'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
