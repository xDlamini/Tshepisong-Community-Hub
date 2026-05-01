import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlacesService } from '../../core/services/places.service';
import { Place, PlaceCategory } from '../../core/models/index';
import { PlaceCardComponent } from '../../shared/components/place-card/place-card.component';
import { FilterBarComponent, FilterOption } from '../../shared/components/filter-bar/filter-bar.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [RouterLink, PlaceCardComponent, FilterBarComponent, SectionHeaderComponent],
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.css'],
})
export class SpotlightComponent {
  private placesSvc = inject(PlacesService);
  private route = inject(ActivatedRoute);

  activeFilter = signal<string>('all');
  selectedPlace = signal<Place | null>(null);

  filterOptions: FilterOption[] = [
    { value: 'all',     label: 'All Places' },
    { value: 'park',    label: '🌳 Parks' },
    { value: 'school',  label: '🏫 Schools & Crèches' },
    { value: 'sports',  label: '⚽ Sports Grounds' },
    { value: 'library', label: '📚 Library' },
    { value: 'clinic',  label: '🏥 Clinics' },
  ];

  filteredPlaces = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.placesSvc.places();
    return this.placesSvc.places().filter(p => p.category === f as PlaceCategory);
  });

  constructor() {
    // Support ?cat=sports deep-link from Home
    this.route.queryParams.subscribe(params => {
      if (params['cat']) this.activeFilter.set(params['cat']);
    });
  }

  onFilterChange(value: string): void {
    this.activeFilter.set(value);
  }

  openDetail(place: Place): void {
    this.selectedPlace.set(place);
    document.body.style.overflow = 'hidden';
  }

  closeDetail(): void {
    this.selectedPlace.set(null);
    document.body.style.overflow = '';
  }
}
