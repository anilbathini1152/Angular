import { Injectable } from '@angular/core';
import { heroes } from './heros-interface';
import { hero } from './hero-interface';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient,private messageService:MessageService) {
    
   }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
   getHero(id: number): Observable<hero> {
    const hero = heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  getHeroes():Observable<hero[]>{
    return this.http.get<hero[]>(this.heroesUrl)
  }
}
