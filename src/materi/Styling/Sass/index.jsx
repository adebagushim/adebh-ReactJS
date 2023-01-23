import React from "react";
import './index.scss'
import Title from "./Title";

export default class Sass extends React.Component {
    
    render() {
        return (
            <div>
                <Title />
                <h3 className="title">Masih Coba</h3>
                <button className="btn btn-danger">Go there</button>
            </div>
        )
    }
}