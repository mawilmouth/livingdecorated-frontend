import { FC, ReactElement, ReactNode, Fragment, useState } from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { PageType } from '../types/lib/ghost/pages';
import { TopNavProps } from '../types/layout/TopNav';
import SocialMediaLinks from '../components/layout/SocialMediaLinks';

const TopNav: FC<TopNavProps> = (props): ReactElement => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const burgerActiveClass: string = mobileMenuActive ? 'active' : '';

  const navLinks: ReactNode[] = [...renderNavLinks(), ...renderCategoryLinks()];

  const menuOptions = {
    left: true,
    pageWrapId: 'contentWrapper',
    outerContainer: 'layoutContainer',
    customBurgerIcon: false,
    customCrossIcon: false,
    className: mobileMenuActive ? 'active' : '',
    width: '300px',
    isOpen: mobileMenuActive,
    onClose: () => setMobileMenuActive(!mobileMenuActive)
  };

  function renderNavLinks (): ReactNode[] {
    return props.navPages.map((page, index) => (
      <li className="nav-link" key={`nav-link-${index}`} >
        <Link href="/[slug]" as={`/${page.slug}`}>
          <a>{page.title}</a>
        </Link>
      </li>
    ));
  }

  function renderCategoryLinks (): ReactNode[] {
    return props.categoryPages.map((page: PageType, index: number) => (
      <li className="nav-link" key={`nav-category-${index}`} >
        <Link href="/posts/[slug]" as={`/posts/${page.slug}`}>
          <a>{page.title}</a>
        </Link>
      </li>
    ));
  }

  function toggleMobileMenu (): void {
    setMobileMenuActive(!mobileMenuActive);
  }

  return (
    <Fragment>
      <div className="nav-container">
        <div className="row">
          <div className="columns small-8 links-container">
            <ul className="list">
              <li className="nav-link" key={`nav-link-home`} >
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>
              {navLinks}
            </ul>
          </div>
          <div className="columns small-12 logo-container">
            <div className="logo-branding">
              <Link href="/">
                <a>LivingDecorated</a>
              </Link>
            </div>
          </div>
          <div className="columns small-4 socials-container">
            <ul className="list">
              <SocialMediaLinks />
            </ul>
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
            <li className="nav-link" key={`nav-link-home`} >
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
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