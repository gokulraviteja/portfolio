import '../styles/cheats.css'
import React , {Component} from 'react'

import get_cheats from '../actions/GetCheats'
import filter_cheats from '../actions/FilterCheats'


class Cheats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cheats : [],
            cheatsCopy : [],
            name : this.props.topicname,
            cheatid : this.props.message,
            search_input : ""
        }
        this.handleChange=this.handleChange.bind(this)
        
    }

    copy(text){
        console.log("Clicked copy")
        var input = document.createElement("textarea");
        input.innerHTML = text;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);
        return result;
    }

    handleChange(event){
        const input = event.target.value
        // get_cheats(this.state.cheatid , input).then((response) =>  {
        //     this.setState({
        //         cheats: response.data.cheats,
        //         search_input : input
        //     });
        // }).catch((error) => {
        //     console.log("Error : ", error)
        // })

        var filtered = filter_cheats(this.state.cheatsCopy , input)
        this.setState({
            cheats: filtered,
            search_input : input,
        });
        
    }


    render() {
        console.log("Rendeign cheats" , this.state.cheats.length , this.state.search_input  )
        if(this.state.cheats.length === 0 && this.state.search_input === ""){
            get_cheats(this.state.cheatid , this.state.search_input).then((response) =>  {
                this.setState({
                    cheats: response.data.cheats,
                    cheatsCopy : response.data.cheats,
                });
            }).catch((error) => {
                console.log("Error : ", error)
            })    
        }

        if(this.state.cheats.length === 0){
            return (
            
                <div className="home-base">
    
                    <div className="cheats-heading">
                        <p> {this.props.topicname}'s Cheatsheet </p>
                    </div>
    
                    <div  className="searchBox">
                        <input type="search"  onChange={this.handleChange}  value={this.state.search_input}  placeholder="Search cheatsheets" />
                    </div>

                    <div>

                        <p className="cheatNotFound">  Oh no , cheat not found ??? - <a href="mailto:bgokulravi1999@gmail.com"> Click on me to Contribute ... </a></p>

                    </div>
                    
                </div>
    
      );
        }
        else{
            return (
            
                <div className="home-base">
    
                    <div className="cheats-heading">
                    <p> {this.props.topicname}'s Cheatsheet </p>
                    </div>
    
                    <div  className="searchBox">
                        <input type="search"  onChange={this.handleChange}  value={this.state.search_input} placeholder="Search cheatsheets" />
                    </div>
                    <div className="grid1">
                        <div className="grid1-elem left bold">Command</div>
                        <div className="grid1-elem right bold" >Description</div>
                        <div className="grid1-elem copy-head bold" >Copy</div>
                        
                    </div>
    
                    {this.state.cheats.map((data) => {
                                return  <div className="grid2">
                                            <div className="grid2-elem left ">{data.command} </div>
                                            <div className="grid2-elem right " >{data.desc}</div>
                                            <div className="grid2-elem">
                                                <button onClick={() => {this.copy(data.command)}} value={data.command} className="btn copy">
                                                    <i className="fa fa-copy"></i>
                                                </button>
                                            </div>
                                        </div>
                            })}

            
                </div>
      );

        }
       


    }
}

export default Cheats;

