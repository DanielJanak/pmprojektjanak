import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  pole: string | null = 'null';
  seznamfavourite: (string | null)[] = [];
  seznamfavouriteodrudy: (string | null)[] = [];
  
  constructor(private route: ActivatedRoute) { }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public allLocalStorage() {

    var values = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  }

  public ngDostatOdrudu() {
    //this.seznamfavourite
    //this.seznamfavouriteodrudy

    for (var i = 0; i < this.seznamfavourite.length; i++) {
      var temp = this.seznamfavourite[i]?.toString();
      temp = temp?.substring(30);
      var tempnumber = temp?.indexOf('/');
      temp = temp?.slice(0, tempnumber);
      if (temp != null) {
        this.seznamfavouriteodrudy[i] = temp;
      }
    }
  }
  /*
    public getPozice(key: number) {
      return localStorage.getItem(localStorage.key(key));
    }*/

  ngOnInit() {

    const items = this.allLocalStorage();
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
    }

    if (items != null) {

      this.seznamfavourite = items;
      for (var i = 0; i < this.seznamfavourite.length; i++) {
        if (this.seznamfavourite[i] == 'honey:core-sdk:*') {
          this.seznamfavourite.splice(i, 1);
        }
      }
    }

    this.ngDostatOdrudu();
  }


  ngVymazatLocalStorage() {
    localStorage.clear();
    const items = { ...localStorage };
    console.log('Favourites byly smazány');
    console.log(localStorage.length);
    console.log(items);
  }

  

}
