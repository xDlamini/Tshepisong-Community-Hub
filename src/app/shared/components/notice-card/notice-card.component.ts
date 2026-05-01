import { Component, Input } from '@angular/core';
import { Notice } from '../../../core/models/index';

@Component({
  selector: 'app-notice-card',
  standalone: true,
  template: `
    <article class="notice-card" [class.urgent]="notice.isUrgent">
      <div class="notice-date" [attr.aria-label]="notice.monthShort + ' ' + notice.dayNum">
        <span class="notice-month">{{ notice.monthShort }}</span>
        <span class="notice-day">{{ notice.dayNum }}</span>
      </div>
      <div class="notice-body">
        @if (notice.category) {
          <span class="notice-cat">{{ notice.category }}</span>
        }
        <h3 class="notice-title">{{ notice.title }}</h3>
        <p class="notice-text">{{ notice.body }}</p>
      </div>
    </article>
  `,
  styles: [`
    .notice-card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-border);
      border-left: 4px solid var(--color-primary);
      padding: 1rem 1.25rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      transition: box-shadow var(--transition-fast);
    }
    .notice-card:hover { box-shadow: var(--shadow-md); }
    .notice-card.urgent { border-left-color: var(--color-rust); }

    .notice-date {
      background: var(--color-primary);
      color: #fff;
      border-radius: var(--radius-md);
      padding: 5px 12px;
      text-align: center;
      flex-shrink: 0;
      line-height: 1.3;
      min-width: 48px;
    }

    .notice-month {
      display: block;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      opacity: 0.8;
    }

    .notice-day {
      display: block;
      font-size: 20px;
      font-weight: 700;
      font-family: var(--font-display);
    }

    .notice-cat {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--color-accent);
      display: block;
      margin-bottom: 3px;
    }

    .notice-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--color-ink);
      font-family: var(--font-display);
      line-height: 1.4;
    }

    .notice-text {
      font-size: 13px;
      color: var(--color-muted);
      line-height: 1.65;
    }
  `],
})
export class NoticeCardComponent {
  @Input({ required: true }) notice!: Notice;
}
