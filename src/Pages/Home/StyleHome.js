import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffff00;
  background-image: linear-gradient(0deg, #ffff00 0%, #ff4500 100%);
`;
export const InfoBlock = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  cursor: pointer;
  filter: invert(75%);
  transition: 1s all;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Text = styled.div`
  width: 20vw;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  width: 20vw;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;
  color: white;
`;
export const Description = styled.h4`
  font-size: 1.2em;
  color: white;
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
`;
export const ImgEliana = styled.figure`
  width: 20vw;
  border-radius: 20%;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 20vw;
  height: 10h;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 50em;
  background-color: blue;
`;

export const copyright = styled.h5`
  color: white;
  font-family: "Montserrat", sans-serif;
`;
