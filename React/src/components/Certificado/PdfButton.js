import React from 'react';
import Certificado from "../imagens/CertificadoQuests.jpg";

class PdfButton extends React.Component {
  getBase64Image = (imgUrl, callback) => {
    fetch(imgUrl)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => callback(reader.result);
        reader.readAsDataURL(blob);
      });
  }

  generatePdf = () => {
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
    });
  }

  render() {
    return (
      <button onClick={this.generatePdf} className='botao botao_pdf p-2 pt-3'>Gerar PDF</button>
    );
  }
}

export default PdfButton;