import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<h1>test CCC</h1>`
})

export class AppComponent {
  constructor() {
  }
}


//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
