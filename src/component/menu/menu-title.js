import { useState } from "react"
import styled, { css } from "styled-components"

export default function MenuTitle({text}){

    const [select, setSelect] = useState(false);

    const onclickMenu = () => {
        console.log("클릭됨")
        setSelect(true);
    }

    const Menu = styled.div`
        
        width: 229px;
        height: 57px;
        border-radius: 19px;
        display: flex;
        justify-content: flex-end;
        padding-right: 57px;
        cursor: pointer;
        margin: 30px 0px;

        ${props => 
            props.select && 
            css`
            background-color: white;
            `}

    
    `
    return(
        <>
            <div onClick={onclickMenu}>
                <Menu select={select}><p>{text}</p></Menu>              
            </div>
        </>
    )
}