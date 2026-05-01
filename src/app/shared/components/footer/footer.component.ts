// footer.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">

          <!-- Brand -->
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-mark">T</div>
              <span class="footer-brand-name">Tshepisong Community Hub</span>
            </div>
            <p class="footer-brand-desc">
              A digital home for the Tshepisong community in Roodepoort,
              Johannesburg. Bringing our people, places and businesses together online.
            </p>
            <span class="footer-tag">🇿🇦 Built with pride for our community</span>
          </div>

          <!-- Explore -->
          <div class="footer-col">
            <div class="footer-col-title">Explore</div>
            <a class="footer-link" routerLink="/about">About Tshepisong</a>
            <a class="footer-link" routerLink="/spotlight">Community Spotlight</a>
            <a class="footer-link" routerLink="/businesses">Local Businesses</a>
            <a class="footer-link" routerLink="/services">Services</a>
            <a class="footer-link" routerLink="/contact">Get Involved</a>
          </div>

          <!-- Community -->
          <div class="footer-col">
            <div class="footer-col-title">Community</div>
            <a class="footer-link" href="#" target="_blank">Facebook Group</a>
            <a class="footer-link" href="#" target="_blank">WhatsApp Community</a>
            <a class="footer-link" href="#" target="_blank">Instagram</a>
            <a class="footer-link" routerLink="/contact">List My Business</a>
          </div>

          <!-- Emergency -->
          <div class="footer-col">
            <div class="footer-col-title">Emergency</div>
            <a class="footer-link emergency" href="tel:10111">🚔 Police: 10111</a>
            <a class="footer-link emergency" href="tel:10177">🚑 Ambulance: 10177</a>
            <a class="footer-link emergency" href="tel:0113755911">🚒 Fire: 011 375 5911</a>
            <a class="footer-link emergency" href="tel:0860037566">⚡ Eskom: 0860 037 566</a>
          </div>

        </div>

        <hr class="footer-divider">

        <div class="footer-bottom">
          <span>© 2025 <strong>Tshepisong Community Hub</strong>. All rights reserved.</span>
          <span class="footer-location">Roodepoort · Johannesburg · South Africa</span>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
