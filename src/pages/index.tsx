import { NextPage } from 'next';
import Link from 'next/link';

import Head from '~/infrastructure/components/Head';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head title="Article" />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js TypeScript @dev-to Article!</a>
        </h1>
        <Link
          href={`/[username]/[slug]`}
          as={`/hack4impact/a-shiny-on-hover-effect-that-follows-your-mouse-css-4d5b`}>
          <a>Details</a>
        </Link>
      </main>
    </>
  );
};

export default IndexPage;
