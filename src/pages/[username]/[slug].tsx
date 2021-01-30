import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import { Article } from '~/infrastructure/models/article';
import API from '~/infrastructure/settings/api';
import fetcher from '~/infrastructure/utils/fetcher';

type Props = {
  query: {
    username: string;
    slug: string;
  };
  article: Article;
  error: string;
};

const ArticlePage = ({ query, article, error }: Props): JSX.Element => {
  const { username, slug } = query;
  const { data } = useSWR<Article>(
    username && slug ? `${API.articles}/${username}/${slug}` : null,
    fetcher,
    {
      initialData: article,
    }
  );

  if (error) {
    return <h1>404 - Not Found</h1>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <pre>{JSON.stringify(article, null, 4)}</pre>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { username, slug } = params || {};
    const article = await fetcher(`${API.articles}/${username}/${slug}`);
    return { props: { article, error: null, query: { username, slug } } };
  } catch (error) {
    return { props: { article: {}, error: true, query: {} } };
  }
};

export default ArticlePage;
