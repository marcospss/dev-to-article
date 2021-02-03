import { NextPage } from 'next';
import Link from 'next/link';

import HeadNext from '~/infrastructure/components/Head';
const IndexPage: NextPage = () => {
  return (
    <>
      <HeadNext title="Home" />
      <h1>Article</h1>
      <hr />
      <Link
        href={`/[username]/[slug]`}
        as={`/hack4impact/a-shiny-on-hover-effect-that-follows-your-mouse-css-4d5b`}>
        <a>Details Page</a>
      </Link>
    </>
  );
};

export default IndexPage;
