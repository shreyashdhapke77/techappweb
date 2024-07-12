import styled from "styled-components";

export const Box = styled.div`
  padding: 2.5% 5%;
  background: #102020;
  // position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    // padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FullRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`;

export const FullColumn = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-left: 0px;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: wavy;
  height: 35px;

  &:hover {
    color: white;
    font-size: 19px;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const BottomText = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 0px;
`;
