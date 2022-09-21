import React from "react";

export default function Paginado({allDogs, pageDogsInit, pageDogs, page, setpageDogs, setpageDogsInit, setpage}){

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
            <button onClick={e => {pagRes()}}> - </button>
            <button onClick={e => {pagSum()}}> + </button>
        </div>
    )
}