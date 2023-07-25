import styled from '@emotion/styled';

const List = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  gap: 16px;

  list-style: none;
`;

const Button = styled.button`
  padding: 8px 16px;

  font-size: 16px;
  line-height: 20px;

  border: 1px solid black;
  border-radius: 8px;
  background-color: transparent;

  transition: background-color 500ms ease-out;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
`;

export { List, Button };
