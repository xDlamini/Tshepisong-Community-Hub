
import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.css',
})
export class CareersComponent {

    // Career information displayed in the explorer.
    careerCategories = [
        {
            id: 'retail',
            name: 'Retail & Supermarkets',
            icon: '🛒',
            description: 'Work in shops, supermarkets, clothing stores and customer-facing businesses.',
            roles: [
                'Cashier',
                'Sales Assistant',
                'Store Assistant',
                'Merchandiser',
                'Stock Controller',
                'Store Manager'
            ],
            skills: [
                'Customer service',
                'Communication',
                'Basic numeracy',
                'Teamwork',
                'Stock handling'
            ],
            gettingStarted: 'Look for entry-level store positions, in-store training and retail learnerships. Some roles may require previous experience or specific qualifications.'
        },
        {
            id: 'logistics',
            name: 'Warehousing & Logistics',
            icon: '📦',
            description: 'Help move, store and deliver goods across businesses and supply chains.',
            roles: [
                'General Worker',
                'Picker and Packer',
                'Warehouse Assistant',
                'Forklift Operator',
                'Delivery Assistant',
                'Logistics Coordinator'
            ],
            skills: [
                'Attention to detail',
                'Organisation',
                'Time management',
                'Physical fitness where required',
                'Safety awareness'
            ],
            gettingStarted: 'Explore warehouse assistant and general worker opportunities. Some specialised positions require licences, certificates or relevant experience.'
        },
        {
            id: 'construction',
            name: 'Construction & Skilled Trades',
            icon: '🛠️',
            description: 'Build, repair and maintain homes, buildings, infrastructure and equipment.',
            roles: [
                'General Construction Worker',
                'Electrician',
                'Plumber',
                'Carpenter',
                'Painter',
                'Bricklayer'
            ],
            skills: [
                'Practical problem-solving',
                'Attention to detail',
                'Health and safety awareness',
                'Technical ability',
                'Working with tools'
            ],
            gettingStarted: 'Investigate apprenticeships, artisan training and accredited skills programmes. Regulated trades may require formal qualifications and registration.'
        },
        {
            id: 'hospitality',
            name: 'Hospitality & Food Services',
            icon: '🍽️',
            description: 'Create welcoming experiences in restaurants, hotels, catering and food businesses.',
            roles: [
                'Waiter or Waitress',
                'Kitchen Assistant',
                'Cook',
                'Receptionist',
                'Housekeeping Assistant',
                'Restaurant Supervisor'
            ],
            skills: [
                'Customer service',
                'Communication',
                'Teamwork',
                'Time management',
                'Food hygiene awareness'
            ],
            gettingStarted: 'Look for restaurant, catering and hotel vacancies. Practical experience and hospitality training can help you progress.'
        },
        {
            id: 'administration',
            name: 'Administration & Finance',
            icon: '📊',
            description: 'Support the daily operations, records, communication and finances of organisations.',
            roles: [
                'Office Assistant',
                'Receptionist',
                'Data Capturer',
                'Administrative Clerk',
                'Bookkeeping Assistant',
                'Accounts Assistant'
            ],
            skills: [
                'Computer literacy',
                'Written communication',
                'Organisation',
                'Attention to detail',
                'Numeracy'
            ],
            gettingStarted: 'Build computer and office administration skills. Explore entry-level office roles, internships and relevant business administration courses.'
        },
        {
            id: 'healthcare',
            name: 'Healthcare & Social Services',
            icon: '🏥',
            description: 'Support the health, wellbeing and care of individuals and communities.',
            roles: [
                'Caregiver',
                'Community Health Worker',
                'Healthcare Administrator',
                'Nursing Assistant',
                'Social Work Assistant',
                'Registered Nurse'
            ],
            skills: [
                'Empathy',
                'Communication',
                'Responsibility',
                'Confidentiality',
                'Problem-solving'
            ],
            gettingStarted: 'Explore recognised healthcare and caregiving training routes. Clinical and regulated professions require specific accredited qualifications and registration.'
        },
        {
            id: 'technology',
            name: 'Technology & Digital Careers',
            icon: '💻',
            description: 'Use technology to build products, solve problems and support digital services.',
            roles: [
                'Junior Web Developer',
                'IT Support Technician',
                'Software Tester',
                'Graphic Designer',
                'Digital Marketer',
                'Data Analyst'
            ],
            skills: [
                'Digital literacy',
                'Problem-solving',
                'Communication',
                'Creativity',
                'Technical learning'
            ],
            gettingStarted: 'Build practical projects, develop a portfolio and explore internships, learnerships and entry-level technology programmes.'
        },
        {
            id: 'security',
            name: 'Security & Safety',
            icon: '🛡️',
            description: 'Help protect people, property and workplaces.',
            roles: [
                'Security Officer',
                'Access Control Officer',
                'CCTV Operator',
                'Safety Assistant',
                'Security Supervisor',
                'Health and Safety Officer'
            ],
            skills: [
                'Alertness',
                'Responsibility',
                'Communication',
                'Observation',
                'Following procedures'
            ],
            gettingStarted: 'Research the training and registration requirements for the role. Certain private security positions require PSIRA registration and appropriate training.'
        },
        {
            id: 'beauty',
            name: 'Beauty & Personal Services',
            icon: '💇',
            description: 'Provide personal care, grooming and beauty services to clients.',
            roles: [
                'Hair Stylist',
                'Barber',
                'Nail Technician',
                'Beauty Therapist',
                'Make-up Artist',
                'Salon Assistant'
            ],
            skills: [
                'Creativity',
                'Customer service',
                'Attention to detail',
                'Communication',
                'Practical technique'
            ],
            gettingStarted: 'Explore accredited training, practical experience and salon opportunities. You can also investigate building your own client base or service business.'
        },
        {
            id: 'entrepreneurship',
            name: 'Entrepreneurship & Self-Employment',
            icon: '🚀',
            description: 'Turn your skills, ideas and services into income-generating ventures.',
            roles: [
                'Small Business Owner',
                'Freelancer',
                'Local Service Provider',
                'Online Seller',
                'Creative Entrepreneur',
                'Independent Contractor'
            ],
            skills: [
                'Communication',
                'Financial planning',
                'Customer service',
                'Marketing',
                'Problem-solving'
            ],
            gettingStarted: 'Start by identifying a real customer need, testing your idea and understanding the costs of operating a small business.'
        }
    ];

    // The first category is selected when the page loads.
    selectedCategory = signal('retail');

    // Find the information for the currently selected category.
    selectedCareer = computed(() =>
        this.careerCategories.find(
            category => category.id === this.selectedCategory()
        )
    );

    // Update the selected category when a visitor clicks a category.
    selectCategory(categoryId: string): void {
        this.selectedCategory.set(categoryId);
    }
}
