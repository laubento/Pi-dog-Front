import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPerroId } from "../redux/actions";
import { useSelector } from "react-redux";
import style from './Css/PerroID.module.css'
import { Link } from "react-router-dom";

export default function PerroId(){
    const dispatch = useDispatch()
    let {id} = useParams()
    const Dog = useSelector((state) => state.dog)

    useEffect( () => {
        dispatch(getPerroId(id))
    },[])

    return(
        <div className={style.containerPrincipal}>
            <div className={style.difuminado}>
                <div className={style.containerTitulo}>
                    {Dog.name !== undefined ? <h1 className={style.titulo}>{'Hello! I am a ' + Dog.name + '🐶'}</h1>   
                    : <h1 className={style.titulo}>{'Hello! I am a ' + '...' + '🐶'}</h1>   
                    }
                </div>
                <div className={style.container}>
                    <div>
                        <div className={style.containerimg}>
                            <img className={style.img} src={Dog.img} alt="Img-Dog"/>
                        </div>
                        <Link className={style.link} to={'/home'}><div className={style.Button}>Home</div></Link>
                    </div>
                    <div className={style.datos}>
                        <div className={style.informacion}>
                            <h1>Information</h1>
                        </div>
                        <h1>{Dog.peso !== undefined ? 'Weight: ' + Dog.peso : '...'}</h1>
                        <h1>{Dog.altura !== undefined ? 'Height: ' + Dog.altura : '...'}</h1>
                        <h1>{Dog.anoDeVida !== undefined ?'Life expectancy: ' + Dog.anoDeVida : '...'}</h1>
                        <h1>{Dog.criadoPara !== undefined ?'Raised for: ' + Dog.criadoPara : "..."}</h1>
                        <div className={style.informacion}>
                            <h1>Temperament</h1>
                        </div>
                        <div className={style.temperamentos}>
                            <ul>{Dog.temperamento ? Dog.temperamento.map((e, i) => {
                                return(
                                    <li key={i}>{e}</li>
                                )
                            }) : null}
                            </ul>
                            <ul>{Dog.temperamentos ? Dog.temperamentos.map((e, i) => {
                                return(
                                    <li key={i}>{e.name}</li>
                                )
                            }) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}