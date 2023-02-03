import React from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import './index.css'

export default class Lifecycle extends React.Component {
    state = {
        users: [],
        cari: ''
    }
    
    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=036d7ed07cb14c0aaea485ee0923c62b`)
        .then(res => {
            const users = res.data.articles
            this.setState({users})
            console.log('didMount');            
        })   
    }


    render() {

        return(
            <Container>
                <h1>Berita KEHIDUPUNK Terkini</h1>
                <input 
                placeholder=" Cari Berita"
                onChange={ e => this.setState({cari: e.target.value.toLocaleLowerCase()})}
                />
                <Row className="isi">
                    {this.state.users.filter((value) => {
                        return value.title?.toLowerCase().includes(this.state.cari.toLocaleLowerCase()) || value.description?.toLowerCase().includes(this.state.cari.toLocaleLowerCase()) || value.source.name?.toLowerCase().includes(this.state.cari.toLocaleLowerCase())
                        }).map((user) => 
                    <Col md={4} className="content" key={user.publishedAt}>
                        {console.log(user)}
                        <div className="judul" >{user.title}</div>
                        <div className="gbr" >
                            <img src={user.urlToImage} alt="" />
                        </div>
                        <div className="berita" >{user.description}</div>
                        <div className="sumber" ><a href={user.url}>Link News</a> - {user.source.name} - {user.publishedAt.slice(0, 10)}</div>
                    </Col>
                )}
                </Row>
            </Container>
        )
    }
}