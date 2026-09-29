import { Component, inject, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { IssuesService } from '../../services/issues.service';
import { IssueType, ISSUE_TYPE_OPTIONS, ISSUE_TYPE_LABELS, ISSUE_STATUS_LABELS } from '../../models/issue.model';

interface FilterOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css'],
})
export class IssuesListComponent {
  private issuesSvc = inject(IssuesService);

  activeFilter = signal<string>('all');

  filterOptions: FilterOption[] = [
    { value: 'all', label: 'All Issues' },
    ...ISSUE_TYPE_OPTIONS.map(o => ({ value: o.value, label: o.label })),
  ];

  filteredIssues = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.issuesSvc.issues();
    return this.issuesSvc.filterByType(f as IssueType);
  });

  stats = this.issuesSvc.stats;

  typeLabels = ISSUE_TYPE_LABELS;
  statusLabels = ISSUE_STATUS_LABELS;

  setFilter(value: string): void {
    this.activeFilter.set(value);
  }

  getTypeClass(type: string): string {
    return 'type-' + type;
  }

  getStatusClass(status: string): string {
    return 'status-' + status;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  }
}