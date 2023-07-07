//Styles
import "../Tela.css"
import cor from "../imagens/coracao.svg"


export default function Footer() {
  return (
  <div>
    
      <div className="Footer pt-3 fonte_login alinhamento background_footer">
        <p>© 2023 Feito com <img src={cor} alt="coracao"/> pela Linos.</p>
      </div>

  </div>
  )
  }