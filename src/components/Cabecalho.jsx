export default function Cabecalho(props) {
  // props é somente leitura, não dá para alterar aqui ( mas dá com a utilização de estado).
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}