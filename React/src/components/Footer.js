import "../components/Tela.css"
import cor from "./imagens/coracao.svg"

export default function Footer() {
  return (
  <div>
    
      <div className="Footer pt-5 fonte_login">
      <p>© 2023 Feito com <img src={cor} alt="coracao"/> pela Linos.</p>
      </div>

  </div>
  )
  }