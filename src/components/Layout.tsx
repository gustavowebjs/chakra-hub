import React from 'react';
import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';

export interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Navigation />
      <Container maxW="container.xl">{children}</Container>
    </div>
  );
};

export default Layout;
