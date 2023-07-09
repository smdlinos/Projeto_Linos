import React from 'react';
const criaCertificado = "https://smdquests.000webhostapp.com/api/reset/tabletop";
import Certificado from "../imagens/CertificadoQuests.jpg";

class PdfButton extends React.Component {
//VITAO
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false // Inicialmente o botão está habilitado
    };
  }

  //EU
  getBase64Image = (imgUrl, callback) => {
    console.log('rodouB64I')
    fetch(imgUrl)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => callback(reader.result);
        reader.readAsDataURL(blob);
      });
  }

  generatePdf = () => {
    console.log('rodouGPDF')
    // Acessando as props
    const user = this.props.user;
    const ch = this.props.ch;

    // Gerar data e hora atuais
    const now = new Date();
    const dateString1 = now.toLocaleDateString();
    const dateString2 = now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    this.getBase64Image(Certificado, (base64Img) => {
      const doc = new window.jspdf.jsPDF('landscape'); // Define a orientação como horizontal
      doc.addImage(base64Img, 'JPEG', 0, 0, 297.5, 210); // Adiciona a imagem ao PDF
      doc.text(user, 107, 74);
      doc.text(`${dateString1}`, 50, 105); // Adiciona a data e hora atuais ao PDF
      doc.text(ch, 175, 115);
      doc.text(`${dateString2}.`, 200, 130); // Adiciona a data e hora atuais ao PDF
      doc.save('CertificadoQuests.pdf');
    });
  }

  //VITAO
  resetCh = async () => {
    this.generatePdf();
    const token = localStorage.getItem('token').replace(/["]/g, '');
    fetch(criaCertificado, {
    method: 'post',
    body: JSON.stringify({
      token
    })
    }).then(function(response) {
      return response.json();
    }).then(data => {
       if(data){
        this.setState({ buttonDisabled: true }); // Desativa o botão
       } else {
        console.log('houve um erro');
       }
    }).catch(error => {
      // Lidar com erros
      console.error(error);
    });
  }




  render() {
    const { buttonDisabled } = this.state;

    return (
      <button onClick={this.resetCh} className={buttonDisabled ? 'botao botao_pdf p-2 botao_disable' : 'botao botao_pdf p-2 pt-3'} disabled={buttonDisabled}>
        Gerar PDF
      </button>
    );
  }
}

export default PdfButton;
