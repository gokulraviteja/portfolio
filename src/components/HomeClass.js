

import React, { Component } from 'react';
import '../styles/home.css'
import Nav from './Nav'
import {constants} from '../constants/Constants'
import Cheats from '../components/Cheats'
import Footer from '../components/footer'

import get_topics from '../actions/GetTopics'
import filter_topics from '../actions/FilterTopics'

class HomeClass extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            topics : [],
            search_input : "",
            cheatpage : 0,
            cheatid : "",
            cheatname : "",
            topicsCopy: []
        }
        this.handleChange=this.handleChange.bind(this)
    }



    openGit(){
        window.open("https://github.com/gokulraviteja");
    }


    openLogo(){
        window.location.href = constants.baseUrl+"/logo"
    }

    openHome(){
        window.location.href = constants.baseUrl
    }

    open(url){
        window.open(url);
    }

    handleChange(event){
        const input = event.target.value
        // get_topics(input).then((response) =>  {
        //     this.setState({
        //         topics: response.data.topics,
        //         search_input : input
        //     });
        // }).catch((error) => {
        //     console.log("Error : ", error)
        // })
        var filtered = filter_topics(this.state.topicsCopy , input)
        this.setState({
            topics: filtered,
            search_input : input
        });

    }

    openCheat(key , name){
        this.setState({
            cheatpage : 1,
            cheatid : key,
            cheatname : name
        })
    }




    render() {

        if(this.state.cheatpage === 1){

            return(
                <div>
                    <Nav />
                    
                    <div className="home-base1 ">
                        
                        <div className="links">
                            <button  onClick={this.openHome} className="btn buttonSelection">
                                <i className="fa fa-home"></i>
                                Home
                            </button>
    
                            <button onClick={this.openGit} className="btn buttonSelection">
                                <i className="fa fa-github"></i>
                                Contribute
                            </button>
    
                            <button onClick={this.openLogo} className="btn buttonSelection">
                            <i className="fa fa-magic" aria-hidden="true"></i>
                                Logo
                            </button>
                        </div>
    
                    </div>

                    <Cheats message={this.state.cheatid} topicname={this.state.cheatname}/>


                </div>
    
            )
        }
        else{
            if(this.state.search_input === "" && this.state.topics.length === 0){
                get_topics(this.state.search_input).then((response) =>  {
                    this.setState({
                        topics: response.data.topics,
                        search_input : "",
                        topicsCopy : response.data.topics
                    });
                }).catch((error) => {
                    console.log("Error : ", error)
                })
            }
    
            if(this.state.topics.length === 0){
                return(
                    <div>
        
                        <Nav />
                        
                        <div className="home-base ">
                            
                            <div className="links">
                                <button  onClick={this.openHome} className="btn buttonSelection">
                                    <i className="fa fa-home"></i>
                                    Home
                                </button>
        
                                <button onClick={this.openGit} className="btn buttonSelection">
                                    <i className="fa fa-github"></i>
                                    Contribute
                                </button>
        
                                <button onClick={this.openLogo} className="btn buttonSelection">
                                <i className="fa fa-magic" aria-hidden="true"></i>
                                    Logo
                                </button>
                            </div>
        
                            <div  className="searchBox">
                                <input type="search"  onChange={this.handleChange}  value={this.state.search_input} placeholder="Search cheatsheets" />
                            </div>
                            
                            <div className="grid">
                                <h3>Sorry Coundn't find any Cheat Sheet !</h3>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <Nav />
                        
                        <div className="home-base ">
                            
                            <div className="links">
                                <button  onClick={this.openHome} className="btn buttonSelection">
                                    <i className="fa fa-home"></i>
                                    Home
                                </button>
        
                                <button onClick={this.openGit} className="btn buttonSelection">
                                    <i className="fa fa-github"></i>
                                    Contribute
                                </button>
        
                                <button onClick={this.openLogo} className="btn buttonSelection">
                                <i className="fa fa-magic" aria-hidden="true"></i>
                                    Logo
                                </button>
                            </div>
        
                            <div  className="searchBox">
                                <input type="search"  onChange={this.handleChange}  value={this.state.search_input} placeholder="Search cheatsheets" />
                            </div>
                            
                            <div className="grid">
    
                            {this.state.topics.map((data) => {
                                return  <div key={data.key}  className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img className="card-images" src={data.url}  alt="Redis"  />
                                                    <div > <h2> {data.name} </h2> </div>
                                                    <div className="description"> {data.desc} </div>
                                                </div>
                                                <div  className="flip-card-back">
                                                    <button  onClick={() => {this.openCheat(data.key , data.name)}} className="btn flipped-button">
                                                        Cheat Sheet
                                                    </button>
                                                    <button onClick={() => {this.open(data.doc)}}  className="btn flipped-button">
                                                        Documentation
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                            })}
                            
                            </div>
        
                        </div>
        
                        <Footer />
                    </div>
        
                )
            }
        }

        

    }
}

export default HomeClass