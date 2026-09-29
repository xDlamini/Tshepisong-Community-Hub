import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { IssuesService } from '../../services/issues.service';
import { ISSUE_TYPE_OPTIONS, IssueType } from '../../models/issue.model';

@Component({
  selector: 'app-report-issue-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './report-issue-form.component.html',
  styleUrls: ['./report-issue-form.component.css'],
})
export class ReportIssueFormComponent {
  @Output() issueSubmitted = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private issuesSvc = inject(IssuesService);

  submitting = false;
  submitted = false;

  typeOptions = ISSUE_TYPE_OPTIONS;

  form = this.fb.group({
    type: ['', Validators.required],
    area: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    timeStarted: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    const v = this.form.value;
    this.issuesSvc.addIssue({
      type: v.type as IssueType,
      area: v.area!,
      description: v.description!,
      timeStarted: v.timeStarted!,
    });
    this.submitting = false;
    this.submitted = true;
    this.form.reset();
    this.issueSubmitted.emit();
  }

  resetForm(): void {
    this.submitted = false;
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}