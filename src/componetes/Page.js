const Page = (props) => {
    return (
        <div className="page">
            <header className="page_header">
                <h3>{props.titulo} </h3>
                <h4>{props.subtitulo} </h4>
            </header>

            <div className="contenido">
                {props.children}
            </div>
        </div>
    )
}
export default Page