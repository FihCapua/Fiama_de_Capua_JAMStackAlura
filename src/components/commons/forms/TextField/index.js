import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const TextAreaWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 78%;
  padding: 12px 16px;
  outline: 0;
  border: 1px solid #4d4d4d;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-left: 30px;
`;

const TextAreaMsg = styled.textarea`
  width: 73%;
  height: 100px;
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 2px;
  margin-left: 38px;
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

TextAreaMsg.defaultProps = {
  tag: 'textarea',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <InputWrapper>
      <Input
        type="input"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

export function TextArea({
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <TextAreaWrapper>
      <TextAreaMsg
        type="textarea"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </TextAreaWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
