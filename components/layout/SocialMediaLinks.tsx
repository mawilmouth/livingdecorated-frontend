import type { IconPropsType } from '../../types/modules/icons';
import type { FC, ReactElement } from 'react';
import type { DataType as SocialMediaDataType } from '../../staticData/socialMediaData';
import { Fragment } from 'react';
import Link from 'next/link';
import socialMediaData from '../../staticData/socialMediaData';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YoutubeIcon,
  EtsyIcon
} from '../../modules/icons';

interface ComponentType {
  Icon: (props: IconPropsType) => ReactElement;
  href: string;
};

interface ComponentsType {
  facebook: ComponentType;
  instagram: ComponentType;
  pinterest: ComponentType;
  youtube: ComponentType;
  etsy: ComponentType;
};

type ComponentsKeysType = 'facebook' | 'instagram' | 'pinterest' | 'youtube' | 'etsy';

const socialMedias: string[] = [
  'facebook', 'instagram', /* 'pinterest', 'youtube', */ 'etsy'
];

const SocialMediaLinks: FC<{}> = (): ReactElement => {
  const data: SocialMediaDataType = socialMediaData; 

  const components: ComponentsType = {
    etsy:      { Icon: EtsyIcon,      href: data.etsy },
    youtube:   { Icon: YoutubeIcon,   href: data.youtube },
    facebook:  { Icon: FacebookIcon,  href: data.facebook },
    instagram: { Icon: InstagramIcon, href: data.instagram },
    pinterest: { Icon: PinterestIcon, href: data.pinterest }
  };

  function renderLinkComponents (): ReactElement[] {
    let links: ReactElement[] = [];

    for (let i: number = 0; i < socialMedias.length; i++) {
      const socialMediaName: string = socialMedias[i];
      const componentData: ComponentType = components[
        socialMediaName as ComponentsKeysType
      ];
      
      if (!componentData) continue;

      const { Icon, href } = componentData;
      const key: string = `social-link-${Math.random()}`;

      links.push(
        <li className="social-link" key={key}>
          <Link href={href} passHref={true}>
            <a target="_blank">
              <Icon className={socialMediaName} />
            </a>
          </Link>
        </li>
      );
    }

    return links;
  }

  return <Fragment>{renderLinkComponents()}</Fragment>;
}

export default SocialMediaLinks;
