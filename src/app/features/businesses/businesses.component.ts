import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessesService } from '../../core/services/businesses.service';
import { BusinessCardComponent } from '../../shared/components/business-card/business-card.component';
import { FilterBarComponent, FilterOption } from '../../shared/components/filter-bar/filter-bar.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { BusinessCategory } from '../../core/models/index';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [RouterLink, BusinessCardComponent, FilterBarComponent, SectionHeaderComponent],
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
})
export class BusinessesComponent {
  private bizSvc = inject(BusinessesService);

  activeFilter = signal<string>('all');

  filterOptions: FilterOption[] = [
    { value: 'all',       label: 'All Businesses' },
    { value: 'food',      label: '🍖 Food & Spaza' },
    { value: 'beauty',    label: '💇 Hair & Beauty' },
    { value: 'trades',    label: '🔧 Repairs & Trades' },
    { value: 'childcare', label: '👶 Childcare' },
    { value: 'transport', label: '🚐 Transport' },
    { value: 'general',   label: '⭐ General Services' },
  ];

  filteredBusinesses = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.bizSvc.businesses();
    return this.bizSvc.businesses().filter(b => b.category === f as BusinessCategory);
  });

  onFilterChange(value: string): void {
    this.activeFilter.set(value);
  }
}
