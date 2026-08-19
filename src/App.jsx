
const App = () => {

  const name = "Eduardo";
  let idade = 18;
  const cidade = "São Paulo";
  const curso = "Engenharia de Software";

  let name2 =name.toUpperCase();
  let name3 =name.toLowerCase();
  let numero1 = 10;
  let numero2 = 5;
  let soma = numero1 + numero2;
  let subtracao = numero1 - numero2;
  let multiplicacao = numero1 * numero2;
  let divisao = numero1 / numero2;
  const nota1 = 8;
  const nota2 = 4;
  const nota3 = 9;
  const media = (nota1 + nota2 + nota3) / 3;
  return (
    // FRAGMENTS

    <>
    <h1>Olá, meu nome é {name}!</h1>
    <p>Idade: {idade}</p>
    <p>Cidade: {cidade}</p>
    <p>Curso: {curso}</p>
    <p>Nome em maiúsculas: {name2}</p>
    <p>Nome em minúsculas: {name3}</p>
    <p>A soma dos números {numero1} e {numero2} é {soma}</p>
    <p>A subtração dos números {numero1} e {numero2} é {subtracao}</p>
    <p>A multiplicação dos números {numero1} e {numero2} é {multiplicacao}</p>
    <p>A divisão dos números {numero1} e {numero2} é {divisao}</p>
    <p>A média das notas {nota1}, {nota2} e {nota3} é {media}</p>
    </>

  )
}

export default App