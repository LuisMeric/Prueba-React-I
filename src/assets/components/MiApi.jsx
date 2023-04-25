import { useState, useEffect } from 'react'
import './styles/MiApi.css'


function MiApi() {
    const [valores, setValores] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [show, setShow] = useState(true);



    useEffect(() => {
        consultarinf()
    }, [])

    const consultarinf = async () => {
        const url = "https://api.victorsanmartin.com/feriados/en.json"
        const response = await fetch(url)
        const dato = await response.json()
        setValores(dato.data)
    }


    return (
        <div className='container'>
            <div className='contFilter'>
                <h3>Filtrar Listado</h3>
                <input onChange={(e) => { setBusqueda(e.target.value) }} type="text" className='inp' />
            </div>

            <div className='buttonContainer'>
                <h3 className='tituloBoton'>Orden de la Lista</h3>
                <button
                    type="button"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    {show ? 'Ascendente' : 'Descendente'}
                </button>

            </div>





            {show ? (

                <ul>

                    {valores

                        .filter((indicador) => {
                            if (busqueda === "") { return indicador }


                            else { return indicador.title.toLocaleLowerCase().includes(busqueda) }

                        })



                        .map((indicador, i) => <li className='' key={i}>{indicador.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{indicador.title}</li>)


                    }


                </ul>

            ) :

                (

                    <ul>

                        {valores

                            .filter((indicador) => {
                                if (busqueda === "") { return indicador }


                                else { return indicador.title.toLocaleLowerCase().includes(busqueda) }

                            })



                            .map((indicador, i) => <li className='' key={i}>{indicador.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{indicador.title}</li>).reverse()


                        }


                    </ul>

                )}






        </div >

    )

}

export default MiApi