import { Injectable, signal } from '@angular/core';
import { Notice, ContactForm, BusinessListingForm } from '../models/index';

// ── NOTICES SERVICE ──────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class NoticesService {
  private readonly _notices = signal<Notice[]>([
    {
      id: 'notice-1',
      title: 'Community Clean-Up Day — Join Us!',
      body: 'All residents are invited to the monthly clean-up at the park. Bring gloves. Refreshments provided. Meet at the main gate at 8am.',
      date: '2025-01-15',
      dayNum: '15',
      monthShort: 'Jan',
      category: 'Community',
      isUrgent: false,
    },
    {
      id: 'notice-2',
      title: 'Youth Soccer Tournament — Registrations Open',
      body: 'Under-17 and Under-20 teams wanted for the Tshepisong Cup. Register at the sports ground before 30 January. Free entry for all participants.',
      date: '2025-01-20',
      dayNum: '20',
      monthShort: 'Jan',
      category: 'Sports',
      isUrgent: false,
    },
    {
      id: 'notice-3',
      title: 'Library Extended Hours — February',
      body: 'The public library will be open until 7pm on weekdays throughout February to support learners preparing for term exams.',
      date: '2025-02-03',
      dayNum: '3',
      monthShort: 'Feb',
      category: 'Education',
      isUrgent: false,
    },
  ]);

  readonly notices = this._notices.asReadonly();
}


// ── CONTACT SERVICE ──────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class ContactService {

  /**
   * Submit a business listing.
   * In Phase 1 this logs to console and returns a resolved promise.
   * In Phase 2: POST to Firebase Function or Firestore.
   */
  submitBusinessListing(form: BusinessListingForm): Promise<void> {
    console.log('[ContactService] Business listing submitted:', form);
    // Phase 2: return addDoc(collection(firestore, 'pending_businesses'), form)
    return Promise.resolve();
  }

  /**
   * Submit a general contact message.
   * In Phase 1 this integrates with EmailJS (free tier).
   * Replace YOUR_SERVICE_ID / YOUR_TEMPLATE_ID / YOUR_PUBLIC_KEY.
   */
  submitContactForm(form: ContactForm): Promise<void> {
    console.log('[ContactService] Contact form submitted:', form);

    // Example EmailJS integration (uncomment when keys are ready):
    // return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   from_name: form.name,
    //   from_email: form.email,
    //   subject: form.subject,
    //   message: form.message,
    // }, 'YOUR_PUBLIC_KEY');

    return Promise.resolve();
  }

  /**
   * Build a WhatsApp deep-link URL for a given phone number.
   */
  buildWhatsAppUrl(phone: string, message = ''): string {
    const clean = phone.replace(/\D/g, '');
    return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Build a tel: link for tap-to-call.
   */
  buildTelUrl(phone: string): string {
    return `tel:${phone.replace(/\s/g, '')}`;
  }
}
