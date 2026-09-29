import { Injectable, signal, computed } from '@angular/core';
import { Issue, IssueType } from '../models/issue.model';

@Injectable({ providedIn: 'root' })
export class IssuesService {

  private readonly _issues = signal<Issue[]>([
    {
      id: 'ISS-001',
      type: 'electricity',
      area: 'Phase 4, near the park',
      description: 'No electricity since Thursday evening. Entire block affected. Eskom fault line has been called twice with no response.',
      timeStarted: '2025-01-16T18:30',
      dateSubmitted: '2025-01-17',
      status: 'acknowledged',
    },
    {
      id: 'ISS-002',
      type: 'water',
      area: 'Main Road, opposite the clinic',
      description: 'Water pipe burst on the pavement. Water has been running into the road for two days. Creates a hazard for pedestrians.',
      timeStarted: '2026-01-15T08:00',
      dateSubmitted: '2026-01-01',
      status: 'in-progress',
    },
    {
      id: 'ISS-003',
      type: 'roads',
      area: 'School Street, near the primary school',
      description: 'Large pothole in the road that has been getting bigger since December. Vehicles are swerving dangerously to avoid it.',
      timeStarted: '2024-12-01T00:00',
      dateSubmitted: '2025-01-10',
      status: 'submitted',
    },
    {
      id: 'ISS-004',
      type: 'streetlights',
      area: 'Harry Gwala Street, from corner to corner',
      description: 'Three consecutive streetlights are out. The road is completely dark at night. Residents are afraid to walk at night.',
      timeStarted: '2025-01-05T00:00',
      dateSubmitted: '2025-01-06',
      status: 'submitted',
    },
    {
      id: 'ISS-005',
      type: 'parks',
      area: 'Tshepisong Community Park',
      description: 'The children\'s play area has broken equipment including a swing with a missing seat and sharp metal exposed on the slide.',
      timeStarted: '2024-11-01T00:00',
      dateSubmitted: '2024-11-20',
      status: 'resolved',
    },
    {
      id: 'ISS-006',
      type: 'safety',
      area: 'Riverside Drive near the recreation area',
      description: 'Illegal dumping of building rubble on the open field. The site has become a safety hazard and attracts criminal activity after dark.',
      timeStarted: '2025-01-01T00:00',
      dateSubmitted: '2025-01-08',
      status: 'acknowledged',
    },
  ]);

  readonly issues = this._issues.asReadonly();

  readonly stats = computed(() => {
    const all = this._issues();
    return {
      total: all.length,
      submitted: all.filter(i => i.status === 'submitted').length,
      acknowledged: all.filter(i => i.status === 'acknowledged').length,
      inProgress: all.filter(i => i.status === 'in-progress').length,
      resolved: all.filter(i => i.status === 'resolved').length,
    };
  });

  filterByType(type: IssueType | 'all'): Issue[] {
    if (type === 'all') return this._issues();
    return this._issues().filter(i => i.type === type);
  }

  addIssue(issue: Omit<Issue, 'id' | 'dateSubmitted' | 'status'>): void {
    const newIssue: Issue = {
      ...issue,
      id: 'ISS-' + String(this._issues().length + 1).padStart(3, '0'),
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'submitted',
    };
    this._issues.update(list => [newIssue, ...list]);
  }
}