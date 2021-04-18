import React from 'react';
import user from '@testing-library/user-event';
import FormCadastro from './index';
import { render, screen } from '../../../infra/tests/testUtils';

describe('<FormCadastro />', () => {
  describe('when form fields are valid', () => {
    test('disabled button', () => {
      render(
        <FormCadastro />,
      );

      expect(screen.getByRole('button')).toBeDisabled();

      const userInput = screen.getByPlaceholderText('Nome');
      user.type(userInput, 'someuser');
      expect(userInput).toHaveValue('someuser');

      const emailInput = screen.getByPlaceholderText('E-mail');
      user.type(emailInput, 'someemail');
      expect(emailInput).toHaveValue('someemail');

      const messageInput = screen.getByPlaceholderText('Mensagem');
      user.type(messageInput, 'somemessage');
      expect(messageInput).toHaveValue('somemessage');

      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });
});
