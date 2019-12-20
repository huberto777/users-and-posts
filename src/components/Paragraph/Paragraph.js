import styled from 'styled-components';

const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Paragraph;
