import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  // template:`<h1>Hello</h1>`,
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero;
  // value=1.23;
  // hero: Hero={
  //   id:1,
  //   name:'Big Boy'
  // }
  
  constructor(private heroService: HeroService,private messageService: MessageService){ }

  ngOnInit(): void{
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes()
       .subscribe(x => { 
        console.log(x);
        this.heroes =x;
      })
  }
  // syntax of a function
  onSelected(hero: Hero):void{
    this.messageService.add(`You selected Hero with id of ${hero.id} and name ${hero.name}`);
    console.log(hero);
    this.selectedHero = hero;
  }

}
