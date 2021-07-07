import { FC, ReactElement } from 'react';

const Footer: FC<{}> = (): ReactElement => {
  return (
    <div className="footer-container row expanded">
      <div className="columns">
        <p className="copyright">
          Copyright &copy; 2021 LivingDecorated.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;