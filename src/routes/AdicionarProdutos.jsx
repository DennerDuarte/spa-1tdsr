import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function AdicionarProdutos() {
    const navigate = useNavigate()

    const [produtos, setProdutos] = useState(ListaProdutos);

    const [novoProduto, setNovoProduto] = useState({
        id: ListaProdutos.length + 1,
        nome: "",
        desc: "",
        img: "https://picsum.photos/100/100",
        preco: "",
    });

  const adicionarProduto = () => {
    setProdutos([...produtos, { ...novoProduto, id: novoProduto.id }]);
    setNovoProduto({
      id: novoProduto.id + 1, 
      nome: "",
      desc: "",
      img: "https://picsum.photos/100/100",
      preco: "",
    });

    ListaProdutos.push(novoProduto);
    navigate("/produtos")
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovoProduto({
      ...novoProduto,
      [name]: value,
    });

  };

  return (
    <>
    <h1>Adicionando produtos</h1>

      <div>
        <form>
          <div>
            <label htmlFor="idNome">Nome:</label>
            <input
              type="text"
              id="idNome"
              name="nome"
              value={novoProduto.nome}
              onChange={handleChange}
              />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição:</label>
            <input
              type="text"
              id="idDesc"
              name="desc"
              value={novoProduto.descricao}
              onChange={handleChange}
              />
          </div>
          <div>
            <label htmlFor="idPreco">Preço:</label>
            <input
              type="text"
              id="idPreco"
              name="preco"
              value={novoProduto.preco}
              onChange={handleChange}
              />
          </div>
          <button type="button" onClick={adicionarProduto}>
            Adicionar Produto
          </button>
        </form>
    </div>
  </>
  )
}
