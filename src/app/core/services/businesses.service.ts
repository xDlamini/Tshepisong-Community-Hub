import { Injectable, signal, computed } from '@angular/core';
import { Business, BusinessCategory } from '../models/index';

@Injectable({ providedIn: 'root' })
export class BusinessesService {

  private readonly _businesses = signal<Business[]>([
    {
      id: 'Ratabana Montesorri pre-school',
      name: "Alice (Principal)",
      category: 'childcare',
      categoryLabel: 'Childcare',
      description: 'Registered home crèche for ages 6 months–5 years. Stimulating play-based learning. Meals provided. Subsidy accepted.',
      emoji: '💇',
      imageUrl: 'assets/images/ratabana.jpg',
      phone: '072 123 4567',
      whatsapp: '27721234567',
      address: 'Main Road, Tshepisong',
      hours: 'Mon–Sat · 08:00–18:00',
      isFeatured: true,
    },
    {
      id: 'thabos-braai',
      name: "Immaculate",
      category: 'trades',
      categoryLabel: 'Tv stands, builtin furniture',
      description: 'Fresh braai, pap and chakalaka every Friday to Sunday. The best spot after the match. Catering for events available.',
      emoji: '🍖',
      imageUrl: 'assets/images/image4.jpg',
      phone: '073 234 5678',
      whatsapp: '27732345678',
      address: 'Sports Road, Tshepisong',
      hours: 'Fri–Sun · 11:00–21:00',
      isFeatured: true,
    },
    {
      id: 'mpho-electrics',
      name: 'Mpho Electrics',
      category: 'trades',
      categoryLabel: 'Repairs & Trades',
      description: 'Certified electrician — wiring, fault finding, prepaid meters. Affordable rates. Same-day service for urgent faults.',
      emoji: '🔧',
      imageUrl: 'assets/images/businesses/mpho-electrics.jpg',
      phone: '074 345 6789',
      whatsapp: '27743456789',
      address: 'Tshepisong',
      hours: 'Mon–Sat · 07:00–17:00',
      isFeatured: true,
    },
    {
      id: 'tshepisong-express',
      name: 'Tshepisong Express Taxis',
      category: 'transport',
      categoryLabel: 'Transport',
      description: 'Reliable transport to Roodepoort CBD, Park Station and Soweto. Pre-bookings welcome for early mornings.',
      emoji: '🚐',
      imageUrl: 'assets/images/businesses/tshepisong-express.jpg',
      phone: '075 456 7890',
      whatsapp: '27754567890',
      address: 'Main Taxi Rank, Tshepisong',
      hours: 'Mon–Fri · 05:00–20:00',
      isFeatured: false,
    },
    {
      id: 'little-stars',
      name: 'Little Stars Home Crèche',
      category: 'childcare',
      categoryLabel: 'Childcare',
      description: 'Registered home crèche for ages 6 months–5 years. Stimulating play-based learning. Meals provided. Subsidy accepted.',
      emoji: '🧒',
      imageUrl: 'assets/images/businesses/little-stars.jpg',
      phone: '076 567 8901',
      whatsapp: '27765678901',
      address: 'Hope Street, Tshepisong',
      hours: 'Mon–Fri · 06:30–17:30',
      isFeatured: false,
    },
    {
      id: 'grace-spaza',
      name: "Grace's Spaza Shop",
      category: 'food',
      categoryLabel: 'Food & Spaza',
      description: 'Everyday essentials, airtime, groceries and cold drinks. Open 7 days a week from early morning. Friendly service.',
      emoji: '🛒',
      imageUrl: 'assets/images/businesses/grace-spaza.jpg',
      phone: '077 678 9012',
      address: 'Corner Hope & Main, Tshepisong',
      hours: 'Mon–Sun · 06:00–21:00',
      isFeatured: false,
    },
    {
      id: 'iImmaculate',
      name: "Immaculate services",
      category: 'trades',
      categoryLabel: 'Food & Spaza',
      description: 'Everyday essentials, airtime, groceries and cold drinks. Open 7 days a week from early morning. Friendly service.',
      emoji: '🛒',
      imageUrl: 'assets/images/businesses/grace-spaza.jpg',
      phone: '077 678 9012',
      address: 'Corner Hope & Main, Tshepisong',
      hours: 'Mon–Sun · 06:00–21:00',
      isFeatured: false,
    },
  ]);

  readonly businesses = this._businesses.asReadonly();

  readonly featuredBusinesses = computed(() =>
    this._businesses().filter(b => b.isFeatured)
  );

  filterByCategory(category: BusinessCategory | 'all'): Business[] {
    if (category === 'all') return this._businesses();
    return this._businesses().filter(b => b.category === category);
  }

  getById(id: string): Business | undefined {
    return this._businesses().find(b => b.id === id);
  }
}
