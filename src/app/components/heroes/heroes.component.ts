import { Component, OnInit } from '@angular/core';
import { Router, Data} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  pokemones: any[] = [];
  apiResult: any = [];
  items: any = [];
  date: Date = new Date();
  constructor(private _heroesService: HeroesService,
              private router: Router,
              private _apiService: ApiService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    this.pokemones = this._heroesService.getpokemones();
    this.apiResult = this._apiService.getNews();
    this.apiResult.forEach(element => console.log(this.items.push(element.articles)));
    console.log(this.items);
  }

  verHeroe(idx:Number) {
    this.router.navigate(['/heroe', idx]);
  }
}
