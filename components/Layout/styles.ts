import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 

  height: 100vh;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */

    margin: 0 auto;
    max-width: var(--max-width);
    width: 100%;
    height: 100%;
    /* background: url('/images/header_bg.png'); 
    background-size: cover; */

    section {
      display: flex;
      flex-direction: column;

      margin: 20px 0;

      > h1 {
        font-family: 'Ubuntu Condensed';
        color: var(--color-white);
        margin: 20px 0;
      }

      b {
        color: var(--color-white);
        margin-bottom: 20px;
      }

      p {
        color: var(--color-white);
        margin-bottom: 20px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  .socialMedia {
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    max-width: var(--max-width);

    width: 100%;
    height: 54px;
    padding: 20px 0;

    > svg {
      color: var(--color-gray);
      margin-left: 20px;
    }
  }

  .menu {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background: url('/images/header_bg.png');

    width: 100%;
    height: 100%;
    padding: 20px 0; 

    > img {
      max-width: var(--max-width);
      width: 100%;
      border-radius: 5px;
      margin: 20px 0;
    }

    .logo {
      display: flex; 
      align-items: center;
      justify-content: space-between;

      max-width: var(--max-width);
      height: 100%;
      width: 100%;

      > img {
        transition: opacity 0.4s;

        &:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }

      > ul {
        display: flex;
        flex-wrap: initial;
        align-items: center;
        justify-content: center;
        list-style-type: none;

        > li {
          margin-left: 30px;
          > a {
            font-size: 16px;
            font-family: 'Ubuntu Condensed';
            color: var(--color-white);
            transition: opacity 0.4s;

            &:hover {
              color: var(--color-yellow);
              /* opacity: 1; */
            }
          }
        }


      }
    }
  }
`;
