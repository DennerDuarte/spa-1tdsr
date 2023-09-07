import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos"
import { useState } from "react";



export default function EditarProdutos() {

  document.title = "Editar Produtos"

  const {id} = useParams();

  const produtoFiltrado = ListaProdutos.filter( (item) => item.id === parseInt(id)) [0];

  const [produto, setProduto ] = useState({
    id: produtoFiltrado.id,
    nome: produtoFiltrado.nome,
    desc: produtoFiltrado.desc,
    img: produtoFiltrado.img,
    preco: produtoFiltrado.preco
  });

  const handleChange = (event) =>{

      const {name, value} = event.target;
      setProduto({...produto, [name]: value});

  } 

  return (
    <>
    <h1>EditarProdutos</h1>
    <div>
      <form>
        <fieldset>
          <legend>Produto Selecionado</legend>
          <div>
            <label htmlFor="idNome">Nome</label>
            <input type="text" name="nome" id="idNome" onChange={handleChange} value={produto.nome}/>
          </div>
          <div>
            <label htmlFor="idDesc">Descrição</label>
            <input type="text" name="desc" id="idDesc" onChange={handleChange} value={produto.desc}/>
          </div>
          <div>
            <label htmlFor="idImg">Imagem</label>
            <input type="url" name="img" id="idImg" onChange={handleChange} value={produto.img}/>
          </div>
          <div>
            <label htmlFor="idPreco">Preço</label>
            <input type="text" name="preco" id="idPreco" onChange={handleChange} value={produto.preco}/>
          </div>
          <div>
            <button>Editar</button>
          </div>
        </fieldset>
      </form>
    </div>
    </>
  )
}
