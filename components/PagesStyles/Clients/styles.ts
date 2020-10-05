import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0;
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style-type: none;

    > li {
      margin-right: 40px;
      margin-bottom: 20px;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;
