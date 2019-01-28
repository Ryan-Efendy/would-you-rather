import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const Error = () => (
  <Container text style={{ paddingTop: 20 }}>
    <Message negative>
      <Message.Header>error, path does not exist!</Message.Header>
    </Message>
  </Container>
);

export default Error;
