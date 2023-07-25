import styled from '@emotion/styled';

const List = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  list-style: none;
`;

const Item = styled.li`
  display: flex;
  gap: 8px;

  text-transform: capitalize;
`;

export { List, Item };
