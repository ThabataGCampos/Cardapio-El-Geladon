import React, {useState} from 'react' // importando o Hook useState 
import "./PaletaLista.css"
import { paletas } from "../../mocks/paletas"
import PaletaItem from 'components/PaletaItem/PaletaItem'

console.log("paletas", paletas)

function PaletaLista(){

    // manipular o state via HOOK useState
    const [paletaSelecionadas, setPaletaSelecionadas ] = useState({}) // Hook sempre deve ser colocado dentro da raiz

    // usestate sempre vai devolver: variável e método, nesta ordem (paletaSelecionadas, setPaletaSelecionadas)
    // variável que guarda o valor do meu state
    // método que atualiza o meu state 
    // valor inicial dessa variável (dentro dos parênteses do useState()) 

    function adicionarItem(index){  //Badge, o contador de adicionar
        const initialValue = Number(paletaSelecionadas[index] || 0) 
        // o operador "||" retorna o valor indicado (0), caso a primeira condição seja falsa, ou seja, se não encontrar nenhum valor no index da paleta clicada 
        const paleta = {
            [index]: initialValue + 1
        }
        // Spread operator = espalhar => ...
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    function removerItem(index){ //Badge, o contador de subtrair
        const initialValue = Number(paletaSelecionadas[index] || 0) 
        const paleta = {
            [index]: initialValue - 1
        }
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    return(
        <div className="PaletaLista"> 
        {/* MAP => iterando pela nossa lista (array) e renderizando cada componente dessa lista na tela  */}
        {paletas.map((paleta, index)=> {
            return (
                <PaletaItem key={index} 
                    adicionarItem={adicionarItem} 
                    removerItem={removerItem}
                    quantidadeSelecionada={paletaSelecionadas[index]}
                    index={index}
                    paleta={paleta}
                />
        )})}
        </div>
    )
}

export default PaletaLista