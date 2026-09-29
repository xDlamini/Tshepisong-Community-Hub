export type IssueType =
    | 'electricity'
    | 'water'
    | 'roads'
    | 'streetlights'
    | 'safety'
    | 'parks';

export type IssueStatus =
    | 'submitted'
    | 'acknowledged'
    | 'in-progress'
    | 'resolved';

export interface Issue {
    id: string;
    type: IssueType;
    area: string;
    description: string;
    timeStarted: string;
    dateSubmitted: string;
    status: IssueStatus;
    photoUrl?: string;
}

export interface IssueTypeOption {
    value: IssueType;
    label: string;
}

export const ISSUE_TYPE_OPTIONS: IssueTypeOption[] = [
    { value: 'electricity', label: 'Electricity' },
    { value: 'water', label: 'Water' },
    { value: 'roads', label: 'Roads & Potholes' },
    { value: 'streetlights', label: 'Streetlights' },
    { value: 'safety', label: 'Safety' },
    { value: 'parks', label: 'Parks & Public Spaces' },
];

export const ISSUE_TYPE_LABELS: Record<IssueType, string> = {
    electricity: 'Electricity',
    water: 'Water',
    roads: 'Roads & Potholes',
    streetlights: 'Streetlights',
    safety: 'Safety',
    parks: 'Parks & Public Spaces',
};

export const ISSUE_STATUS_LABELS: Record<IssueStatus, string> = {
    submitted: 'Submitted',
    acknowledged: 'Acknowledged',
    'in-progress': 'In Progress',
    resolved: 'Resolved',
};