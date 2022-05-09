import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';

import { getPostData } from '../../lib/posts';

import { useRouter } from 'next/router';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const LightText = styled.div`
  color: #666;
`;

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
        <Heading>Post not found</Heading>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Heading>{postData.title}</Heading>
        <LightText>
          <Date dateString={postData.date} />
        </LightText>
        <pre>{postData.content}</pre>
      </article>
    </Layout>
  );
}
