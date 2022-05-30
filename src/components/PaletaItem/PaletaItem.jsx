import "./PaletaItem.css"
import React from 'react'

function PaletaItem(props){

    const {adicionarItem, 
        removerItem,
        quantidadeSelecionada,
        index,
        paleta} = props


    const badgeCounter = (canRender, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT, os dois precisam ser TRUE */}
                {Boolean(canRender) && <span className="PaletaListaItem__badge">{quantidadeSelecionada}</span>}
            </>
            )
    }

    const removeButton = (canRender, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT */}
                {Boolean(canRender) && 
                    <button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>}
            </>
            )
        }

    return(
        <div className="PaletaListaItem">
            <div>
                {badgeCounter(quantidadeSelecionada, index)}
                <div className="PaletaListaItem__titulo">
                    {paleta.titulo}
                </div>
                <div className="PaletaListaItem__preco">R$ {paleta.preco}</div>
                    <div className="PaletaListaItem__descricao">
                        {paleta.descricao}
                    </div>
                    <div className="PaletaListaItem__acoes Acoes">
                        {/* RENDERIZAÇÃO CONDICIONAL DE ESTILO */}
                        <button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} 
                            onClick={() => adicionarItem(index)} //Como não vai ser invocada diretamente (precisa ser ativada pelo botão), precisa usar a função call-back
                        >
                        adicionar
                        </button>
                        {removeButton(quantidadeSelecionada, index) }
                    </div>
            </div>
            <img
                className="PaletaListaItem__foto"
                src={paleta.foto}
                alt={`Paleta de ${paleta.sabor}`}
            />
        </div>      
    )
}

export default PaletaItem