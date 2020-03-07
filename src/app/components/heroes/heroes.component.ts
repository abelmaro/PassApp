import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:Number) {
    this.router.navigate(['/heroe', idx]);
  }
}
