import Layout from '../components/layout';
import Head from 'next/head';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import axios from 'axios';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  min-width: 500px;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  line-height: 1.5;
  border: 1px solid #ccc;
`;

const TitleInput = styled.input`
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #ccc;
`;

export default function AddPost() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const title = form.elements.title.value;
    const content = form.elements.content.value;
    const date = new Date().toISOString();
    const id = Math.random().toString();
    const post = { id, date, title, content };
    const result = await axios.post('/api/posts', post);
    form.reset();
    console.log(globalThis.posts);
  };

  return (
    <Layout>
      <Head>
        <title>Add Post</title>
      </Head>
      <h1>Add Post</h1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <label>Title</label>
          <br />
          <TitleInput name="title" title="title" type="text" required />
        </FormRow>

        <FormRow>
          <label>Content</label>
          <br />

          <TextArea
            rows={5}
            name="content"
            placeholder="Content here"
            required
          />
        </FormRow>
        <motion.button
          type="submit"
          style={{
            borderRadius: 10,
            backgroundColor: '#fff',
            padding: 10,
            cursor: 'pointer',
          }}
          whileHover={{
            position: 'relative',
            zIndex: 1,
            scale: [1, 1.4, 1.2],
            rotate: [0, 15, -12, 0],
            transition: {
              duration: 0.25,
            },
          }}
          whileTap={{ scale: 1 }}
        >
          Submit
        </motion.button>
      </Form>
    </Layout>
  );
}
