import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // J'affiche l'url avec les params
    console.log(req.urlWithParams);
    // Je passe la requête à la suite des interceptors cachés d'angular
    // Et je retourne ce résultat pour que la requête ait bien lieu
    // pipe permet d'ajouter des actions à effectuer quand l'observable est résolue
    const startTime: Date = new Date();
    return next.handle(req).pipe(
      // tap est un observable qui indique : "Je fais des actions sans modifier la réponse"
      tap((response) => {
        // On s'assure qu'il s'agit bien d'une réponse http
        if (response instanceof HttpResponse) {
          // Ici sera le code exécuté à la réponse du serveur
          // Dans le cas où tout s'est bien passé
          console.log((new Date().valueOf() - startTime.valueOf()) / 1000);
          console.log(
            'url cible : ' +
              'http://localhost:4200' +
              this.router.routerState.snapshot.url
          );
        }
      })
    );
  }
}
