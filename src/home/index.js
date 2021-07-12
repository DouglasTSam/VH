import { useEffect, useState } from "react";
import woman from "../assets/woman.png";
import doll from "../assets/doll.svg";
import GlobalStyle from "../style/style.js";
import { ModalRegister } from "../components/modal/modalRegister";

//Página principal, aqui foi criado dois useStates, para poder gerar as ações do modal, foram utilizado CSS e Styled Components

function Home() {
  const [isVisible, setVisibility] = useState(false);

  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const text = document.getElementsByClassName("description");
    setParagraph(text[0].outerText);
  }, []);

  function downloading() {
    alert("Baixando o edital");
  }

  return (
    <>
      <GlobalStyle />
      <hr />
      <div className="contentCenter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="topContainer">
              <section className="subscription">
                <h3>captação 2021.2</h3>
                <h1>Formas de Ingresso</h1>
                <div className="infoText">
                  <p className="description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <p className="description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
                <div className="buttonContainer">
                  <button
                    className="register"
                    id="register"
                    onClick={() => setVisibility(true)}
                  >
                    Quero fazer minha matrícula
                  </button>
                  <button
                    className="downloadEdital"
                    id="downlaodEdital"
                    onClick={downloading}
                  >
                    Baixar o edital
                  </button>
                </div>
              </section>
              <div className="woman d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div>
                  {/* 
                {/*adicionado o grid de bootstrap para fazer a responsividade, o display none, foi usado para que a imagem só seja visível para telas grande e extras grandes*/}
                  <img src={woman} alt="woman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <section className="footer col-md-12" id="footer">
              <div
                className="imageFooter d-none d-sm-none d-md-none d-lg-block d-xl-block"
                id="imageFooter"
              >
                <img className="doll" src={doll} alt="studant"></img>
              </div>
              <div className="listContainer">
                <h1>Cursos Graduação</h1>
                <div className="listDivider">
                  <div className="leftList">
                    <ul className="gridContainer">
                      <li className="gridItem">Administração</li>
                      <li className="gridItem">Ciência da computação</li>
                      <li className="gridItem">Ciências Contábeis</li>
                      <li className="gridItem">Direito</li>
                      <li className="gridItem">Engenharia Civil</li>
                      <li className="gridItem">Engenharia de Produção</li>
                      <li className="gridItem">Pedagogia</li>
                    </ul>
                  </div>
                  <div className="rightList">
                    <ul className="gridContainer">
                      <li className="gridItem">
                        Análise e Desenvolvimento de Sistemas
                      </li>
                      <li className="gridItem">Gestão Comercial</li>
                      <li className="gridItem">Gestão de Recursos Humanos</li>
                      <li className="gridItem">Gestão Financeira</li>
                      <li className="gridItem">Logística</li>
                      <li className="gridItem">Processos Gerenciais</li>
                      <li className="gridItem">Redes de Computadores</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*foi usado o ternário para poder fazer a validação da ação do botão para o modal */}
      {isVisible ? (
        <ModalRegister
          isVisible={isVisible}
          setVisibility={setVisibility}
          paragraph={paragraph}
        />
      ) : null}
    </>
  );
}

export default Home;
