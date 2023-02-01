import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActservicesService {

  // constructor() { }

  //una instancia de tipo httpclient que importamos en app.module
  constructor(private http:HttpClient){}

  apiPosts = environment.apiURL+'posts/'; //++++

  //luego aqui hay metodos get y post, pero solo usaremos httpinterceptor

  getPostsAllInterceptor():Observable<any>{
    return this.http.get(this.apiPosts,{observe:'response'})
  }
}
