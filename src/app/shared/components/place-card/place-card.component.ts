import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Place, PlaceCategory } from '../../../core/models/index';

const CATEGORY_LABELS: Record<PlaceCategory, string> = {
  park: 'Park',
  school: 'School',
  sports: 'Sports',
  library: 'Library',
  clinic: 'Clinic',
  church: 'Church',
  hall: 'Community Hall',
};

const CATEGORY_CLASSES: Record<PlaceCategory, string> = {
  park: 'tag-park',
  school: 'tag-school',
  sports: 'tag-sports',
  library: 'tag-library',
  clinic: 'tag-clinic',
  church: 'tag-church',
  hall: 'tag-hall',
};

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <article class="place-card" (click)="view.emit(place)" role="button" tabindex="0"
      (keydown.enter)="view.emit(place)" [attr.aria-label]="'View details for ' + place.name">
      <!-- images remember -->
      <div class="place-img">
      <img
        class="place-photo"
        [src]="place.imageUrl"
        [attr.alt]="place.name"
      />
    </div>
      <div class="place-body">
        <span class="place-tag" [ngClass]="tagClass">{{ categoryLabel }}</span>
        <h3 class="place-name">{{ place.name }}</h3>
        <p class="place-desc">{{ place.description }}</p>
        @if (place.hours) {
          <div class="place-meta">
            <span>🕐</span> {{ place.hours }}
          </div>
        }
      </div>
    </article>
  `,
  styleUrls: ['./place-card.component.css'],
})
export class PlaceCardComponent {
  @Input({ required: true }) place!: Place;
  @Output() view = new EventEmitter<Place>();

  get categoryLabel(): string {
    return CATEGORY_LABELS[this.place.category] ?? this.place.category;
  }

  get tagClass(): string {
    return CATEGORY_CLASSES[this.place.category] ?? '';
  }
}
