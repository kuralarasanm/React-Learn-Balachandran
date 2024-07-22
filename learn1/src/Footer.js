const Footer = ({ length }) => {


    return (
        <div>
            <footer>{length} list {length === 1 ? "item" : "items"}</footer>
        </div>
    )
}
export default Footer;