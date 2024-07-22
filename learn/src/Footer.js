const Footer = () => {
    
    const year=new Date()

return ( 
    <div>
        <footer>footer copy right &copy; {year.getFullYear()}</footer>
    </div>
 );
}

export default Footer;