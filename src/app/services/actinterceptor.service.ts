import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//le agregamos: implements httpinterceptor
export class ActinterceptorService implements HttpInterceptor {

  
  //estos tres son del archivo actservices pero lo estoy colocando aqui
  constructor(private http:HttpClient) { }

  apiPosts = environment.apiURL+'posts/'; //++++

  getPostsAllInterceptor():Observable<any>{
    return this.http.get(this.apiPosts,{observe:'response'})
  }
  //fin


  //y esribimos intercept o int.. y ya aparece
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor');
    req = req.clone({
      setHeaders:{
        'Authorization':'123456789'
      }
    });

    return next.handle(req) //hasta que no finalizas el intercept pareciera que hubiesen errores pero no
  }
}
