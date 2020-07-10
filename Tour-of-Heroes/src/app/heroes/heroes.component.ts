import { Component, OnInit } from '@angular/core';
import {Hero} from './Hero';
import{HeroService} from 'src/app/Services/hero.service';
import { MessagesService } from '../Services/messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Hero[];
  
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes);
  }
}
 