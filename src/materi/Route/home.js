import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const toAbout = () => {
        navigate('../about')
    }

    const toMakanan = () => {
        navigate('../category/Makanan')
    }
    
    const toMinuman = () => {
        navigate('../category/Minuman')
    }

    return (
        <div>
            <h3>Selamat Datang di Angkringan KangMo</h3>

            <button onClick={toAbout}>Pergi ke Halaman About</button>
            <br></br>
            <br></br>
            <button onClick={toMakanan}>Pergi ke Halaman Makanan</button>
            <br></br>
            <br></br>
            <button onClick={toMinuman}>Pergi ke Halaman Minuman</button>
            
        </div>
    )
}

export default Home;