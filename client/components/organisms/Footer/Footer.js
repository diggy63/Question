import React from 'react';

import Footer from 'react-bulma-companion/lib/Footer';
import Container from 'react-bulma-companion/lib/Container';
import Content from 'react-bulma-companion/lib/Content';

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Container>
        <Content className="has-text-centered">
          <p>
            {`Please tell me this will change`}
          </p>
        </Content>
      </Container>
    </Footer>
  );
}
