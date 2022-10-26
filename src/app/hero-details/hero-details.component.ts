import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hero } from '../hero-interface';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  myhero?:hero
  constructor(
    private activatedRoute:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero():void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(heroo => this.myhero = heroo);
  }
  goBack():void{
    this.location.back();
  }
}
