import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { COMMUNITY_HEROES } from './data/community-heroes.data';
import { CommunityHero } from './models/community-hero.model';

@Component({
  selector: 'app-community-hero-article', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './community-hero-article.component.html', styleUrls: ['./community-hero-article.component.css'],
})
export class CommunityHeroArticleComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  readonly hero = signal<CommunityHero | undefined>(undefined);
  readonly relatedHeroes = COMMUNITY_HEROES;
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(params => {
      this.hero.set(COMMUNITY_HEROES.find(item => item.slug === params.get('slug')));
    });
  }
}
