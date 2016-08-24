import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    template:`
    <h1>{{title}}</h1>
    <my-heroes>My Heroes</my-heroes>`,
 
})

export class AppComponent {
    title = 'Tour of Heroes';    
          
}
