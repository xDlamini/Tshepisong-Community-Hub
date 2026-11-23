import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Leader {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  phone: string;
  whatsapp?: string;
  quote?: string;
}

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css'],
})
export class LeadersComponent {

  readonly leaders = signal<Leader[]>([
    {
      id: 'councillor',
      name: 'Macdonald Galeshewe',
      role: 'Ward Councillor',
      description:
        'Elected representative for the Tshepisong ward. Responsible for community service delivery, council liaison, and representing residents at City of Johannesburg level.',
      image: 'assets/images/leader-councillor.jpg',
      phone: '0110001001',
      whatsapp: '27110001001',
      quote:
        'My duty is to ensure every voice in Tshepisong is heard at council level and turned into real service delivery.'
    },

    {
      id: 'infrastructure',
      name: 'Nkosikhona',
      role: 'Infrastructure Coordinator',
      description:
        'Oversees the infrastructure of the community including roads, water issues, street lighting and public facilities.',
      image: 'assets/images/nkosikhona.jpg',
      phone: '0826328203',
      whatsapp: '0826328203',
      quote:
        'Good infrastructure is not a luxury — it is the foundation of dignity for every resident.'
    },
    {
      id: 'ward-committee',
      name: 'JM Ndabandaba',
      role: 'Safety Committee Lead',
      description:
        'Leads the ward committee that connects residents to the local government. Oversees community meetings, development projects, and resident petitions.',
      image: 'assets/images/ndabandaba.jpg',
      phone: '0712173595',
      whatsapp: '0712173595',
      quote:
        'Community safety begins when neighbours know, trust, and look out for one another.'
    },
    {
      id: ' library-manager',
      name: 'Mr. Thabang Phonco',
      role: 'Head of Community Voices & Profiles',
      description:
        'Leads the Local Heroes, sourcing, interviewing, and publishing stories of grassroots impacts. Dedicated to making sure no local legend goes unnoticed, puts the spotlight on the people driving positive change in our backyard.',
      image: 'assets/images/about/thabang.jpg',
      phone: '0785429836',
      whatsapp: '27785429836',
      quote:
        'We dont have to look outside our neighborhood to find role models, THEY LIVE RIGHT NEXT DOOR.'
    },
    {
      id: 'teacher',
      name: 'Mr. K. Buthelezi',
      role: 'Teacher at Wiseman Cele High School',
      description:
        'Leads Wiseman Cele School learners with a focus on academic excellence, learner wellbeing, and strong community partnerships. In post for over 5+ years.',
      image: 'assets/images/leader-principal.jpg',
      phone: '0110001003',
      whatsapp: '27720001002',
      quote:
        'When we educate a child in Tshepisong, we shape the future of the entire community.'
    },
    {
      id: 'clinic-manager',
      name: 'Sister B. Nkosi',
      role: 'Clinic Manager',
      description:
        'Manages the Tshepisong Community Clinic. Oversees daily healthcare operations, staff coordination, and community health outreach programmes.',
      image: 'assets/images/leader-clinic.jpg',
      phone: '0110001004',
      whatsapp: '',
      quote:
        'Health is the first wealth of any community, and we must protect it together.'
    },
    {
      id: 'forum-chair',
      name: 'Doctor X',
      role: 'Community accounatbilty advocate',
      description:
        'Advocacy for humanity, justice and equality on service delivery entirely and holding government into account and transparency',
      image: 'assets/images/about/dr-x.jpeg',
      phone: '0682007531',
      whatsapp: '0682007531',
      quote:
        'Learn to know your rights and fight for your rights in unity out of political parties affiliations and remember that the power to change our material conditions is in your hands through unity to change our living conditions.'
    },
  ]);

  buildWhatsApp(number: string): string {
    return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I found your contact on the Tshepisong Community Hub.')}`;
  }

  buildTel(phone: string): string {
    return `tel:${phone.replace(/\s/g, '')}`;
  }
}