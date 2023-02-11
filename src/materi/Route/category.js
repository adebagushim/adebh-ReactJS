import { useNavigate, useParams } from "react-router-dom";

const Category = () => {
    const params = useParams();
    const navigate = useNavigate();

    const toHome = () => {
        navigate('../home')
    }

    if (params.name === 'Makanan') {
        return (
            <div>
                <h3>Menu {params.name} yang Tersedia</h3>
                <h4>Pizza</h4>
                <h4>Lasagna</h4>
                <h4>Cheese Burger</h4>
                <h4>Wagyu Steak With Melted Mozarella</h4>
                <br></br>
                <button onClick={toHome}>Kembali ke Home</button>
            </div>
        )
    } else if (params.name === 'Minuman') {
        return (
            <div>
                <h3>Menu {params.name} yang Tersedia</h3>
                <h4>Flavoured Soda</h4>
                <h4>Milk Shake</h4>
                <h4>Mojito</h4>
                <h4>Cocktail</h4>
                <br></br>
                <button onClick={toHome}>Kembali ke Home</button>
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default Category;