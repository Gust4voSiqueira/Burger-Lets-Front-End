import * as Yup from 'yup';

export default Yup.object().shape({
  Name: Yup
  .string()
  .min(2).required("Por favor, insira seu nome"),
  Bairro: Yup
  .string()
  .required("Por favor, insira seu Bairro"),
  Rua: Yup
  .string()
  .required("Por favor, insira sua Rua"),
  Numero: Yup
  .string()
  .required("Por favor, insira o número da sua casa"),
});