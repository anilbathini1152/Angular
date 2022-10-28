import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ArenaComponent } from './arena/arena.component';
import { BattleComponent } from './battle/battle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'heroes',component:HeroesComponent },
  { path: 'details/:id', component: HeroDetailsComponent },
  {path:'arena',component:ArenaComponent},
  {path:'battle',component:BattleComponent},
  {path:'login',component:LoginComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
