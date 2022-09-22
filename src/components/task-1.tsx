import { useEffect, useState, FC } from 'react';

interface photo {
  albumId: number;
  title: string;
  id: number;
  url: string;
  thumbnailUrl: string;
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
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!photos.ok) {
    throw Error(photos.statusText);
  }
  const photosJson = await photos.json();

  return photosJson;
};

export function Task1() {
  const [photos, setphotos] = useState<photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error>();

  useEffect(() => {
    fetchData()
      .then((result) => setphotos(result))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <RenderStateContainer>
        <h1> Loading...</h1>
      </RenderStateContainer>
    );

  if (!isLoading && !photos.length && !hasError)
    return (
      <RenderStateContainer>
        <h1> There is no photos yet.</h1>
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
      {photos.map((photo: photo) => (
        <div key={photo.id}>
          <h1 style={{ marginBlock: 0 }}>{photo.title}</h1>
          <h2 style={{ marginTop: 0 }}>{photo.albumId.toString()}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}
