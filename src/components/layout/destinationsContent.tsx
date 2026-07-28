"use client"
import { useState } from "react"
import DestinationSearch from "./searchBarDestinos";
import DestinesGrid from "./destiniesGrid";
import { Destination } from "@prisma/client";
import NoResults from "../ui/emptyResult";


type Props = {
    destinies : Destination [];
}

export default function DestinationContent({destinies} : Props) {
    const [ search, setSearch] =  useState("");

    const filtered = destinies.filter((destino) =>
        destino.name.toLowerCase().includes(search.toLowerCase())
    )

        return (
            <>
            <DestinationSearch
                value={search}
                action={setSearch}
            />
            {filtered.length === 0 ? ( <NoResults onReset={ () => {
                setSearch("")
            }} />)  : (
                 <DestinesGrid destinos={filtered} />
            ) }
            </>
        );

            
}