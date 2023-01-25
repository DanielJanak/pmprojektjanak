// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:{
    //key:'',  //sem napíšu klíč, ten unikátní šílenej dlouhej (možná ho na tuhle shitnou API nepotřebuju)
    Url:'https://dog.ceo'   //sem zase url apiny kterou jsem si zvolil
  }
};

// do models si dám svoje models
// do service naprcám volání apiny (nějakej asi ten backend)

//jediné věci v tabu co budu měnit jsou Tab1.page.html/ts
//taby buďto můžu využívat a nebo si prostě ostatní okna odstraním a nebudu je používat


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
