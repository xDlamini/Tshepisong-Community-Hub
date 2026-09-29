import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { IssuesListComponent } from "../components/issues-list/issues-list.component";
import { ReportIssueFormComponent } from "../components/report-issue-form/report-issue-form.component";

@Component({
  selector: 'app-service-tracker-page',
  standalone: true,
  imports: [RouterLink, IssuesListComponent, ReportIssueFormComponent],
  templateUrl: './service-tracker-page.component.html',
  styleUrl: './service-tracker-page.component.css'
})
export class ServiceTrackerPageComponent {
  scrollToList(): void {
    document
      .getElementById('issues-log')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
