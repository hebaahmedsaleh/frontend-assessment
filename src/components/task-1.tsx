import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../constants';

interface Post {
  title: string;
  id: number;
  body: string;
  userId: string;
}

interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }
}

interface Company {
  bs: string,
  name: string;
  catchPhrase: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email:string;
  address : Address;
  phone: string;
  website: string;
  company: Company;
}

type ResultType = Post & { authorName: string };

type Props = {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  // eslint-enable-next-line no-undef
};

const RenderStateContainer: FC<Props> = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </div>
  );
};

const fetchData = async () => {
  const response = await Promise.all([
    fetch(`${API_URL}/posts`),
    fetch(`${API_URL}/users`)
  ])

  if (! (response[0].ok && response[1].ok)) {
    throw Error('error in fetching data. ');
  }

  const postResult = await response.find(res => res.url.includes('posts'));
  const userResult = await response.find(res => res.url.includes('users'));

  const postsJson = await postResult?.json();
  const usersJson = await userResult?.json();
  
  let usersObjects: { [key: string]: User } = {};
  usersJson.forEach((elem: User) => {
    usersObjects = { ...usersObjects, [elem.id] : elem }
  });

  const result = postsJson.map((post: Post) => ({ ...post, authorName: usersObjects[post.userId]?.name }));

  return result;
};

export function Task1() {
  const [posts, setposts] = useState<ResultType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error>();

  useEffect(() => {
    fetchData()
      .then((result: Array<ResultType>) =>setposts(result))
      .catch((error: Error) => setHasError(error))
      .finally(() => setIsLoading(false))
  }, []);

  if (isLoading)
    return (
      <RenderStateContainer>
        <h1> Loading...</h1>
      </RenderStateContainer>
    );

  if (!isLoading && !posts.length && !hasError)
    return (
      <RenderStateContainer>
        <h1> There is no posts yet.</h1>
      </RenderStateContainer>
    );

  if (hasError)
    return (
      <RenderStateContainer>
        <h1> There is an error in getting data.</h1>
      </RenderStateContainer>
    );

  return (
    <div>
        <h2>
          <Link to='/task-2'>Task-2</Link>
          </h2>
            
      <h1>Task 1:</h1>
      {posts.map((post: ResultType) => (
        <div key={post.id}>
          
          <h1 style={{ marginBlock: 0 }}>Title: {post.title}</h1>
          <h2 style={{ marginTop: 0 }}>Description: {post.body}</h2>
          <h2 style={{ marginTop: 0 }}> AuthorName: {post.authorName}</h2>

          <hr />
        </div>
      ))}
    </div>
  );
}
