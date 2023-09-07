import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"



export default function EditarProdutos() {

  document.title = "Editar Produtos"

  const {id} = useParams();

  const produtoFiltrado = ListaProdutos.filter( (item) => item.id === parseInt(id));

  return (
    <>
    <h1>EditarProdutos</h1>
    <p>Produto Selecionado : {id} </p>
    <p>Nome do produto: {produtoFiltrado[0].nome}</p>
    <img src={produtoFiltrado[0].img} alt={produtoFiltrado[0].nome} />
    </>
  )
}
