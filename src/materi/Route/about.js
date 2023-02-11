import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../home')
    }

    return (
        <>
            <h3>About Tenan Lurr</h3>

            <button onClick={handleClick}>Pergi ke Halaman Home</button>
        </>
    )
}

export default About;