export interface IArticle {
  slug: string;
  image: { src: string; alt: string };
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: { name: string };
  date: string;
}

export interface IDocument {
  title: string;
  description: string;
  href: string;
  category: "documentation" | "report" | "journal" | "all";
}

export interface IEvent {
  title: string;
  slug: string;
  id?: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  category: string;
  excerpt: string;
  content: string;
  location: string;
}
