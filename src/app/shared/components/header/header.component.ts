import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Spotlight', route: '/spotlight' },
    { label: 'Businesses', route: '/businesses' },
    { label: 'Services', route: '/services' },
    { label: 'Get Involved', route: '/contact' },
    { label: 'Leaders', route: '/leaders' },
    { label: 'Report Issue', route: '/service-tracker' },
  ];

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobile();
  }
}
