import React from 'react';

import { Container, Spinner } from './styles';

import LoadingIcon from '../../assets/loading.svg';

const Loading = () => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" />
  </Container>
);

export default Loading;
