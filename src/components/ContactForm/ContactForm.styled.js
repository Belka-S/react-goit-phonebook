import styled from 'styled-components';

import { Form as FormicForm, Field as FormicField } from 'formik';

export const Form = styled(FormicForm)`
  display: inline-flex;
  flex-direction: column;
  padding: 10px 200px 10px 10px;

  border: 1px solid black;
`;

export const Field = styled(FormicField)`
  display: block;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;
