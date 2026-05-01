import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  categories = [
    { id: 'health',    emoji: '🏥', name: 'Health & Clinics',    anchor: '#health' },
    { id: 'education', emoji: '🏫', name: 'Education',           anchor: '#education' },
    { id: 'govt',      emoji: '🏛️', name: 'Government',          anchor: '#govt' },
    { id: 'transport', emoji: '🚌', name: 'Transport',           anchor: '#transport' },
    { id: 'emergency', emoji: '🚨', name: 'Emergency',           anchor: '#emergency' },
    { id: 'utilities', emoji: '⚡', name: 'Utilities',           anchor: '#utilities' },
  ];

  emergency = [
    { num: '10111',         label: '🚔 Police (SAPS)',           tel: '10111' },
    { num: '10177',         label: '🚑 Ambulance (EMS)',         tel: '10177' },
    { num: '011 375 5911',  label: '🚒 Fire & Rescue (CoJ)',     tel: '0113755911' },
    { num: '0860 037 566',  label: '⚡ Eskom Faults',            tel: '0860037566' },
    { num: '0800 002 587',  label: '💧 Joburg Water',            tel: '0800002587' },
    { num: '080 000 4326',  label: '📞 Social Services (DSD)',   tel: '0800004326' },
  ];

  healthServices = [
    {
      emoji: '🏥',
      name: 'Tshepisong Community Clinic',
      type: 'Primary Healthcare',
      desc: 'Immunisations, HIV/TB testing, chronic medication, maternal health and general primary care. No appointment needed.',
      hours: 'Mon–Fri · 07:30–16:00',
      phone: '011 000 0003',
    },
    {
      emoji: '🏨',
      name: 'Leratong Hospital',
      type: 'Nearest Public Hospital',
      desc: 'Full public hospital with emergency, maternity and specialist services. Approximately 10 minutes from Tshepisong.',
      hours: '24 Hours · 7 Days',
      phone: '011 411 3500',
    },
  ];

  transportItems = [
    { emoji: '🚐', title: 'Minibus Taxis',  desc: 'Routes to Roodepoort CBD, Park Station and Soweto run daily from the main taxi rank in Tshepisong.' },
    { emoji: '🚌', title: 'Metrobus',        desc: 'Routes connecting Tshepisong to central Johannesburg. See the CoJ website for timetables and fares.' },
    { emoji: '🚂', title: 'Metrorail Train', desc: 'Nearest station is Roodepoort. Trains run to Park Station, Soweto and other Gauteng destinations.' },
  ];
}
