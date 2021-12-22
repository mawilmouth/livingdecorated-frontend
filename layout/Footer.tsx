import type { FC, ReactElement } from 'react';
import SocialMediaLinks from '../components/layout/SocialMediaLinks';
import { SITE_NAME_PASCAL_CASE } from '../constants';
import LinkToStaticPage from '../components/LinkToStaticPage';

const Footer: FC<{}> = (): ReactElement => {
  return (
    <div className="footer-container row expanded">
      <div className="columns small-12">
        <ul className="social-medias-list">
          <SocialMediaLinks />
        </ul>
      </div>
      <div className="columns small-12">
        <p className="copyright">
          Copyright &copy; 2021 {SITE_NAME_PASCAL_CASE}.com. All rights reserved.
        </p>
      </div>
      <div className="columns page-links-container small-12">
        <LinkToStaticPage path="/privacy">Privacy Policy</LinkToStaticPage>
      </div>
    </div>
  );
};

export default Footer;
