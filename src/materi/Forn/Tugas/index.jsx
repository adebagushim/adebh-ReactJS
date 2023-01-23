import React from "react";
import * as Validator from 'validatorjs';

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li> )
            }
        </ul>
    )
}

export default class ValidationTgs extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        email: '',
        password: '',
        member: false,
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        let data = { email, password }

        let rules = {
            email: 'required|email',
            password:'min:8|required'
        }

        let validation = new Validator(data, rules);
        validation.passes();

        if(validation.errorCount===0) {
            alert(`
                Nama: ${this.state.nama}
                Jurusan: ${this.state.jurusan}
                Gender: ${this.state.gender}
                Alamat: ${this.state.alamat}
                Email: ${this.state.email}
                Password: ${this.state.password}
                Member: ${this.state.member ? 'YES' : 'NO'}
                `)
        }
        
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            email: '',
            password: '',
            member: false,
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })
    }

    render(){
        return(
            <div style={{witdh: '400px', margin: '100px auto 0', border: '1px solid black', padding: '20px'}}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h3>Login Page</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama: <input
                        style={{marginLeft: '80px'}} 
                        type="text" 
                        name="nama" 
                        onChange={ e => this.setState({nama: e.target.value})}
                        value={this.state.nama}/>
                    </label>
                    <br />
                    <label>
                        Jurusan: <select
                        style={{marginLeft: '68px'}}  
                        name="jurusan"
                        onChange={ e => this.setState({jurusan: e.target.value})}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Teknik Elektro">Teknik Elektro</option>
                            <option value="Teknik Rasengan">Teknik Rasengan</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin:
                        <input style={{marginLeft: '32px'}}  type="radio" value="Laki Laki" name="grnder"
                        onChange={ e => this.setState({gender: e.target.value})}/> Laki - Laki
                        <input style={{marginLeft: '20px'}}  type="radio" value="Perempuan" name="grnder"
                        onChange={ e => this.setState({gender: e.target.value})}/> Perempuan
                    </label>
                    <br />
                    <label>
                        Alamat: <textarea style={{marginLeft: '74px'}}  cols="30" rows="10" name="alamat"
                        onChange={ e => this.setState({alamat: e.target.value})}
                        value={this.state.alamat}></textarea>
                    </label>
                    <br />
                    <label>
                        Member: <input style={{marginLeft: '64px'}}  type="checkbox" checked={this.state.member} name="member"
                        onChange={ e => this.setState({member: e.target.checked})}/>
                    </label>
                    <br />
                    <label>
                    Email: <input
                        style={{marginLeft: '85px'}} 
                        type="email" 
                        name="email" 
                        onChange={ e => this.setState({email: e.target.value})}
                        value={this.state.email}/>
                    </label>
                    <br />
                    <label>
                    Password: <input
                        style={{marginLeft: '57px'}} 
                        type="password" 
                        name="password" 
                        onChange={ e => this.setState({password: e.target.value})}
                        value={this.state.password}/>
                    </label>
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}