import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

  heroes: any = {}; 
  termino: any; 

  constructor(private activatedRouted: ActivatedRoute,
    private _heroeService: HeroesService) {
    this.activatedRouted.params.subscribe(params => {
      this.heroes = this._heroeService.buscarHeroes(params['search']);
      console.log(this.heroes);
      this.termino = params['search'];
    });
  }

  ngOnInit(): void {
  }

}
