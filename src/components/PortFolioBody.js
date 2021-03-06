

import '../styles/portfolio.css'

function PortFolioBody() {

    return (
    
    
        <div className="portfoliobody">

            <div className="body_links">
                    <a href='/uses' className="btn buttonSelection">
                        Uses
                    </a>

                    <a href='/interests' className="btn buttonSelection">
                        Interests
                    </a>
                    <a  href='/projects' className="btn buttonSelection">
                        Projects
                    </a>
                </div>
                
                <h2 class="about-intro">Hello world ð , I'm Gokul</h2>

                <div className="about-container">
                    <div>
                        
                        <p class="about-body">
                            ð­ A software enthusiast , developer from India ð®ð³ 
                        </p>           

                        {/* <p class="about-body"> ð Code / Eat / Game / Repeat / (Hopefully Travel) </p>                         */}
                        <p class="about-body"> Routine : ð¨âð»  - ð - ð® - ð¤ - ð  (Hopefully Travel) </p>                        

                        

                        <p class="about-body">
                            â¡ Funfact: Nightð¦  I like to build things overnight ð¤
                        </p>      

                        <p class="about-body">
                            ð± Obsessed with Mapsðºï¸ and Counter Strike <a href="https://emoji.gg/emoji/9233_CSGO_SN"><img src="https://emoji.gg/assets/emoji/9233_CSGO_SN.png" width="25px" height="25px" alt="CSGO_SN" /></a>
                        </p>           

                        <p class="about-body">
                            ð¤ Make sure to check <a href="/interests">this</a> out
                        </p>           

                        
                    </div>              
                </div>
                    
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

                    <span className="socialIcons">
                        <a
                        href="mailto:bgokulravi1999@gmail.com"
                        >
                        <i className="fa fa-2x fa-envelope"></i>
                        </a>
                    </span>

                           
                <div className="name">
                    <span className="heartIcon">  â¥ï¸  </span>  from   buz_er
                </div>
                



                </div>

        </div>

  );
}

export default PortFolioBody;
