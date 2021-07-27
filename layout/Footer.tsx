import { FC, ReactElement } from 'react';
import SocialMediaLinks from '../components/layout/SocialMediaLinks';

const Footer: FC<{}> = (): ReactElement => {
  return (
    <div className="footer-container row expanded">
      <div className="columns small-12">
        <ul className="social-medias-list">
          <SocialMediaLinks />
        </ul>
      </div>
      <div className="columns">
        <p className="copyright">
          Copyright &copy; 2021 LivingDecorated.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;