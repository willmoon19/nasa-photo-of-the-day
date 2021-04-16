import React from "react";

export default function Footer({footerData}){
    return (
        <div>
            <h3>Description: {footerData.explanation}</h3>
        </div>
    )
}