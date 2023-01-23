import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: blue;
    color: dodgerblue;

    &:hover{
        background: blue;
        color: white;
    }
`;

export default class Styled extends React.Component {

    render() {
        return (
            <div>
                <Button>Go there</Button>
            </div>
        )
    }
}