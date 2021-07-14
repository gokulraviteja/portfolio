import "../App.css"

import React  from 'react'
import '../styles/navV2.css'
import '../ReactLogo.css';

import '../styles/portfolio.css'



function Uses() {

    return (

        <div>
            
            <nav >
            
                <h1 className="nav-name" > 🙋‍♂️ &lt; Gokul /&gt;  </h1>

                <h1 className="nav-name" >  Uses  </h1>

            </nav>
   
            <div className="usesbody">

                <div className="body_links">
                        <a href='/' className="btn buttonSelection">
                            About
                        </a>

                        <a href='/interests' className="btn buttonSelection">
                            Interests
                        </a>

                        <a  href='/projects' className="btn buttonSelection">
                            Projects
                        </a>
                </div>
                    

                <div className="links-container">
                        <div>
                            <a href='#editors' className="links">
                                #Editors
                            </a>

                            <a href='#tech' className="links">
                                #TechStack
                            </a>

                            <a href='#hardware' className="links">
                                #Others
                            </a>

                            {/* <a href='#editors' className="links">
                                #Others
                            </a> */}

                        </div>              
                    </div>
                        
                <div className="uses-body" id="editors">
                    <h3 className="uses-headings"> Editors (Depends on mood and language) </h3>                
                    <p class="uses-items"> <a href="https://www.sublimetext.com/"> <h4 className="item-color">Sublime  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://www.jetbrains.com/idea/"> <h4 className="item-color">Intellij  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://www.jetbrains.com/go/"> <h4 className="item-color">Goland  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://code.visualstudio.com/"> <h4 className="item-color">Vs Code  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://www.jetbrains.com/pycharm/"> <h4 className="item-color">Pycharm  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://atom.io"> <h4 className="item-color"> Atom  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://jupyter.org"> <h4 className="item-color">Jupyter  </h4> </a> </p>           
                    <p class="uses-items">iTerm2 <a href="https://github.com/ohmyzsh/ohmyzsh" > (oh my zsh) </a> </p>    
                </div>
                    
                <div className="uses-body" id="tech">
                    <h3 className="uses-headings"> TechStack (Get ready for a long list) </h3>
                    <p class="uses-items">  <h4 className="item-color">Python , Java , Scala , Go , JS   </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Django , Vert.x  , Iris/Mux , React  </h4>  </p>           
                    <p class="uses-items"> <h4 className="item-color">  Flink , Spark , Aws </h4>  </p>           
                    <p class="uses-items"> <h4 className="item-color"> PostgreSQL , Scylla , Redis , Mongo , Sql  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-protip"> 💡 Pro tip : It doesn't matter how many you know , It matters how good you are in what you know.  </h4> </p>           
                </div>
                    
                <div className="uses-body" id="hardware">

                    <h3 className="uses-headings"> Hardware </h3>                
                    <p class="uses-items">  <h4 className="item-color"> Macbook Pro 2019 - Work </h4>  </p>           
                    <p class="uses-items"> <h4 className="item-color"> Dell Inspiron - Personal  </h4>  </p>           
                    <p class="uses-items"> BenQ <a href="https://www.flipkart.com/benq-24-inch-full-hd-led-backlit-tn-panel-gaming-monitor-xl2411p/p/itmfcmuvyh9yxugf?pid=MONFCMUVD3BJQGAK&lid=LSTMONFCMUVD3BJQGAKSESQVY">  Gaming   </a> </p>           

                    <h3 className="uses-headings"> Competetive Programming </h3>    

                    <p class="uses-items"> <a href="https://www.codechef.com/"> <h4 className="item-color">CodeChef  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://www.hackerearth.com/"> <h4 className="item-color">Hackerearth  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://cses.fi/"> <h4 className="item-color">Cses (Recent One)  </h4> </a> </p>           
                    <p class="uses-items"> <a href="https://codeforces.com/"> <h4 className="item-color">Codeforces  </h4> </a> </p>           

                    


                    <h3 className="uses-headings"> Hostings </h3>    

                    <p class="uses-items"> <a href="https://www.pythonanywhere.com/"> PythonAnywhere  </a> (for python backends) </p>           
                    <p class="uses-items"> <a href="https://www.heroku.com/"> Heroku </a> (all other frontend and backends) </p>           
                    
                



                    <h3 className="uses-headings"> Tools </h3>    

                    <p class="uses-items"> Safari </p>           
                    <p class="uses-items"> Chrome </p>      
                    <p class="uses-items"> Firefox </p>           
                    <p class="uses-items"> Postman </p>           
                    <p class="uses-items"> Spotify </p>           
                    <p class="uses-items"> Slack </p>           

                    <p class="uses-items"> <h4 className="item-protip"> 🙇‍♂️ Happy to know about some other useful tools  </h4> </p>           


                    
                

                    

                </div>

                <div className="uses-footer">  <p> ♥️ from buz_er </p>  </div>


                {/* <div className="socialShare"> */}

                           
                    
                {/* </div> */}


            </div>




        </div>
  );
}

export default Uses;
