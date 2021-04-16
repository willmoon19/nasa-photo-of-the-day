import React from "react";
import styled from "styled-components";

const NewImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    width: 100%;
    justify-content: center;

    h2 {
        width: 100%;
    }
`

const StyledImg = styled.img`
    width: 75%;
    
`

export default function Photo({photoData}){
    console.log({photoData})
    return (
        <NewImage>
        <h2>{photoData.title}</h2>
        <StyledImg src={photoData.hdurl}></StyledImg>
        </NewImage>
    )
}
