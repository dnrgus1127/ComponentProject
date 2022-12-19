import React, { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 40px;
 padding : 8px 0px;
 display: flex;
 input[type="color"] {
    border : none;
    width: 20%;
 }
 input[type="text"] {
    width: 30%;
 }
 input {
    height: 24px;
    margin-right: 12px;
 }
 p {
    margin-right : 12px;
 }
`

export default function ColorPicker() {
    const refColor = useRef();
    const refInput = useRef();
    return (
        <Container>
            <p>Color Picker</p>
            <input ref={refInput} type="text" placeholder='#000000' onChange={(e)=>{
                if(e.target.value.length === 7){
                    refColor.current.value = e.target.value
                }
            }}/>
            <input ref={refColor} type="color" onChange={(e)=>refInput.current.value = e.target.value}/>
        </Container>

    )
}
