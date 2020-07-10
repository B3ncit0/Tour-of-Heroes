import { Injectable } from '@angular/core';
import {Hero} from 'src/app/heroes/hero';
import {HEROES} from 'src/app/heroes/mock-heroes';
import {Observable, of, ObservableLike} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('Hero Service: Fetched Heroes!');
    return of(HEROES);
  }
  getHero(id:number): Observable<Hero>{
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
