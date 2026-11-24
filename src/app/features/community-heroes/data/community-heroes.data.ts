import { CommunityHero } from '../models/community-hero.model';

export const COMMUNITY_JOURNALIST = {
  name: 'Mr Thabang Phonco',
  role: 'Community Journalist',
  image: 'assets/images/about/thabang.jpg',
};


/** FICTIONAL DEMO CONTENT ONLY. Replace with verified, consented and approved stories before publication. */
export const COMMUNITY_HEROES: CommunityHero[] = [
  {
    slug: 'community-coach', name: 'Mapiwane (Demo)', role: 'Juventus Football Coach', category: 'Sports & Youth Development', location: 'Tshepisong',
    shortIntro: 'A fictional example of a coach using football to help young people build confidence, discipline and ambition.',
    author: COMMUNITY_JOURNALIST,
    biography: 'This sample biography demonstrates where the journalist should introduce the coach, explain how their journey began and describe their work. Replace it with verified details approved by the interviewee.',
    contribution: 'Youth mentorship, grassroots football and positive activities for young people.', quote: 'The real victory is seeing a young person believe in what they can become.',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', imageAlt: 'Stock demonstration portrait for a fictional football coach', featured: true, publishedDate: '2026-11-01',
    interviewTitle: 'Beyond the whistle: Building confidence through football', interviewIntro: 'A fictional sample conversation about the motivation, challenges and lessons behind grassroots coaching.',
    interview: [
      { question: 'Tell us about yourself and how your coaching journey began.', answer: 'I started because I loved football and wanted young people to have a positive place to learn, grow and challenge themselves. What began as helping a few players developed into a commitment to mentorship through sport.' },
      { question: 'What has kept you motivated throughout your coaching journey?', answer: 'Progress keeps me motivated. It is not only about winning matches. It is seeing a player become more disciplined, respect others, return after a setback and believe in their ability.' },
      { question: 'What has been your proudest moment as a coach?', answer: 'A proud moment is seeing a player take lessons from training into everyday life. In a real interview, include a specific, verified achievement or story shared by the coach.' },
      { question: 'What challenges do young footballers in the community face?', answer: 'Access to safe facilities, equipment, transport, exposure and consistent support can be difficult. Talent matters, but young players also need guidance and opportunities.' },
      { question: 'What values should players carry beyond the football field?', answer: 'Discipline, teamwork, humility, respect and resilience. Those values help a young person move forward in many areas of life.' },
      { question: 'What advice would you give a young person who dreams of becoming a professional footballer?', answer: 'Work consistently, listen, look after your education and health, and do not allow one setback to define you. Keep your ambitions realistic, but do not be afraid to work towards them.' },
      { question: 'How can parents and the wider community support local sports development?', answer: 'They can encourage young people, attend local activities, volunteer where possible and help create safe, supportive environments. A coach should not have to build everything alone.' },
      { question: 'What would you like to see improve for community football?', answer: 'More accessible facilities, reliable equipment, structured development opportunities and stronger partnerships between coaches, schools, families and local organisations.' },
      { question: 'What message would you like to leave with the next generation?', answer: 'Your starting point does not determine your destination. Be willing to learn, respect the people helping you and use every opportunity to improve.' },
      { question: 'How can residents get involved or support your work?', answer: 'In a real profile, include only the coach’s approved organisation or contact details. Do not publish private contact information without permission.' }
    ]
  },
  {
    slug: 'education-champion', name: 'Nomsa Dlamini (Demo)', role: 'Education Mentor', category: 'Education & Mentorship', location: 'Tshepisong',
    shortIntro: 'A fictional mentor helping learners recognise their strengths and explore education pathways.',
    author: COMMUNITY_JOURNALIST,
    biography: 'Use this space to introduce the mentor, explain their motivation and describe their verified work with learners.', contribution: 'Learner support, study guidance and mentorship.', quote: 'A learner needs someone who can remind them that their future is still being written.',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg', imageAlt: 'Stock demonstration portrait for a fictional education mentor', publishedDate: '2026-10-24',
    interviewTitle: 'Helping learners see possibilities beyond the classroom', interviewIntro: 'A sample conversation about mentorship, education access and encouraging young people to keep learning.',
    interview: [
      { question: 'What inspired you to become involved in learner support?', answer: 'I believe every learner deserves encouragement and access to information. Sometimes guidance about a study routine or an application can make a meaningful difference.' },
      { question: 'What do learners need most from mentors?', answer: 'They need someone who listens without judgement, helps them set achievable goals and connects them with reliable information and support.' },
      { question: 'What barriers can make education difficult for young people?', answer: 'Barriers may include limited resources, lack of guidance, competing responsibilities and uncertainty about available pathways.' },
      { question: 'How can residents support education locally?', answer: 'They can encourage reading, create time for study, share verified opportunities and celebrate effort as well as results.' },
      { question: 'What message would you give a learner who feels left behind?', answer: 'Your pace does not cancel your potential. Ask questions, seek support and take the next manageable step.' }
    ]
  },
  {
    slug: 'local-entrepreneur', name: 'Lerato Nkosi (Demo)', role: 'Small Business Owner', category: 'Business & Economic Empowerment', location: 'Tshepisong',
    shortIntro: 'A fictional entrepreneur building a local business and encouraging residents to support neighbourhood enterprise.',
    author: COMMUNITY_JOURNALIST,
    biography: 'Explain how the entrepreneur started, what the business offers and how their work contributes locally. Verify all claims before publication.', contribution: 'Local enterprise and peer encouragement for emerging entrepreneurs.', quote: 'Starting small should never stop you from thinking carefully about where you want to go.',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg', imageAlt: 'Stock demonstration portrait for a fictional entrepreneur', publishedDate: '2026-10-18',
    interviewTitle: 'Building a business one customer at a time', interviewIntro: 'A sample interview exploring the realities of running a small business in the community.',
    interview: [
      { question: 'How did your business idea come about?', answer: 'I noticed a need and wanted to test whether I could provide a useful service. I started small, listened to customers and learned what worked.' },
      { question: 'What has been the biggest lesson from running a business?', answer: 'Understand your costs, keep records and communicate clearly with customers. Passion is important, but a business also needs sound daily decisions.' },
      { question: 'What challenges do local entrepreneurs commonly face?', answer: 'Access to customers, working capital, reliable suppliers, digital visibility and business knowledge can all be challenging.' },
      { question: 'How can residents help local businesses grow?', answer: 'Support businesses when you can, share accurate recommendations and give constructive feedback. Trust and repeat customers matter.' },
      { question: 'What advice would you give someone starting a small business?', answer: 'Understand the customer problem, test your idea on a manageable scale and keep track of every rand coming in and going out.' }
    ]
  },
  {
    slug: 'community-builder', name: 'Sipho Khumalo (Demo)', role: 'Community Volunteer', category: 'Community Development', location: 'Tshepisong',
    shortIntro: 'A fictional volunteer bringing neighbours together around practical community improvement activities.',
    author: COMMUNITY_JOURNALIST,
    biography: 'A real profile should describe the volunteer’s actual projects, partners, dates and measurable outcomes.', contribution: 'Neighbourhood participation, local clean-ups and community coordination.', quote: 'A better neighbourhood is something we build together, one practical action at a time.',
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg', imageAlt: 'Stock demonstration portrait for a fictional community volunteer', publishedDate: '2026-10-12',
    interviewTitle: 'Small actions, stronger neighbourhoods', interviewIntro: 'A sample discussion about volunteering, collaboration and turning community concerns into practical action.',
    interview: [
      { question: 'What encouraged you to become active in community work?', answer: 'I wanted to move from talking about challenges to finding practical ways for residents to work together.' },
      { question: 'How do you encourage people to participate?', answer: 'Make the activity clear, welcoming and realistic. People are more likely to join when they understand the purpose and can see how their contribution helps.' },
      { question: 'What makes a community initiative successful?', answer: 'Clear responsibilities, consistent communication, realistic goals and cooperation with people affected by the issue.' },
      { question: 'What should someone do if they have an idea for improving their area?', answer: 'Speak to neighbours, understand the issue, identify who needs to be involved and begin with a manageable first step.' },
      { question: 'What would you like residents to remember?', answer: 'You do not need a title to make a contribution. Respectful participation and consistency can make a difference.' }
    ]
  },
  {
    slug: 'creative-voice', name: 'Ayanda Molefe (Demo)', role: 'Poet & Creative', category: 'Arts & Culture', location: 'Tshepisong',
    shortIntro: 'A fictional creative using poetry and storytelling to explore identity, belonging and community life.',
    author: COMMUNITY_JOURNALIST,
    biography: 'Describe the creative person’s journey, work and approved public performances or portfolio links.', contribution: 'Creative expression, storytelling and cultural participation.', quote: 'Our stories deserve space, and young creatives deserve an audience.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg', imageAlt: 'Stock demonstration portrait for a fictional local creative', publishedDate: '2026-10-05',
    interviewTitle: 'Finding a voice through art and storytelling', interviewIntro: 'A sample interview about creative identity, inspiration and making space for local talent.',
    interview: [
      { question: 'When did you first realise creativity was important to you?', answer: 'I have always noticed stories in ordinary moments. Writing and performing gave me a way to explore those observations and share them.' },
      { question: 'Where do you find inspiration for your work?', answer: 'People, language, everyday experiences, music and the changes happening around me all provide inspiration.' },
      { question: 'What challenges do emerging creatives face?', answer: 'Finding platforms, audiences, mentorship, equipment and opportunities to earn from creative work can be difficult.' },
      { question: 'Why should communities support local art and culture?', answer: 'Creative work preserves stories, opens conversations and gives people different ways to express who they are.' },
      { question: 'What advice would you give a young person pursuing the arts?', answer: 'Practise consistently, build a portfolio, collaborate respectfully and look for opportunities to share your work.' }
    ]
  },
  {
    slug: 'community-advocate', name: 'David Ndlovu (Demo)', role: 'Community Awareness Volunteer', category: 'Health & Social Impact', location: 'Tshepisong',
    shortIntro: 'A fictional community advocate helping residents find reliable information and connect with support services.',
    author: COMMUNITY_JOURNALIST,
    biography: 'Replace with a verified account of the person’s role, training, organisation and the boundaries of the support they provide.', contribution: 'Community awareness, information sharing and connecting residents with appropriate services.', quote: 'Good information helps people make decisions with greater confidence.',
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg', imageAlt: 'Stock demonstration portrait for a fictional community advocate', publishedDate: '2026-09-28',
    interviewTitle: 'Making useful information easier to reach', interviewIntro: 'A sample conversation about community awareness, responsible information sharing and connecting people with support.',
    interview: [
      { question: 'What does community advocacy mean to you?', answer: 'It means listening to residents, sharing reliable information and helping people identify the right organisations or services to contact.' },
      { question: 'How do you make sure information is trustworthy?', answer: 'Check the original source, confirm that details are current and avoid forwarding claims that cannot be verified.' },
      { question: 'What role can digital platforms play in community awareness?', answer: 'They can make verified information easier to find, but information should be dated, sourced and corrected when circumstances change.' },
      { question: 'How can residents raise concerns responsibly?', answer: 'Describe what happened clearly, include relevant dates and locations where appropriate, protect personal information and use the correct reporting channel.' },
      { question: 'What is your message to residents?', answer: 'Stay informed, ask questions and support one another. When an issue needs specialist help, connect with the appropriate qualified service.' }
    ]
  }
];
