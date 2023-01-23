import React from "react";
import Isi from "./Tugas/Isi";
import NavbarTugas from "./Tugas/NavbarTugas";

export default class Styling extends React.Component {

    render() {
        return (
            <div>
                <NavbarTugas />
                <Isi />
            </div>
        )
    }
}