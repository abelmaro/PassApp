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
  currentUser: string = "4ed9f1f1-96c8-498e-b3dd-c8d57b4115c1";
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

    this.comments = this._apiService.getComentarios().subscribe((data) => {
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



  verHeroe(idx: Number) {
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

  modalBorrarComentario(id: number) {
    console.log(id);
    Swal.fire({
      title: 'Está seguro?',
      text: "No podrá deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.value) {
        this.deleteComment(id);
      }
    })
  }

  deleteComment(id) {
    this._apiService.DeleteComment(id).subscribe((data) => {
      let index = this.comments.indexOf(id);
      this.comments.splice(index, 1);
      this.comments = this.comments;
    });
  }
}
