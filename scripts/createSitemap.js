require('dotenv').config({ path: '.env.local' });

const fs = require('fs');
const prettier = require('prettier');
const path = require('path');
const GhostApi = require('@tryghost/content-api');

const ghost = new GhostApi({
  url: process.env.PROD_GHOST_URL,
  key: process.env.PROD_GHOST_CONTENT_KEY,
  version: process.env.PROD_GHOST_VERSION
});

const sitemapFile = path.resolve(__dirname, '../public/sitemap.xml');

const formatted = (sitemap) => {
  return prettier.format(sitemap, { parser: 'html' });
};

const findAllPosts = async (params = {}) => (
  ghost.posts.browse(params)
);

const getPostsRoutes = async () => {
  const postParams = { fields: 'slug' };
  let posts = await findAllPosts(postParams);
  const pagination = posts?.meta?.pagination;

  if (pagination) {
    const totalPages = pagination.pages;
    let nextPage = pagination.page + 1;

    while (nextPage <= totalPages) {
      const pagePosts = await findAllPosts({ ...postParams, page: nextPage});

      pagePosts.forEach(post => posts[posts.length] = post);

      nextPage++;
    }
  }

  return posts.map(post => `/posts/${post.slug}`);
}

const getStaticRoutes = () => (['/', '/posts']);

const getPageXML = url => `
  <url>
    <loc>${url}</loc>
  </url>
`;

const createSitemap = async () => {
  const routes = [...getStaticRoutes(), ...(await getPostsRoutes())];

  const XML = routes.map(
    route => getPageXML(`${process.env.PROD_FRONTEND_ROUTE}${route}`)
  ).join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${XML}
    </urlset>
  `;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync(sitemapFile, formattedSitemap, 'utf8');
};

createSitemap();
