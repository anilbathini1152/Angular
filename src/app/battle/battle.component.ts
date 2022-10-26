import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
import { hero } from '../hero-interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  show: boolean = false;
  show1:boolean=false;
  heroes: hero[] = []
  hero: any;
  arr1: hero[] = [];
  arr2: hero[] = [];
  hero1={} as hero;
  hero2={} as hero;
  P1:any;
  draw:boolean=false;
  indx = 0;
  p1count=0
  p2count=0
  win:number=-1;
  winf:boolean=false;
  winlog:number[]=[];
  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {

  this.show = false;
  this.show1=false;
  this.heroes= []
  this.arr1 = [];
  this.arr2 = [];
  this.P1;
  this.draw=false;
  this.indx = 0;
  this.p1count=0
  this.p2count=0
  this.win=-1;
  this.winf=false;
  this.winlog=[];
  
    this.setHero();
    // this.shuffleCards();
    // setTimeout(this.setHero,2000)
    // setTimeout(this.shuffleCards, 1000);

  }

  
  

  // hero1=this.heroes[0]
  setHero() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  arrangeCards() {
    let mid = Math.ceil(this.heroes.length / 2);
    this.arr1 = this.heroes.splice(0, mid);
    this.arr2 = this.heroes.splice(-mid);
    console.log(this.arr1);
    console.log(this.arr2);
    this.show1=true;
  }

  battle() {
    if((this.indx as number)<(Math.min(this.arr1.length,this.arr2.length) as number)){
    this.show = true;
    this.hero1 = this.arr1[this.indx];
    this.hero2 = this.arr2[this.indx];
    this.indx++;
    this.draw=false;
    if (this.hero1.power>this.hero2.power){
      this.P1=true;
      this.p1count+=1;
      this.winlog.push(1);
    }else if(this.hero1.power===this.hero2.power){
      this.draw=true;
      this.winlog.push(0);
    }
    else{
      this.P1=false;
      this.p2count+=1;
      this.winlog.push(2);
    }

  }
  else{
      this.show=false;
      if (this.p1count<this.p2count){
          this.win=2;

      }else{
        
          this.win=1;
      }
      this.winf=true;
      this.indx=0;
      this.show1=false;
  }

  }

  shuffleCards() {
    // console.log("jhdfs");
    // console.log("Shuffle Cards");
    // console.log(this.heroes)
    for (var i = this.heroes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.heroes[i];
      this.heroes[i] = this.heroes[j];
      this.heroes[j] = temp;
    }
    // console.log(this.heroes);
    this.arrangeCards();

  }

}
