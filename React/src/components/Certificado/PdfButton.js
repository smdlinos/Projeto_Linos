import React from 'react';
const criaCertificado = "https://smdquests.000webhostapp.com/api/reset/tabletop";

class PdfButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false // Inicialmente o botão está habilitado
    };
  }

  generatePdf = () => {
    const doc = new window.jspdf.jsPDF();
    doc.text('Hello World!', 10, 10);
    doc.save('sample.pdf');
  }

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
