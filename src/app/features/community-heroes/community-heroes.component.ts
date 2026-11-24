import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMMUNITY_HEROES } from './data/community-heroes.data';

@Component({
  selector: 'app-community-heroes', standalone: true, imports: [RouterLink],
  templateUrl: './community-heroes.component.html', styleUrls: ['./community-heroes.component.css'],
})
export class CommunityHeroesComponent {
  readonly heroes = COMMUNITY_HEROES;
  readonly searchTerm = signal('');
  readonly selectedCategory = signal('All');
  readonly categories = ['All', ...new Set(COMMUNITY_HEROES.map(hero => hero.category))];
  readonly featuredHero = this.heroes.find(hero => hero.featured) ?? this.heroes[0];
  readonly filteredHeroes = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const category = this.selectedCategory();
    return this.heroes.filter(hero => {
      const matchesCategory = category === 'All' || hero.category === category;
      const searchable = [hero.name, hero.role, hero.category, hero.shortIntro].join(' ').toLowerCase();
      return matchesCategory && (!term || searchable.includes(term));
    });
  });
}
