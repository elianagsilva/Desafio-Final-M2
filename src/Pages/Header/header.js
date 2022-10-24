import React from "react";
import * as S from "./StyleHeader";

export default function Header() {
  return (
    <S.ConteinerNav>
      <S.NavList>
        <S.DetailList>
          <S.ListMember to="/">HOME</S.ListMember>
        </S.DetailList>
        <S.DetailList>
          <S.ListMember to="/about">SOBRE</S.ListMember>
        </S.DetailList>
        <S.DetailList>
          <S.ListMember to="/works">PROJETOS</S.ListMember>
        </S.DetailList>
        <S.DetailList>
          <S.ListMember to="/">ONU</S.ListMember>
        </S.DetailList>
      </S.NavList>
    </S.ConteinerNav>
  );
}
// Migramos as rotas para o app.js
// criamos os componentes 'about' e 'projects'
// importamos os novos componentes no app js e colocamos o route path.
// adicionamos o path (/exemplo) nos links da header
// lembra de alterar a cor da fonte de 'projetos' e 'sobre' estão todas brancas e no globalstyle vc passou 'white'
// lembra de excluir os exports da folha de estilo da header
// infobox é uma div fantasma
//
