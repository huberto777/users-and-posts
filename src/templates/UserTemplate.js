import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  margin: 0 auto;
`;

const Tr = styled.tr`
  height: 35px;
  background-color: ${({ theme }) => theme.add};
`;

const Th = styled.th`
  padding-right: 5px;
  padding-left: 5px;
`;

const UserTemplate = ({ children, users }) => (
  <Table>
    <thead>
      {users.length === 0 ? (
        <Tr>
          <Th>no users yet</Th>
        </Tr>
      ) : (
        <Tr>
          <Th>nr</Th>
          <Th>name</Th>
          <Th>surname</Th>
          <Th>email</Th>
          <Th>view</Th>
          <Th>edit</Th>
          <Th>del</Th>
        </Tr>
      )}
    </thead>
    <tbody>{children}</tbody>
  </Table>
);

export default UserTemplate;
