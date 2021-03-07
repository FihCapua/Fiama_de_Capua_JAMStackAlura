import React from 'react';
import { Button } from '../../commons/Button';
import TextField, { TextArea } from '../../commons/forms/TextField';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
    emailError: 'Por favor, insira um e-mail válido',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.name.length === 0
    || userInfo.email.length === 0
    || userInfo.message.length === 0;

  function emailIsInvalid() {
    return userInfo.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <form
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: '5px',
      }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <TextField
          tag="input"
          type="text"
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          tag="input"
          type="email"
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        { emailIsInvalid() && (
        <Text
          variant="smallestParagraph"
          tag="p"
          color="primary.main.contrastText"
        >
          Por favor, insira um e-mail válido
        </Text>
        ) }
      </div>
      <div>
        <TextArea
          tag="textarea"
          type="text"
          placeholder="Mensagem"
          name="message"
          value={userInfo.message}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="button.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Envie sua mensagem
      </Button>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
        height="40px"
      >
        <Box
          borderRadius="8px"
          boxShadow="18px 4px 24px #070713"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '45px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}