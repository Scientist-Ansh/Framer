import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';

import { getPostData } from '../../lib/posts';

import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  let postData = null;
  if (id) {
    postData = getPostData(id as string);
  }
  if (!postData) {
    return (
      <Layout>
        <Head>
          <title>Not found</title>
        </Head>
        <h1 className={utilStyles.headingXl}>Post not found</h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <pre>{postData.content}</pre>
      </article>
    </Layout>
  );
}
