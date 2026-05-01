import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../core/services/notices.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactSvc = inject(ContactService);

  submitting  = signal(false);
  submitted   = signal(false);
  submitError = signal('');

  businessForm = this.fb.group({
    businessName: ['', [Validators.required, Validators.minLength(2)]],
    category:     ['', Validators.required],
    description:  ['', [Validators.required, Validators.maxLength(200)]],
    phone:        ['', [Validators.required, Validators.pattern(/^[\d\s+()-]{7,20}$/)]],
    whatsapp:     [''],
    address:      [''],
    ownerName:    ['', Validators.required],
    ownerEmail:   ['', [Validators.required, Validators.email]],
  });

  contactForm = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  categories = [
    'Food & Spaza', 'Hair & Beauty', 'Repairs & Trades',
    'Childcare', 'Transport', 'General Services', 'Other',
  ];

  async onSubmitBusiness(): Promise<void> {
    if (this.businessForm.invalid) { this.businessForm.markAllAsTouched(); return; }
    this.submitting.set(true);
    try {
      await this.contactSvc.submitBusinessListing(this.businessForm.value as any);
      this.submitted.set(true);
      this.businessForm.reset();
    } catch {
      this.submitError.set('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      this.submitting.set(false);
    }
  }

  async onSubmitContact(): Promise<void> {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.submitting.set(true);
    try {
      await this.contactSvc.submitContactForm(this.contactForm.value as any);
      this.submitted.set(true);
      this.contactForm.reset();
    } catch {
      this.submitError.set('Something went wrong. Please try again.');
    } finally {
      this.submitting.set(false);
    }
  }
}
