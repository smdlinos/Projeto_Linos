import Form from 'react-bootstrap/Form';

function genero() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
            <h3>Gênero</h3>
          <Form.Check
            inline
            label="Masculino"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Feminino"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Outro"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default genero;