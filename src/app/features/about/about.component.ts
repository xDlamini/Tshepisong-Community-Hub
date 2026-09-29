import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  values = [
    {
      emoji: '🤝',
      title: 'Ubuntu',
      desc: '"I am because we are." We look out for each other. Our strength has always been in togetherness.',
    },
    {
      emoji: '🏡',
      title: 'Pride of Place',
      desc: 'We take ownership of our streets, our schools, our parks. Tshepisong is something to be proud of.',
    },
    {
      emoji: '🌱',
      title: 'Growth & Opportunity',
      desc: 'Supporting local businesses, quality education and the youth so Tshepisong continues to rise.',
    },
  ];

  facts = [
    { num: 'Gauteng', label: 'Province' },
    { num: 'Roodepoort', label: 'Municipality' },
    { num: 'West JHB', label: 'Location' },
    { num: 'Sesotho', label: 'Name Origin' },
    { num: 'Hope', label: 'What Our Name Means' },
  ];

  aboutImages = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `assets/images/about/about-${i + 1}.jpg`,
    alt: `Tshepisong photo ${i + 1}`,
  }));

  gallery = [
    { emoji: '🏃', bg: 'linear-gradient(135deg,#1a4a1e,#2a7e35)', label: 'Community sport day' },
    { emoji: '🏫', bg: 'linear-gradient(135deg,#1a2e5a,#2a4a8e)', label: 'Local school' },
    { emoji: '📚', bg: 'linear-gradient(135deg,#5a3a0a,#8e5a15)', label: 'Public library' },
    { emoji: '🎨', bg: 'linear-gradient(135deg,#3a1a5a,#5a2a8e)', label: 'Community mural' },
    { emoji: '🌳', bg: 'linear-gradient(135deg,#1a5a3a,#2a8e5a)', label: 'Community parks' },
    { emoji: '⚽', bg: 'linear-gradient(135deg,#5a1a1a,#8e2a2a)', label: 'Soccer match' },
  ];
}
