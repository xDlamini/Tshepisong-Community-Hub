import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessesService } from '../../core/services/businesses.service';
import { NoticesService } from '../../core/services/notices.service';
import { BusinessCardComponent } from '../../shared/components/business-card/business-card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BusinessCardComponent, SectionHeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private bizSvc    = inject(BusinessesService);
  private noticeSvc = inject(NoticesService);

  featuredBusinesses = this.bizSvc.featuredBusinesses;
  notices            = this.noticeSvc.notices;

  highlights = [
    { emoji: '🌳', badge: 'Parks',    name: 'Community Parks',    desc: 'Open green spaces for all ages',             bg: 'linear-gradient(135deg,#1a4a1e,#2a6e30)', filter: 'park' },
    { emoji: '🏫', badge: 'Schools',  name: 'Schools & Crèches',  desc: 'Quality education from ECD to matric',       bg: 'linear-gradient(135deg,#1a2e5a,#2a4a8e)', filter: 'school' },
    { emoji: '⚽', badge: 'Sports',   name: 'Sports Grounds',     desc: 'Football, athletics & recreation',           bg: 'linear-gradient(135deg,#5a1a0a,#8e2a15)', filter: 'sports' },
    { emoji: '📚', badge: 'Library',  name: 'Public Library',     desc: 'Books, internet & learning resources',       bg: 'linear-gradient(135deg,#4a3a0a,#7a5a15)', filter: 'library' },
  ];

  stats = [
    { num: '5+', label: 'Schools' },
    { num: '3',  label: 'Parks & Fields' },
    { num: '50+',label: 'Local Businesses' },
    { num: '1',  label: 'Community Library' },
  ];
}
