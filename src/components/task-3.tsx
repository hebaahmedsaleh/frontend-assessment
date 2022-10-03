import { useEffect, useState, FC } from 'react';
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom';

import usePagination from 'use-pagination';

import { Card } from './card';
import 'components/pagination.css';
import styles from 'components/main.module.css';

import Loading from './loading';
import Header from './header';
import NavBar from './nav-bar';
import SideBar from './side-bar';
import Content from './content';

import { API_URL, ITEMS_PER_PAGE, TOTAL_NO_PHOTOS } from '../constants';

import { Photo, Props } from 'types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 10vw;
  background-color: #e2e2ea;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RenderStateContainer: FC<Props> = ({ children }) => {
  return <div className={styles.loading}>{children}</div>;
};

const fetchData = async (page: number) => {
  const photos = await fetch(`${API_URL}/photos?_page=${page}&_limit=${ITEMS_PER_PAGE}`);
  if (!photos.ok) {
    throw Error(photos.statusText);
  }
  const photosJson = await photos.json();

  return photosJson;
};

export function Task3() {
  const [photos, setphotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error>();

  const { goTo, currentPage } = usePagination();

  /* - Make http requests to https://jsonplaceholder.typicode.com/posts & 
      https://jsonplaceholder.typicode.com/users

      handle Error and Loading States 
    */
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
      <Header />
      <NavBar />

      <Container>
        <Content />
        <SideBar />
      </Container>
    </>
  );
}
