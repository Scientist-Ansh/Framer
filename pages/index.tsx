import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getAllPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';

const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Heading = styled.h2`
font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LightText = styled.small`
  color: #666;
`;

const ListItem = styled(motion.li)`
  text-decoration: none;
  margin-bottom: 20px;

  position: relative;
  z-index: 1;
  background: white;
`;

export default function Home() {
  const router = useRouter();

  const { data: allPostsData, error } = useSWR<
    { id: string; date: string; title: String }[]
  >('/api/posts', fetcher);
  if (error) {
    return <div>Something went Wrong...</div>;
  }
  if (!allPostsData) {
    return <div>Loading...</div>;
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <Heading>Blogs</Heading>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem
              onClick={() => router.push(`/posts/${id}`)}
              key={id}
              whileHover={{
                cursor: 'pointer',
                border: '1px solid blue',
                borderRadius: '10px',
                scale: 1.2,
                padding: '5px 10px',
                translateX: 0,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <span>{title}</span>

              <br />
              <LightText>
                <Date dateString={date} />
              </LightText>
            </ListItem>
          ))}
        </List>
        <Link href="/addPost">
          <a style={{ marginTop: '30px', display: 'inline-block' }}>
            Add New Post
          </a>
        </Link>
      </Section>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getAllPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
