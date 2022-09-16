import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions.js";

export default function PaginaPrincipal(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    return (
        <div>

        </div>
    )

}