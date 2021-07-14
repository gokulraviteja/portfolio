import '../styles/home.css'


function Footer() {

    return (
        <div className="footer">
            <div className="socialShare">

                <span className="socialIcons">
                    <a
                    href="https://github.com/gokulraviteja"
                    >
                    <i className="fa fa-2x fa-github" aria-hidden="true"></i>
                    </a>
                </span>
                
                <span className="socialIcons">
                    <a
                    href="https://www.linkedin.com/in/gokul-bellapukonda-a19438141/"
                    >
                    <i className="fa fa-2x fa-linkedin"></i>
                    </a>
                </span>
            
            </div>
            
            
        
            <div className="name">
               <span className="heartIcon"> ❤️️  </span>  from  
               Gokul -  buz_er -  Awbathrow
            </div>
            
        </div>
  );
}

export default Footer;

