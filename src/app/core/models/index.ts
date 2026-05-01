// src/app/core/models/place.model.ts

export type PlaceCategory =
  | 'park'
  | 'school'
  | 'sports'
  | 'library'
  | 'clinic'
  | 'church'
  | 'hall';

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  longDescription?: string;
  imageUrl: string;
  emoji: string;
  hours?: string;
  address?: string;
  contact?: string;
  isFeatured?: boolean;
}

// src/app/core/models/business.model.ts
export type BusinessCategory =
  | 'food'
  | 'beauty'
  | 'trades'
  | 'childcare'
  | 'transport'
  | 'general';

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  categoryLabel: string;
  description: string;
  emoji: string;
  logoUrl?: string;
  phone: string;
  whatsapp?: string;
  address?: string;
  hours?: string;
  isFeatured: boolean;
}

// src/app/core/models/notice.model.ts
export interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;        // ISO date string
  dayNum: string;
  monthShort: string;
  category?: string;
  isUrgent?: boolean;
}

// src/app/core/models/service-category.model.ts
export interface ServiceCategory {
  id: string;
  name: string;
  emoji: string;
  anchor: string;
}

// src/app/core/models/contact-form.model.ts
export interface BusinessListingForm {
  businessName: string;
  category: string;
  description: string;
  phone: string;
  whatsapp: string;
  address: string;
  ownerName: string;
  ownerEmail: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
