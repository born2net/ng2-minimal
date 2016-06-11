import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero, HeroService } from './hero.service';

@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{hero.name}}"</h3>
    <div>
      <label>Id: </label>{{hero.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeroService) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let id = +params['id'];
        this.service.getHero(id)
          .then(hero => this.hero = hero);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Add a totally useless `foo` parameter for kicks.
    this.router.navigate(['/heroes'], { queryParams: { id: `${heroId}`, foo: 'foo' } });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/