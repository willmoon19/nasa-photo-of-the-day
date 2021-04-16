import React from "react"

export default function Header({ headerData }){
    return (
        <div>
            <h1>Date: {headerData.date}</h1>
        </div>
    )

}