import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    providers: [HeroService],
    template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero" 
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <div *ngIf="selectedHero">
    <h2>
        {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click)="gotoDetail()">View Details</button>
    </div>`,
    styleUrls: ['app/heroes.component.css']

})

export class HeroesComponent  implements OnInit {
    heroes = Hero[0];
    selectedHero: Hero;
    
    constructor(private router: Router,
                private heroService: HeroService) { }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }

    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
