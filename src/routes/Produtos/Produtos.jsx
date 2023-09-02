import { Link } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";

export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {
                listaProdutos.map((prod) =>(
                    <div key={prod.id}>
                        <Link to={`/editar`}>

                        </Link>
                    </div>
                ))}
        </main>
    )

}