import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};
  
  constructor(private activatedRouted: ActivatedRoute,
    private _heroeService: HeroesService) {
    this.activatedRouted.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroeByIndex(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
