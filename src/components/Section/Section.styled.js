import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
  }
  padding: 0 10px 10px;
  position: relative;

  line-height: 1.3;
  background-color: #cfdae5;

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 700px;
    padding: 0 34px 15px;
    h2 {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 1280px) {
    // max-width: 1150px;
    padding: 0 65px 30px;
    h2 {
      margin-bottom: 5px;
    }
  }
`;
