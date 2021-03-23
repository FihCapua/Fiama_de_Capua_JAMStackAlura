import React from 'react';
import { ContactWrapper } from './styles/ContactWrapper';
import { Button } from '../Button';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

// eslint-disable-next-line import/no-cycle

export default function Contact() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ContactWrapper>
      <ContactWrapper.Title>
        Vamos bater um papo?
      </ContactWrapper.Title>
      <ContactWrapper.Text>
        Vamos criar juntos uma solução para o seu projeto,
        <br />
        de acordo com a sua necessidade?
        Bora lá!
      </ContactWrapper.Text>

      <Button
        onClick={() => websitePageContext.toggleRegisterModal()}
      >
        Clique Aqui!
      </Button>
    </ContactWrapper>
  );
}
