import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPerroId } from "../redux/actions";
import { useSelector } from "react-redux";
import style from './Css/PerroID.module.css'
import { Link } from "react-router-dom";
import { deleteDog } from "../redux/actions";


export default function PerroId(){
    const dispatch = useDispatch()
    const history = useHistory()
    let {id} = useParams()
    const Dog = useSelector((state) => state.dog)
    console.log(Dog)
    useEffect( () => {
        dispatch(getPerroId(id))
    },[])

    function borrarDog(){
        dispatch(deleteDog(id))
        alert('Dog successfully removed')
        history.push('/home')
    }

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
                            <img className={style.img} src={Dog.img == '' ? 'https://img.pixers.pics/pho_wat(s3:700/FO/30/92/43/30/700_FO30924330_0a69d232ef220ba85df06b617a4b7b7b.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-sombra-de-perro.jpg.jpg' : Dog.img} alt="Img-Dog"/>
                        </div>
                        <Link className={style.link} to={'/home'}><div className={style.Button}>Home</div></Link>
                        {Dog.createInBd ? <div className={style.ButtonDelete} onClick={borrarDog}>Delete</div> : null}
                    </div>
                    <div className={style.datos}>
                        <div className={style.informacion}>
                            <h1>Information</h1>
                        </div>
                        <h1>{Dog.peso !== undefined ? 'Weight: ' + Dog.peso : '...'}</h1>
                        <h1>{Dog.altura !== undefined ? 'Height: ' + Dog.altura : '...'}</h1>
                        <h1>{Dog.anoDeVida !== undefined ? 'Life expectancy: ' + Dog.anoDeVida : null}</h1>
                        <h1>{Dog.criadoPara !== undefined ? 'Raised for: ' + Dog.criadoPara : null}</h1>
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