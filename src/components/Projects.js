
import React, { Component } from 'react';
import '../styles/home.css'
import '../styles/portfolio.css'

class Projects extends Component {


    render() {

        return(
                <div>
                    <nav >
                    
                        {/* <h1 className="nav-name" > 🙋‍♂️ &lt; Gokul /&gt;  </h1> */}

                        <h1 className="nav-name" >  Projects  </h1>

                    </nav>


            <div className="projectsbody">

                <div className="body_links">

                        <a href='/' className="btn buttonSelection">
                            About
                        </a>

                        <a href='/interests' className="btn buttonSelection">
                            Interests
                        </a>

                        <a  href='/uses' className="btn buttonSelection">
                            Uses
                        </a>
                </div>

                <div className="uses-body" >


                    <h3 className="uses-headings"> MyMaps </h3>

                    <p class="uses-items"> <h4 className="item-color"> Being obsessed with maps , somewhere inside my heart it's asking me to build something related to maps.  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> So used my work experience and knowledge that i got from my mentors.  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> <a href="https://mymaps.vercel.app/mymaps" > Here </a> you can find the route between two geographical positions with a smoothened curve  <a href="https://mymaps.vercel.app/mymaps" > MyMaps </a> </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Smoothening pings is not as simple as coordinate geometry , think about it !   </h4> </p>           


                </div>
                   
                <div className="uses-body" >


                    <h3 className="uses-headings"> DevCheats </h3>

                    <p class="uses-items"> <h4 className="item-color"> As a beginner , yes we dont really remember every command that a client-tool provides  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> So maintaining list of cheats is always helpful, isn't it ?  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Here it is <a href="https://devcheats.herokuapp.com/" > Devcheats </a> </h4> </p>           
                    
                
                </div>

                
                <div className="uses-body" >


                    <h3 className="uses-headings"> Help Ngo's </h3>

                    <p class="uses-items"> <h4 className="item-color"> We all do social service in some way that we are capable of .  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Idea was to help Ngo's which are in need or helping people in need .   </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Creating a online platform for Ngo's where people can donate online .  </h4> </p>           
                    <p class="uses-items"> <h4 className="item-color"> Here is a <a href="https://www.youtube.com/watch?v=YCjZWpJct-U" > Demo </a> of the idea , WIP to make a better interface with better features and make it live . You are more than welcome to contribute  .</h4> </p>           


                </div>
                


                <div className="uses-body" >


                    <h3 className="uses-headings"> More Constructions are in progress 👨‍💻  </h3>
                    <h3 className="uses-headings"> Check out my <a href="https://github/gokulraviteja/" > Github </a>  for more projects and tutorial code templates ... </h3>
                    <h3 className="uses-headings"> Blogs .. ?  </h3>
                    
                        
                </div>




                </div>


                </div>
        )
    }
}

export default Projects