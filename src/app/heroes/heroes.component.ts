import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { hero } from '../hero-interface';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService,public messageService:MessageService) { }

  ngOnInit(): void {
    this.setHero();
  }
  heroes:hero[]=[]
  setHero(){
   this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
}
