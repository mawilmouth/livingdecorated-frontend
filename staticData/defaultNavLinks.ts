export interface NavLinkType {
  title: string;
  href: string;
}

const defaultNavLinks: NavLinkType[] = [
  {
    title: 'posts',
    href: '/posts'
  }
];

export default defaultNavLinks;