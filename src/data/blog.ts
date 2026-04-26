import { basePath } from './homepage';

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
  featured: boolean;
  readTime: string;
};

export const blogCategories = [
  { key: 'all', label: 'All' },
  { key: 'compatibility', label: 'Compatibility' },
  { key: 'rolling-code', label: 'Rolling Code' },
  { key: 'oem-odm', label: 'OEM/ODM' },
  { key: 'buyer-checklist', label: 'Buyer Checklist' },
  { key: 'troubleshooting', label: 'Troubleshooting' },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Identify a Compatible Gate Remote',
    category: 'compatibility',
    excerpt: 'Step-by-step guide to identify models, chips, and protocols for gate operator remotes.',
    image: basePath + '/images/article-identify.jpg',
    slug: 'how-to-identify-a-compatible-gate-remote',
    featured: true,
    readTime: '5 min read',
  },
  {
    title: 'Rolling Code vs Fixed Code Remotes',
    category: 'rolling-code',
    excerpt: 'Understand the difference between rolling code and fixed code, and how it affects compatibility.',
    image: basePath + '/images/article-rolling-code.jpg',
    slug: 'rolling-code-vs-fixed-code-remotes',
    featured: false,
    readTime: '4 min read',
  },
  {
    title: 'What Buyers Should Send Before RF Matching',
    category: 'buyer-checklist',
    excerpt: 'Checklist of information and photos needed for faster remote compatibility matching.',
    image: basePath + '/images/article-checklist.jpg',
    slug: 'what-buyers-should-send-before-rf-matching',
    featured: false,
    readTime: '3 min read',
  },
  {
    title: 'When OEM Remote Control Development Is Needed',
    category: 'oem-odm',
    excerpt: 'Situations that require custom development and engineering support for RF solutions.',
    image: basePath + '/images/article-oem.jpg',
    slug: 'when-oem-remote-control-development-is-needed',
    featured: false,
    readTime: '6 min read',
  },
];
