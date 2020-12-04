import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //paises: any[] = [];
  nvasCanciones: any[] = [];



  constructor(private http: HttpClient, private spotify: SpotifyService) {
    spotify.getNewReleases().subscribe((resultado:any) => {
      console.log((resultado.albums.items));
      this.nvasCanciones = resultado.albums.items;
    });
    //console.log("Contructor hecho");

    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resultado:any) => {
    //   this.paises = resultado;
    //   console.log(resultado);
    // });

  }

  ngOnInit(): void {
  }

}
