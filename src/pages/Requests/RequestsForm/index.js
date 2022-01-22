import './styles.css'
import MaskedInput from 'react-text-mask'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Header from '../../../components/Header/Header'
import schema from './schema';
import { Link } from 'react-router-dom'
import entregaImg from '../../../images/animacao-entrega.jpg'
import { useCart } from '../../../services/hooks/useCart'

function RequestsForm() {
  const { setDados } = useCart()
  function onSubmit(values) {
    document.getElementById('requests-button').style.display = "inline-block"
    setDados(values)
  }
  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('Rua', data.logradouro);
        setFieldValue('Quadra', data.logradouro);
        setFieldValue('Bairro', data.bairro);
      });
  }
  return (
    <div className="App">
      <Header />
      <h1>Insira as Informações da entrega</h1>
      <Formik
        validationSchema={schema}
        validateOnMount
        onSubmit={onSubmit}
        initialValues={{
          Name: '',
          Phone: '',
          Numero: '',
          complemento: '',
          Bairro: '',
          Rua: '',
          Quadra: '',
          Complemento: ''
        }}

        render={({ setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label className='label-requestForm'>Nome</label>
              <Field name="Name" className='input-adress' type="text" />
              <p className='error-message'><ErrorMessage name="Name" /></p>
            </div>

            <label className='label-requestForm'>Telefone:</label>
            <MaskedInput
              name="Phone"
              guide={[false]}
              className='input-cep-number'
              autoComplete='off'
              mask={[
                "(",
                /[0-9]/,
                /[0-9]/,
                ")",
                " ",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
              ]} />


            <label className='label-requestForm'>Cep</label>
            <MaskedInput
              guide={[false]}
              className='input-cep-number'
              autoComplete='off'
              mask={[
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/
              ]}
              onBlur={(ev) => onBlurCep(ev, setFieldValue)} />

            <div className="form-control-group">
              <label className='label-requestForm'>Bairro</label>
              <Field name="Bairro" className='input-adress' type="text" />
              <p className='error-message'><ErrorMessage name="Bairro" /></p>
            </div>

            <div className="form-control-group">
              <label className='label-requestForm'>Rua</label>
              <Field name="Rua" className='input-adress' type="text" />
              <p className='error-message'><ErrorMessage name="Rua" /></p>
            </div>
            <div className="form-control-group">
              <label className='label-requestForm'>Quadra</label>
              <Field name="Quadra" className='input-adress' type="text" />
              <p className='error-message'><ErrorMessage name="Quadra" /></p>
            </div>
            <div className="form-control-group">
              <label className='label-requestForm'>Número</label>
              <Field name="Numero" className='input-cep-number' type="text" />
              <p className='error-message'><ErrorMessage name="Numero" /></p>
            </div>
            <div className='buttons' > <button className="form-button" type="submit">Continuar</button>
              <Link to='/Requests' ><button id="requests-button" className="requests-button" type="button">Meus Pedidos</button></Link>
            </div>

          </Form>
        )}
      />

      <img className='entregaImg' src={entregaImg} alt=""></img>


    </div>
  );
}


export default RequestsForm