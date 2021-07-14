import "../App.css"

import React  from 'react'
import '../styles/navV2.css'
import '../ReactLogo.css';

import '../styles/portfolio.css'

import pic3 from '../pics/pic3.jpg';

import 'react-slideshow-image/dist/styles.css'


const images = [
    { url: "../pics/pic1.jpg" },
    { url: "../pics/pic2.png" },
    { url: "../pics/pic3.jpg" }    
  ];
  

function Uses() {
    console.log((images))


    return (

        <div>
            <nav >
            
                {/* <h1 className="nav-name" > 🙋‍♂️ &lt; Gokul /&gt;  </h1> */}

                <h1 className="nav-name" >  Interests  </h1>

            </nav>
   
            <div className="interestsbody">

                <div className="body_links">

                        <a href='/' className="btn buttonSelection">
                            About
                        </a>

                        <a href='/uses' className="btn buttonSelection">
                            Uses
                        </a>

                        <a  href='/projects' className="btn buttonSelection">
                            Projects
                        </a>
                </div>
                    
                <div className="links-container">
                        
                        <div>

                            <a href='#tech' className="links">
                                #Tech
                            </a>

                            <a href='#nontech' className="links">
                                #NonTech
                            </a>

                        </div>              
                    </div>
                
                   
                <div className="uses-body" id="tech">
                <h3 className="uses-headings"> Tech </h3>

                    <h3 className="uses-headings"> #Work Related ( Btw I'm currently working  at <a href="https://www.olacabs.com/"> OLA </a>  ) </h3>

                    <p class="uses-items"> <h4 className="item-color"> I Use Java , Scala , Go ,Python on daily basis  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Work on microservices , distributed systems , built using a wide variety of frameworks , which interact with a variety of databases. <span className="special-texts">(Sometimes i execute postgres or mongo commands in cql shell 😅 ) </span> </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Interact quite a lot with locations and map related components which includes postgreSQL and terms like geoHashes , S2Cells , Gps Pings , polylines etc  </h4> </p>                                     
                    <p class="uses-items"> <h4 className="item-color"> Started working on flink and loving it   </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Play with hadoop ecosystem when i get bored  </h4> </p>     
                    <p class="uses-items"> <h4 className="item-color"> I use few data warehouses systems and data lakes like hive and s3 as if i dont care the importance of them </h4> </p>     

                    <h3 className="uses-headings"> #Personal Stuff </h3>
                    <p class="uses-items"> <h4 className="item-color"> I like to explore new tech stacks and building stuff while learning (like the one which you are checking out right now - built using react)   </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Code in Python, Js , use Django and React to make fun stuff quickly .  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Make <a href="https://github.com/gokulraviteja">git tutorials</a> when learning stuff which might help other beginners .  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Procrastinate about building some good products . Checkout few projects <a href="/projects">here</a>  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-protip"> I strive to help people in need (especially the ones in rural areas) , digitally . Would love to collaborate with someone who shares the similar interest. </h4> </p>           
                    
                    
                </div>
                    
                <div className="uses-body" id="nontech">

                    <h3 className="uses-headings"> Non Tech </h3>

                    <h3 className="uses-headings"> #Gaming </h3>

                    <p class="uses-items"> <h4 className="item-color"> Counter Strike ( Csgo ) will always be my first love - no offence 😬</h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> My profile - <a href="https://steamcommunity.com/profiles/76561198980199577/"> Link </a> </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Very much welcome to join our  <a href="https://steamcommunity.com/groups/Chokers2020"> er_group </a> . Though group is inactive , we play a lot ! (&gt;2khrs on record)  </h4> </p>                                                         

                    <h3 className="uses-headings"> #Life </h3>
                    <p class="uses-items"> <h4 className="item-color"> Up for more impromptu trips ✊  </h4> </p>                                                         
                    <p class="uses-items"> <h4 className="item-color"> Yet to spend more time with loved ones 🤓  </h4> </p>         
                    <p class="uses-items"> <h4 className="item-color"> Ofcourse , who doesn't love Nature and Travelling  </h4> </p>                                                         
                    <p class="uses-items"> <h4 className="item-color"> Foodie , Especially Chicken , Burger , Pizza , SoftDrinks , Chocolates Lover    </h4> </p>                                                         

                </div>

                <div className="images-section">

                    
                    <div className="uses-footer">  <p> ♥️ from buz_er </p>  </div>
                    <img src={pic3} width="50%" height="50%" alt="Pic3" />


                </div>


            </div>


        </div>
  );
}

export default Uses;
