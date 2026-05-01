import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header" [class.center]="centered" [class.on-dark]="onDark">
      @if (eyebrow) {
        <span class="eyebrow">{{ eyebrow }}</span>
      }
      <h2 class="title">{{ title }}</h2>
      @if (subtitle) {
        <p class="subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header { margin-bottom: 1.5rem; }
    .section-header.center { text-align: center; }
    .section-header.center .subtitle { margin-left: auto; margin-right: auto; }

    .eyebrow {
      display: block;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-accent);
      margin-bottom: 0.4rem;
    }

    .title {
      font-family: var(--font-display);
      font-size: clamp(22px, 4vw, 32px);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 0.6rem;
      color: var(--color-ink);
    }

    .on-dark .title { color: #fff; }
    .on-dark .subtitle { color: rgba(255,255,255,0.72); }

    .subtitle {
      font-size: 15px;
      color: var(--color-muted);
      max-width: 540px;
      line-height: 1.7;
    }
  `],
})
export class SectionHeaderComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
  @Input() centered = false;
  @Input() onDark = false;
}
