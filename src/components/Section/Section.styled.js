import styled from 'styled-components';

export const Container = styled.section`
  h1,
  h2 {
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
  }
  h1 {
    font-size: 30px;
  }
  padding: 10px 10px 0;
  position: relative;

  line-height: 1.3;
  background-color: #cfdae5;

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding: 15px 34px 0;
    h1,
    h2 {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding: 30px 65px 0;
    h1,
    h2 {
      margin-bottom: 20px;
    }
  }
`;
