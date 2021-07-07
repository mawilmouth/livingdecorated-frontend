import { FC, ReactElement, Fragment } from 'react';
import Link from 'next/link';
import { DataType as SocialMediaDataType } from '../../staticData/socialMediaData';
import socialMediaData from '../../staticData/socialMediaData';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YoutubeIcon,
  EtsyIcon
} from '../../modules/icons';

const SocialMediaLinks: FC<{}> = (): ReactElement => {
  const data: SocialMediaDataType = socialMediaData; 

  return (
    <Fragment>
      <li className="social-link">
        <Link href={data.facebook} passHref={true}>
          <a>
            <FacebookIcon className="facebook" />
          </a>
        </Link>
      </li>
      <li className="social-link">
        <Link href={data.instagram} passHref={true}>
          <a>
            <InstagramIcon className="instagram" />
          </a>
        </Link>
      </li>
      <li className="social-link">
        <Link href={data.pinterest} passHref={true}>
          <a>
            <PinterestIcon className="pinterest" />
          </a>
        </Link>
      </li>
      <li className="social-link">
        <Link href={data.youtube} passHref={true}>
          <a>
            <YoutubeIcon className="youtube" />
          </a>
        </Link>
      </li>
      <li className="social-link">
        <Link href={data.etsy} passHref={true}>
          <a>
            <EtsyIcon className="etsy" />
          </a>
        </Link>
      </li>
    </Fragment>
  );
}

export default SocialMediaLinks;