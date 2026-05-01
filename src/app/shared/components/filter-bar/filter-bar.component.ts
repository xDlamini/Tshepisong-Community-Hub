import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

export interface FilterOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="filter-bar" role="group" [attr.aria-label]="ariaLabel">
      @for (opt of options; track opt.value) {
        <button
          class="filter-btn"
          [ngClass]="{ active: activeValue === opt.value }"
          (click)="select(opt.value)"
          [attr.aria-pressed]="activeValue === opt.value">
          {{ opt.label }}
        </button>
      }
    </div>
  `,
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent {
  @Input() options: FilterOption[] = [];
  @Input() activeValue = 'all';
  @Input() ariaLabel = 'Filter options';
  @Output() filterChange = new EventEmitter<string>();

  select(value: string): void {
    this.activeValue = value;
    this.filterChange.emit(value);
  }
}
