import type { FC, ReactElement } from 'react';
import type { SeoType } from '../types/layout/Seo';
import Head from 'next/head';
import { SITE_NAME_PASCAL_CASE } from '../constants';

interface HeadContentProps extends SeoType {
  children?: React.ReactNode[];
}

const HeadContent: FC<HeadContentProps> = (props): ReactElement => {
  const { keywords, icon } = props;
  const title = props.title || SITE_NAME_PASCAL_CASE;
  const description = props.description || title || SITE_NAME_PASCAL_CASE;
  const keywordsContent: string = (
    keywords ? arrToKeywords(keywords) : descriptionAsKeywords()
  );

  function arrToKeywords (arr: string[]): string {
    return arr.join(',');
  }

  function descriptionAsKeywords (): string {
    return arrToKeywords(description.split(' '));
  }

  function renderOGTags (): ReactElement[] {
    let ogTags: ReactElement[] = [];
    const tagNames: string[] = ['title', 'description', 'image', 'url'];

    for (let i: number = 0; i < tagNames.length; i++) {
      const tag: string = tagNames[i];
      
      // @ts-ignore
      const data: string | undefined = props?.[`og_${tag}`] || props?.[tag];

      if (!data) continue;

      ogTags.push(
        <meta property={`og:${tag}`} content={data} key={`og:${tag}`} />
      );
    }
    
    return ogTags;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsContent} />

      {renderOGTags()}

      <meta name="twitter:card" content="summary" />

      <link rel="icon" href={icon} />

      {props.children}
    </Head>
  );
};

export default HeadContent;