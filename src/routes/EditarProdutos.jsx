import { useParams } from "react-router-dom"

export default function EditarProdutos() {

  document.title = "Editar Produtos"

  const {id} = useParams();

  return (
    <>
    <h1>EditarProdutos</h1>
    <p>Produto Selecionado : {id} </p>
    </>
  )
}
