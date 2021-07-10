import {Container, Background} from './styles'

export const ModalRegister = (props) => {
  
  const {isVisible, setVisibility,paragraph} = props;
  
  //componente criado para poder dar a ação de fechar o modal do botão de cadastro somente, quando clicar no botão "X", 
  //passado também o valor que é encontrado na tag p para a variável paragraph.
  
  return (
    <Background>
      <Container>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >Cadastro</h5>
              <button type="button"  className="close text-primary" data-dismiss="modal" aria-label="Close" onClick={() => setVisibility(!isVisible)}>X</button>
            </div>
            <div className="modal-body">
              <p>{paragraph}</p>
              <p>{paragraph}</p>
            </div>
          </div>  
        </div>
      </Container>
    </Background>
  )
}