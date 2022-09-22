import { useEffect, useState, FC } from 'react';

interface Post {
  title: string;
  id: number;
  body: string;
  authorId: string;
}

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
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!posts.ok) {
    throw Error(posts.statusText);
  }
  const postsJson = await posts.json();

  return postsJson;
};

export function Task1() {
  const [posts, setposts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error>();

  useEffect(() => {
    fetchData()
      .then((result) => setposts(result))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false));
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
      <h1>Task 1:</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h1 style={{ marginBlock: 0 }}>{post.title}</h1>
          <h2 style={{ marginTop: 0 }}>{post.body}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}
