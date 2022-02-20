export interface NavLinkType {
  title: string;
  href: string;
}

const defaultNavLinks: NavLinkType[] = [
  {
    title: 'posts',
    href: '/posts'
  },
  {
    title: 'search',
    href: '/search'
  },
];

export default defaultNavLinks;
