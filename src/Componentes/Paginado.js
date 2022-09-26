import React from "react";
import style from './Css/Paginado.module.css'

export default function Paginado({allDogs, pageDogsInit, pageDogs, page, setpageDogs, setpageDogsInit, setpage}){
    let array = []
    function pee(){
        for(let i = 0; i < Math.ceil(allDogs.length / 8); i++){
            array.push('.')
        }
    }
    pee()
    // Funciones para moverse entre paginas
    function pagSum(){
        if(allDogs.slice(pageDogsInit + 8, pageDogs + 8).length === 0) return
        setpageDogs(pageDogs + 8)
        setpageDogsInit(pageDogsInit + 8)
        setpage(page + 1)
    }
    function pagRes(){
        if(pageDogsInit === 0) return
        setpageDogs(pageDogs - 8)
        setpageDogsInit(pageDogsInit - 8)
        setpage(page - 1)
    }

    return(
        <div>
            <div className={style.containerPrincipal}>
                <button onClick={e => {pagRes()}}> - </button>
                    {array.length > 0 ? array.map((e, i) => {
                        console.log(i)
                        return(<p className={i === page ? style.active : style.desactive} key={i}>{e}</p>)
                    }) : null}
                <button onClick={e => {pagSum()}}> + </button>
            </div>
        </div>
    )
}