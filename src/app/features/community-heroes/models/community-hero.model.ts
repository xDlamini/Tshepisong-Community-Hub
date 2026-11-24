export interface HeroInterviewAnswer {
  question: string;
  answer: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  image: string;
}

export interface CommunityHero {
  slug: string;
  name: string;
  role: string;
  category: string;
  location: string;
  shortIntro: string;
  biography: string;
  contribution: string;
  quote: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  publishedDate: string;
  interviewTitle: string;
  interviewIntro: string;
  author: ArticleAuthor;

  interview: HeroInterviewAnswer[];
}
