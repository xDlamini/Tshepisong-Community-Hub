import { Component, Input } from '@angular/core';
import { Business } from '../../../core/models/index';
import { ContactService } from '../../../core/services/notices.service';

@Component({
  selector: 'app-business-card',
  standalone: true,
  template: `
    <article class="biz-card">
      <div class="biz-top">
<div class="biz-image">
  <img
    [src]="business.imageUrl"
    [alt]="business.name"
    loading="lazy"
  />
</div>
        <div class="biz-meta">
          @if (business.isFeatured) {
            <span class="featured-badge">⭐ Featured</span>
          }
          <h3 class="biz-name">{{ business.name }}</h3>
          <span class="biz-cat">{{ business.categoryLabel }}</span>
        </div>
      </div>

      <p class="biz-desc">{{ business.description }}</p>

      @if (business.hours) {
        <div class="biz-hours">🕐 {{ business.hours }}</div>
      }

      <div class="biz-actions">
        <a class="biz-btn biz--btn-primary"
           [href]="telUrl"
           [attr.aria-label]="'WhatsApp ' + business.name">
          📞 Call Now
        </a>
        @if (business.whatsapp) {
          <a class="biz-btn"
             [href]="whatsappUrl"
             target="_blank"
             rel="noopener"
             [attr.aria-label]="'WhatsApp ' + business.name">
            💬 WhatsApp
          </a>
        }
      </div>
    </article>
  `,
  styleUrls: ['./business-card.component.css'],
})
export class BusinessCardComponent {
  @Input({ required: true }) business!: Business;

  constructor(private contactSvc: ContactService) { }

  get telUrl(): string {
    return this.contactSvc.buildTelUrl(this.business.phone);
  }

  get whatsappUrl(): string {
    return this.contactSvc.buildWhatsAppUrl(
      this.business.whatsapp ?? this.business.phone,
      `Hi! I found your business on the Tshepisong Community Hub.`
    );
  }
}
