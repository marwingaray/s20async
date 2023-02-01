import { Component } from '@angular/core';
import { ActinterceptorService } from 'src/app/services/actinterceptor.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  constructor(private postsService:ActinterceptorService){}

  postsLi = new Array(); // () muy importante

  ngOnInit(){
    //suscribimos la instancia postsservice al metodo de get all posts
    this.postsService.getPostsAllInterceptor().subscribe({
      next: (response:any)=> {
        this.postsLi=response.body;
        console.log(response);
      },
      error:(error)=>console.error(error),
      complete:()=> console.info('completed!')
    })
  }
}
