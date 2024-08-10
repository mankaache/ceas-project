// export interface IArticle {
//   slug: string;
//   image: { src: string; alt: string };
//   title: string;
//   excerpt: string;
//   content: string;
//   tags: string[];
//   author: { name: string };
//   date: string;
// }

// export interface IDocument {
//   title: string;
//   description: string;
//   href: string;
//   category: "documentation" | "report" | "journal" | "all";
// }

// export interface IEvent {
//   title: string;
//   slug: string;
//   id?: string;
//   image: {
//     src: string;
//     alt: string;
//   };
//   date: string;
//   category: string;
//   excerpt: string;
//   content: string;
//   location: string;
// }

import { StaticImageData } from "next/image";

export interface IPhoto {
  src: string;
  caption: string;
  status: "active" | "draft";
  createdAt: string;
  modifiedAt?: string;
  category: string;
}

export interface IVideo {
  src: string;
  title: string;
  description: string;
  status: "active" | "draft";
  createdAt: string;
  modifiedAt?: string;
  category: string;
}

export interface IDocument {
  src: string;
  title: string;
  description: string;
  status: "active" | "draft";
  createdAt: string;
  modifiedAt?: string;
  category: string;
}
export interface IAlumini {
  src: string;
  role:string;
  title: string;
  description: string;
  status: "active" | "draft";
  createdAt: string;
  modifiedAt?: string;
  category: string;
}

export interface IArticle {
  slug: string;
  image: { src: string; caption: string };
  title: string;
  excerpt: string;
  content: string;
  tags: { id: string; text: string }[];
  author: { name: string };
  createdAt: string;
  modifiedAt?: string;
  status: "active" | "draft";
  category: string;
}

export interface IEvent {
  slug: string;
  image: {
    src: string;
    caption: string;
  };
  title: string;
  excerpt: string;
  content: string;
  tags: { id: string; text: string }[];
  // author: { name: string };
  date: string;
  createdAt: string;
  modifiedAt?: string;
  category: string;
  location: string;
  status: "active" | "draft";
}

export interface ITrainingProgram {
  slug: string;
  image: {
    src: string;
    caption: string;
  };
  title: string;
  excerpt: string;
  content: string;
  tags: { id: string; text: string }[];
  // author: { name: string };
  date: string;
  createdAt: string;
  modifiedAt?: string;
  category: string;
  location: string;
  status: "active" | "draft";
}
