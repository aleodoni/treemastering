import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  > h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0;
  }

  > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -ms-flex-pack: distribute;
    justify-content: space-around;

    -ms-flex-wrap: wrap;
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
