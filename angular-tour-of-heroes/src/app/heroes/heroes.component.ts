import {Component} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

//  Hero: Hero = {
//   id: 1,
// name: 'Windstorm'
// };

  heroes: Hero[] = [];
  protected readonly onselect = onselect;
}

