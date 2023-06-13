import React, { useEffect,  } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

import warning from "../../Assets/warning.svg";

import Footer from "../../Components/Footer";
import Content from "../../Components/Content";
import HomeComponent from "../../Components/Home";

import * as S from '../../Components/styles/styles';
import * as SS from './styles';

export default function RecomendacaoFacial() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(true)
  })

  return (
    <HomeComponent>
      {/* central content */}
      <Content>
        <S.Row>
          <S.Title>Agora iremos precisar de fazer o reconhecimento facial.</S.Title>
        </S.Row>
        <S.Row>
          <SS.Warning>
            <SS.Img src={warning} alt="warning" />

            <div>
              Importante
            </div>
          </SS.Warning>
        </S.Row>
        <S.Row>
          <S.Span>
            <ol>
              <li>Posicione seu rosto dentro da marcação.</li>
              <li>Esteja em um lugar com boa iluminação.</li>
              <li>Caso use óculos, retire por favor!</li>
            </ol>
          </S.Span>
        </S.Row>
      </Content>

      {/* footer content */}
      <Footer>
        <S.Row>
          <S.Column>
            <S.ButtonPrimary onClick={() => navigate("/agendamento/reconhecimento-facial")}>Estou pronto(a)</S.ButtonPrimary>
          </S.Column>
        </S.Row>
      </Footer>
    </HomeComponent>
  )
}