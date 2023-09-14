import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';

export default function ExcluirProdutos() {

  //utilizando redirecionamento de ROTAS com useNavigate();
  const navigate = useNavigate();

  //Utilizando o HOOK useParams()
  const { id } = useParams();
  
  //Filtrando o produto selecionado byId
  const produto = ListaProdutos.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const handleDelete = (event)=>{
    event.preventDefault();

    let indice;
    indice = ListaProdutos.findIndex((item) => item.id === parseInt(id));    
         
    ListaProdutos.splice(indice,1);
  
    //Redirecionando após realizar a edição do produto filtrado.
    navigate("/produtos");
  }

  return (
    <>
      <div>
        <h1>ExcluirProdutos</h1>
        <div>
          <section>
            <h2>Deseja realmente excluir esse produto?</h2>
            <h3>Nome: {produto.nome}</h3>
            <h3>Descrição: {produto.desc}</h3>
            <div><img src={produto.img} alt={produto.desc}/> </div>
            <h3>Preço: {produto.preco}</h3>
          </section>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={()=> navigate("/produtos")}>Cancelar</button>
        </div>
      </div>
    </>
  )
}
