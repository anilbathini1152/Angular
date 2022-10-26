import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { hero } from '../hero-interface';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-in-for',
  templateUrl: './hero-in-for.component.html',
  styleUrls: ['./hero-in-for.component.css']
})
export class HeroInForComponent implements OnInit {
  @Input() hero:hero={} as hero;
  constructor(
   
  ) { }
    selhero?:hero
  ngOnInit(): void {
    
  } 
  
}
