import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Duvida from "../imagens/duvida.svg";


function Popover_() {
  return (
    <>
      {['left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body>
                <p className='font_popover'>
                Atividade do <strong>grupo VII</strong> (Outras atividades) com base  no <strong>Regulamento de Programa de Atividades Complementares.</strong> 
                </p>
              
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="link" className='botao_popover'><img src={Duvida} alt="pop_over" className=""/> </Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Popover_;