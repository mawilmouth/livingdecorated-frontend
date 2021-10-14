import { FC, ReactElement, ReactNode, Fragment, useState } from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { PageType } from '../types/lib/ghost/pages';
import { TopNavProps } from '../types/layout/TopNav';
import SocialMediaLinks from '../components/layout/SocialMediaLinks';
import defaultNavLinks, { NavLinkType } from '../staticData/defaultNavLinks';
import LinkToPage from '../components/LinkToPage';
import LinkToCategory from '../components/LinkToCategory';
import { loopWithBreak } from '../helpers';

const MAX_NUMBER_OF_NAV_LINKS: number = 6;

const TopNav: FC<TopNavProps> = (props): ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const burgerActiveClass: string = mobileMenuActive ? 'active' : '';
  let navLinkCount: number = 0;

  const navLinks: ReactNode[] = [
    ...renderDefaultLinks(),
    ...renderNavLinks(),
    ...renderCategoryLinks()
  ];

  const menuOptions = {
    left: true,
    pageWrapId: 'contentWrapper',
    outerContainer: 'layoutContainer',
    className: mobileMenuActive ? 'active' : '',
    width: '300px',
    isOpen: mobileMenuActive,
    onClose: () => setMobileMenuActive(!mobileMenuActive)
  };

  function breakLinkRender (): boolean {
    return navLinkCount >= MAX_NUMBER_OF_NAV_LINKS;
  }

  function incrementLinkCount (): number {
    return navLinkCount += 1;
  }

  function renderLinkListItem (link: ReactNode, keyIndex: number): ReactNode {
    return (
      <li className="nav-link" key={`nav-link-${keyIndex}`}>{link}</li>
    );
  }

  function renderNavLinks (): ReactNode[] {
    let links: ReactNode[] = [];

    function callback (page: PageType, index: number): void {
      const link: ReactNode = (
        <LinkToPage slug={page.slug}>{page.title}</LinkToPage>
      );

      links.push(renderLinkListItem(link, navLinkCount));

      incrementLinkCount();
    }

    loopWithBreak<PageType>(props.navPages, callback, breakLinkRender);

    return links;
  }

  function renderCategoryLinks (): ReactNode[] {
    let links: ReactNode[] = [];

    function callback (page: PageType, index: number): void {
      const link: ReactNode = (
        <LinkToCategory slug={page.slug}>{page.title}</LinkToCategory>
      );

      links.push(renderLinkListItem(link, navLinkCount));

      incrementLinkCount();
    }

    loopWithBreak<PageType>(props.categoryPages, callback, breakLinkRender);

    return links;
  }

  function renderDefaultLinks (): ReactNode[] {
    let links: ReactNode[] = [];

    function callback (linkData: NavLinkType, index: number): void {
      const link: ReactNode = (
        <Link href={linkData.href}>
          <a>{linkData.title}</a>
        </Link>
      );

      links.push(renderLinkListItem(link, navLinkCount));

      incrementLinkCount();
    }

    loopWithBreak<NavLinkType>(defaultNavLinks, callback, breakLinkRender);

    return links;
  }

  function toggleMobileMenu (): void {
    setMobileMenuActive(!mobileMenuActive);
  }

  return (
    <Fragment>
      <div className="nav-container">
        <div className="row">
          <div className="columns small-12 large-4 logo-container">
            <ul className="list">
              <li className="nav-link">
                <Link href="/">
                  <a>living decorated</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="columns small-8 links-container">
            <ul className="list">{navLinks}</ul>
          </div>
          <div className="burger-container">
            <div className={`burger ${burgerActiveClass}`} onClick={toggleMobileMenu} >
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>
      <Menu {...menuOptions}>
        <div className="responsive-menu" tabIndex={-1}>
          <ul className="list">
            {navLinks}
          </ul>
          <ul className="list social-media">
            <SocialMediaLinks />
          </ul>
        </div>
      </Menu>
    </Fragment>
  );
}

export default TopNav;