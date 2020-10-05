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
    flex: 1;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-around;
    
    list-style-type: none;

    > hr {
      border-top: 1px solid var(--color-primary);
      margin-bottom: 30px;
      width: 60%;
      @media(max-width: 880px) {
        width: 100%;
      }
    }

    > li {
      display: flex;
      flex: 1;
      margin-right: 40px;
      margin-bottom: 20px;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;

export const Job = styled.div`
  display: flex;
  flex: 1;

  @media(max-width: 880px) {
    flex-direction: column;
  }

  width: 100%;

  > img {
    padding: 4px;
    width: 270px;

    @media(max-width: 880px) {
      width: 100%;
    }

    border: 1px solid var(--color-primary);
    transition: opacity 0.4s;
    opacity: 1;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  div.info {
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 25px;

    @media(max-width: 880px) {
      padding: 20px 10px;
    }

    > h1 {
      font-family: 'Ubuntu Condensed';
      color: var(--color-white);
      margin-bottom: 30px;
    }

    > span {
      margin-bottom: 15px;
    }
    
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      
      max-width: 250px;
      width: 100%;
      margin: 10px auto;
      padding: 10px;
      background-color: var(--color-white);
      border-radius: 4px;
      font-size: 16px;
      color: var(--color-primary);
      opacity: 0.8;
      transition: opacity 0.4s;

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;

export const JobInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;

  > h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin-bottom: 30px;
  }

  > img {
    padding: 4px;
    width: 400px;
    border: 1px solid var(--color-primary);
    
  }

  div.info {
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 5px;

    > span {
      margin-bottom: 15px;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      
      max-width: 250px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px;
      background-color: var(--color-white);
      border-radius: 4px;
      font-size: 16px;
      color: var(--color-primary);
      opacity: 0.8;
      transition: opacity 0.4s;

      svg {
        margin-right: 10px;
        fill: var(--color-primary);
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;

export const Navegation = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  width: 100%;

  > a {
    display: flex;
    align-items: center;

    > svg {
      fill: var(--color-yellow);
    }
  }
`;