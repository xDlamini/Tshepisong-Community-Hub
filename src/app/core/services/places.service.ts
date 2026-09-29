import { Injectable, signal, computed } from '@angular/core';
import { Place, PlaceCategory } from '../models/index';

@Injectable({ providedIn: 'root' })
export class PlacesService {

  private readonly _places = signal<Place[]>([
    {
      id: 'community-park',
      name: 'Tshepisong Community Park',
      category: 'park',
      description: 'Open green space with walking paths, benches and a children\'s play area. A family gathering point every weekend.',
      longDescription: 'Tshepisong Community Park is one of the most loved open spaces in the area. Featuring walking paths lined with trees, benches, a children\'s play area, and open fields perfect for community gatherings. The park hosts the monthly community clean-up day and is home to informal markets on weekends.',
      imageUrl: './assets/images/park.jpg',
      hours: 'Open daily · Sunrise to sunset',
      address: 'Main Road, Tshepisong, Roodepoort',
      isFeatured: true,
    },
    {
      id: 'primary-school',
      name: 'Tshepisong Primary School',
      category: 'school',
      description: 'Grade R to Grade 7. Dedicated teachers, school feeding scheme, and a community sports field.',
      longDescription: 'One of the cornerstone institutions of Tshepisong. The school offers Grade R through Grade 7 education with a dedicated teaching staff. The school feeding scheme ensures learners are nourished, and the sports field is shared with the community on weekends.',
      imageUrl: './assets/images/tshepisong primary.png',
      hours: 'Mon–Fri · 07:30–14:00',
      address: 'School Street, Tshepisong, Roodepoort',
      contact: '011 000 0000',
      isFeatured: true,
    },
    {
      id: 'sports-ground',
      name: 'Tshepisong Sports Ground',
      category: 'sports',
      description: 'Full-size soccer field and athletics track. Home of local league matches and community sports days.',
      longDescription: 'The Tshepisong Sports Ground is the heartbeat of youth activity in the area. Home to weekly local league soccer matches, Saturday morning athletics, and the annual Tshepisong Cup. The facility is community-managed and open to all residents.',
      imageUrl: 'assets/images/grounds.jpg',
      hours: 'Weekends · 08:00–18:00',
      address: 'Sports Road, Tshepisong, Roodepoort',
      isFeatured: true,
    },
    {
      id: 'public-library',
      name: 'Tshepisong Public Library',
      category: 'library',
      description: 'Books, study spaces, free internet access and Wi-Fi. Open to all residents. Children\'s reading corner available.',
      longDescription: 'The Tshepisong Public Library is a vital resource for learners and adults alike. Offering thousands of books, free internet access, a quiet study hall, and a dedicated children\'s reading corner. The library extends hours during exam periods to support students.',
      imageUrl: 'assets/images/Tshepisong library.jpg',
      hours: 'Mon–Sat · 09:00–17:00 (Extended hours in Feb)',
      address: 'Library Avenue, Tshepisong, Roodepoort',
      contact: '011 000 0001',
      isFeatured: true,
    },
    {
      id: 'ecd-centre',
      name: 'Ratabana Montessori pre-school',
      category: 'school',
      description: 'Early Childhood Development for ages 0–5. Registered with the Department of Social Development. Subsidies available.',
      imageUrl: 'assets/images/ratabana.jpg',
      hours: 'Mon–Fri · 07:00–17:00',
      address: 'Hope Street, Tshepisong, Roodepoort',
      contact: '072 000 0002',
    },
    {
      id: 'community-clinic',
      name: 'Tshepisong Community Clinic',
      category: 'clinic',
      description: 'Primary healthcare, immunisations, HIV/TB testing, chronic medication. No appointment needed for most services.',
      longDescription: 'The Tshepisong Community Clinic provides essential primary healthcare to all residents. Services include immunisations, HIV/TB testing and counselling, chronic medication dispensing, maternal health, and general primary care. The clinic operates a no-appointment walk-in system.',
      imageUrl: 'assets/images/clinic.jpg',
      hours: 'Mon–Fri · 07:30–16:00',
      address: 'Health Road, Tshepisong, Roodepoort',
      contact: '011 000 0003',
      isFeatured: true,
    },
    {
      id: 'basketball-court',
      name: 'Tshepisong Basketball Court',
      category: 'sports',
      description: 'Outdoor basketball court. Youth leagues run every Saturday morning. All skill levels welcome.',
      imageUrl: 'assets/images/basketball.jpg',
      hours: 'Open daily · Saturdays: organised games from 09:00',
      address: 'Youth Street, Tshepisong, Roodepoort',
    },
    {
      id: 'riverside-park',
      name: 'Riverside Recreation Area',
      category: 'park',
      description: 'Open field with braai facilities and seating. Popular for family gatherings and community events on public holidays.',
      imageUrl: 'assets/images/riverside.jpg',
      hours: 'Open daily · Free entry',
      address: 'Riverside Drive, Tshepisong, Roodepoort',
    },
    {
      id: 'community-hall',
      name: 'Tshepisong Community Hall',
      category: 'hall',
      description: 'Multipurpose hall for community meetings, events, and gatherings. Available for hire by residents and organisations.',
      imageUrl: 'assets/images/hall.jpg',
      hours: 'By appointment',
      address: 'Centre Road, Tshepisong, Roodepoort',
      contact: '011 000 0004',
    },
  ]);

  readonly places = this._places.asReadonly();

  readonly featuredPlaces = computed(() =>
    this._places().filter(p => p.isFeatured)
  );

  filterByCategory(category: PlaceCategory | 'all'): Place[] {
    if (category === 'all') return this._places();
    return this._places().filter(p => p.category === category);
  }

  getById(id: string): Place | undefined {
    return this._places().find(p => p.id === id);
  }
}
