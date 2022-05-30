import "./Home.css"
import PaletaLista from "components/PaletaLista/PaletaLista"
import Navbar from "components/Navbar/Navbar"

function Home(){
    return (
        <div className="Home"> {/* ex alteração dentro de uma div => style={{margin: "15px", padding: '15px'}} */}
        {/* // FORA DOS PARENTESES É JS PURO
        // JSX */}
            <Navbar />
            <div className="Home__container">
                <PaletaLista />
                {/* AQUI DENTRO É HTML */}
            </div>
        </div>
        )
}

export default Home
