import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>BIKINI.TWINS</h2>
                        <ul className="list-inline mb-7">
                            <nav>
                                <Link to="#">Enterizas</Link>
                                <Link to="#">Redes Sociales</Link>
                                <Link to="#">Bikinis</Link>
                            </nav>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer