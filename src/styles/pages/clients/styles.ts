import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  > h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0 30px;
  }

  > ul {
    list-style-type: none;

    > li {
      margin-left: 20px;
      margin-bottom: 20px;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;
