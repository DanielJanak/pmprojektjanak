import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  obrazky: string[] = [];  //on si ve videu dělá proměnný aby potom mohl pracovat s tím co mu ta api vrací (26:40)
  // já si zatím vkládám jen obrázky do kterých plánuju ukládat message, což je odkaz na ten obrázek
  // 29:40 -> končí s vysvětlováním tohodle, zvládl jsem vyřešit přes stackoverflow tuhle proměnnou aby tady....

  pole: string | null = 'null';

  odrudy: string[] = [];  //asi array pro uládání odrůd psů

  constructor(private ApiService: ApiService, private loadingCtrl: LoadingController, private router: Router) { }   //přidal jsem router:Router (asi na smazání)

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  ngOnInit() {
    this.loadPicture();
  }

  async loadPicture() {
    const loading = await this.loadingCtrl.create({  //tuhle waiting loading šílenost přidal ve 28 minutě....
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.ApiService.getRandomPhoto().subscribe(res => {
      loading.dismiss();
      //this.obrazky = [...this.obrazky, ...res.message];  //tady.... jsem ju mohl použít takhle, tak jak to používá ve videu // snad to teď funguje....
      this.obrazky.push(...res.message);  //41:00 opravil tento řádek a teď je to asi jednodušší a lze to použít na InfiniteScroll (v historii eventuelně)
      console.log(res);  //toto nám vypisuje request který jsme dostali od apiservice....
      if (this.obrazky != null) {
        this.obrazky = [];
        this.obrazky.push(...res.message);
        this.pole = res.message;  //zde si do jiné proměnné pole uložím hodnotu message
      }
      console.log(this.pole);  //zde si pouze vypisuju do konzole že pole má hodnotu kterou chci aby mělo
    });
  }


  ngOnFavourite() {
    this.saveFavourite();
  }

  async saveFavourite() {
    const loading = await this.loadingCtrl.create({  //tuhle waiting loading šílenost přidal ve 28 minutě....
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    loading.dismiss();

    if (this.pole != null) {
      localStorage.setItem(this.pole, this.pole);
      this.pole = this.getData(this.pole);
      console.log(this.pole);
    }
  }

  ngOnVyber() {
    this.loadVyberOdrud();
  }

  async loadVyberOdrud() {
    const loading = await this.loadingCtrl.create({  //tuhle waiting loading šílenost přidal ve 28 minutě....
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.ApiService.getOdrudyPsu().subscribe(res => {
      loading.dismiss();
      console.log(res.message);
      //this.odrudy.push(...res.message);
      //this.odrudy = [];
      //this.odrudy.push(...res.message);
      //console.log(this.odrudy);
      //var i = 1;
      //while (i == 0) {
      //}
    });
  }
}


/*
  public ngFavouriteItemDisplay(temp: string) {
    
  }*/