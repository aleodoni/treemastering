import styled from 'styled-components';

const flexBox = `
  display: flex;
  display: -webkit-flex;
`

export const Container = styled.div`
  display: flex;
  display: -webkit-flex;

  height: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  display: -webkit-flex;

  flex-direction: column; 
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;

  height: 100vh;
  width: 100%;

  div.main {
    display: flex;
    display: -webkit-flex;

    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */

    margin: 0 auto;
    padding: 0 20px;
    max-width: var(--max-width);
    width: 100%;
    height: 100%;
    /* background: url('/images/header_bg.png'); 
    background-size: cover; */

    div.section {
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;

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
  display: -webkit-flex;

  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;

  flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;

  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;

  .socialMedia {
    display: flex;
    display: -webkit-flex;

    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;

    justify-content: flex-end;
    -webkit-box-pack: end;
    -ms-flex-pack: end;

    @media(max-width: 880px) {
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
    }

    flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;

    max-width: var(--max-width);

    width: 100%;
    height: 54px;
    padding: 20px 0;

    svg {
      color: var(--color-gray);
      margin-left: 20px;
    }
  }

  .menu {
    display: flex;
    display: -webkit-flex;

    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;

    justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;

    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;

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
      display: -webkit-flex;

      align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;

      justify-content: space-between;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;

      max-width: var(--max-width);
      height: 100%;
      width: 100%;
      padding: 0 20px;

      > img {
        transition: opacity 0.4s;

        &:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }

      > ul {
        display: flex;
        display: -webkit-flex;

        flex-wrap: initial;
        -ms-flex-wrap: initial;

        align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;

        justify-content: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;

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

      @media(max-width: 880px) {
        > ul {
          display: none;

          > li {
            display: none;
          }
        }

      }
    }
  }
`;

export const MenuMobile = styled.div`
  display: none;

  @media(max-width: 880px) {
    display: flex;
    display: -webkit-flex;

    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;

    align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;

    width: 92%;

    div.burguer {
      display: flex;
      display: -webkit-flex;

      align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;

      justify-content: flex-end;
      -webkit-box-pack: end;
      -ms-flex-pack: end;

      width: 100%;
      height: 30px;

      &:hover {
        cursor: pointer;
        color: var(--color-yellow);
        opacity: 1;
      }
    }

    > ul {
      list-style-type: none;
      font-size: 20px;
      width: 92%;
      

      > li {
        margin-left: 30px;
        width: 100%;
        
        > a {
          display: flex;
          display: -webkit-flex;

          align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;

          justify-content: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;

          color: var(--color-white);
          width: 100%;
          line-height: 40px;

          &:hover {
            color: var(--color-yellow);
            opacity: 1;
          }
        }
      }
    }
  }
`;