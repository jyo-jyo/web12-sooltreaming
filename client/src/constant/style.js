import { css } from 'styled-components';

export const COLOR = {
  primary1: '#BED297',
  primary2: '#EBEFD6',
  primary3: '#9DB589',
  error: '#FF8988',
  error2: '#FFD4D3',
  error3: '#CD6766',
  titleActive: '#006737',
  body: '#5C5C5C',
  lable: '#888888',
  placeholder: '#888888',
  line: '#D9DBC8',
  background: '#FCFFFC',
  white: '#FFFFFF',
  offWhite: '#F6F6F6',
  point: '#A06000',
  black: '#000000',
};

export const INPUT_STYLE = css`
  padding: 0;
  margin: 0;
  border: 1px solid ${COLOR.line};
  outline: none;
  color: #222222;
  &:focus {
    border: 1px solid ${COLOR.primary1};
  }
`;

export const BTN_STYLE = css`
  padding: 0;
  margin: 0;
  background-color: ${COLOR.primary1};
  color: ${COLOR.white};
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.primary3};
  }
  &:focus {
    border: 2px solid ${COLOR.primary2};
  }
  &:disabled {
    background-color: ${COLOR.primary2};
  }
`;

export const CANCLE_BTN_STYLE = css`
  padding: 0;
  margin: 0;
  background-color: ${COLOR.error};
  color: ${COLOR.white};
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.error3};
  }
  &:focus {
    border: 2px solid ${COLOR.error2};
  }
  &:disabled {
    background-color: ${COLOR.error2};
  }
`;
