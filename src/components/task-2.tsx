import { useEffect, useState, FC } from 'react';
import Pagination from 'rc-pagination';

import usePagination from 'use-pagination';

import { Card } from './card';
import 'components/pagination.css';
import styles from 'components/main.module.css';

import Loading from './loading';
import { Link } from 'react-router-dom';

import { ITEMS_PER_PAGE, TOTAL_NO_PHOTOS } from '../constants';

interface photo {
  albumId: number;
  title: string;
  id: number;
  url: string;
  thumbnailUrl: string;
}

type Props = {
  children: JSX.Element;
};

const RenderStateContainer: FC<Props> = ({ children }) => {
  return <div className={styles.loading}>{children}</div>;
};

const fetchData = async (page: number) => {
  const photos = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${ITEMS_PER_PAGE}`,
  );
  if (!photos.ok) {
    throw Error(photos.statusText);
  }
  const photosJson = await photos.json();

  return photosJson;
};

export function Task2() {
  const [photos, setphotos] = useState<photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error>();

  const { goTo, currentPage } = usePagination();

  useEffect(() => {
    setIsLoading(true);

    fetchData(currentPage)
      .then((result) => setphotos(result))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handlePageChange = (selected: number) => goTo(selected);

  if (isLoading)
    return (
      <RenderStateContainer>
        <Loading />
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
    <>
      <h2>
        <Link to='/task-1'>Task-1</Link>
      </h2>

      <div className={styles.main} aria-busy={false}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} data-testid='main'>
          {photos.map((photo) => {
            return <Card key={photo.id} {...photo} />;
          })}
        </div>

        <Pagination
          onChange={handlePageChange}
          pageSize={ITEMS_PER_PAGE}
          total={TOTAL_NO_PHOTOS}
          hideOnSinglePage
          showPrevNextJumpers
          current={currentPage}
        />
      </div>
    </>
  );
}
