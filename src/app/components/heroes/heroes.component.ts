import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  posts: any = [];
  comments: any = [];
  inputComentario: any = "";
  status: boolean = false;

  date: Date = new Date();
  likes: number = Math.floor(Math.random() * 100);

  constructor(private _heroesService: HeroesService,
              private router: Router,
              private _apiService: ApiService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.items = this._apiService.getPost().subscribe((data) => {
      this.posts = data;
      //this.changeDetector.detectChanges();

      console.log(data);
    });
    
     this.comments=  this._apiService.getComentarios().subscribe((data) => {
        this.comments = data;
       console.log(this.comments);
      });
  }

  addComment(comentario: string, id: number) {
    var viewModel = {
      Comentario: comentario,
      PostID: id
    };
    return this._apiService.AddComment(viewModel).subscribe((data) => {
      this.comments.push(data);
      var input = <HTMLInputElement>document.getElementById("input_" + id + "");
      input.value = "";
    });
  }

  

  verHeroe(idx:Number) {
    this.router.navigate(['/heroe', idx]);
  }

  darLike(tipo: string, postId: number, userId: string) {
    var vm = {
      UserId: userId,
      PostId: postId,
      Tipo: null
    }
    if (tipo == "like") {
      
      vm.Tipo = 'like';
      this._apiService.addLike(vm).subscribe();
    }
    else {
      vm.Tipo = 'dislike';
      this._apiService.addLike(vm).subscribe();

    }
    //this._apiService.getPost().subscribe((data) => {
    //  this.posts = data;
    //});
  }
}
