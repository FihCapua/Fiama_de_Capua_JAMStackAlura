import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import TextField, { TextArea } from '../../commons/forms/TextField';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { ContactWrapper } from '../../commons/ContactWrapper/styles/ContactWrapper';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(true);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
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
        marginTop: '-85px',
      }}
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        const userDTO = {
          name: userInfo.name,
          email: userInfo.email,
          message: userInfo.message,
        };

        setSubmissionStatus(formStates.LOADING);
        setTimeout(() => {
          // eslint-disable-next-line no-unused-expressions
          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Não foi possível cadastrar o usuário');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log(respostaConvertidaEmObjeto);
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.log(error);
            });
        }, 3000);
      }}
    >
      <div>
        <ContactWrapper>
          <ContactWrapper.Title>
            Vamos bater um papo?
          </ContactWrapper.Title>
          <ContactWrapper.Text>
            Vamos criar juntos uma solução para o seu projeto,
            <br />
            de acordo com a sua necessidade?
            <br />
            Bora lá!
          </ContactWrapper.Text>
        </ContactWrapper>

        <TextField
          tag="input"
          type="text"
          placeholder="Nome"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />

        <TextField
          tag="input"
          type="email"
          placeholder="E-mail"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        {emailIsInvalid() && (
          <Text
            variant="smallestParagraph"
            tag="p"
            style={{
              textAlign: 'center',
              color: '#fff',
            }}
          >
            Por favor, insira um e-mail válido
          </Text>
        )}

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

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
          margin="15px 0"
          width="100%"
        >
          <Lottie
            width="50px"
            height="30px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: false, autoplay: true }}
          />
          <p
            style={{
              color: '#fff',
              fontSize: '12px',
            }}
          >
            Enviando seus dados, aguarde...
          </p>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
          margin="15px 0"
        >
          <Lottie
            width="50px"
            height="30px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <p
            style={{
              color: '#fff',
              fontSize: '12px',
            }}
          >
            Dados enviados com sucesso
          </p>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
          margin="15px 0"
        >
          <Lottie
            width="50px"
            height="30px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <p
            style={{
              color: '#fff',
              fontSize: '12px',
            }}
          >
            Erro no envio dos dados
          </p>
        </Box>
      )}

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
        height={{
          xs: '430px',
        }}
      >
        <Box
          height="600px"
          margin="0 -10px"
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
          backgroundColor="#0b092e"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
