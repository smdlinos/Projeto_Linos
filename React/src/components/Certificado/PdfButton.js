import React from 'react';

class PdfButton extends React.Component {
  generatePdf = () => {
    const doc = new window.jspdf.jsPDF();
    doc.text('Hello World!', 10, 10);
    doc.save('sample.pdf');
  }

  render() {
    return (
      <button onClick={this.generatePdf}>Gerar PDF</button>
    );
  }
}

export default PdfButton;