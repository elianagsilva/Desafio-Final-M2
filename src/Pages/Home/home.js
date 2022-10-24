import React from "react";
import * as S from "./StyleHome";
import Me from "../../Assets/personal.jpeg";

export default function Home() {
  return (
    <S.Container>
      <S.InfoBlock>
        <S.Text>
          <S.Title>Eliana G. Silva</S.Title>
          <S.ImgEliana>
            <S.Picture src={Me} alt="Eliana" />
          </S.ImgEliana>
          <S.Description> Front-end Developer Student</S.Description>
        </S.Text>
      </S.InfoBlock>
    </S.Container>
  );
}
