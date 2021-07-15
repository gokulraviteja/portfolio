import "../App.css"
import '../ReactLogo.css';
import '../styles/Maps.css';
import React, {Component} from 'react';

class MyMaps extends Component {



    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render(){

    return (
            <div className="maps-parent">
                <div className="maps-nav">
                    {/* <span><img src={logo} className="ReactLogo-logo1"  alt="logo" /></span> */}

                    <h1 className="maps-head" > MyMaps🗺️  </h1> 

                    {/* <span><img src={logo} className="ReactLogo-logo2" alt="logo" /></span>     */}
                </div>


                <div className="maps-body">
                  
                    <form action="" method="post" >

                        <fieldset className="wide">
                            <p className="input-fields">Origin:<br/><input className="input-text" type="text"/></p>
                            <p className="input-fields">Destination:<br/><input className="input-text" type="text"/></p>
                        </fieldset>

                        <p>
                            <input className="maps-submit-button" type="submit" value="Directions"/>
                        </p>

                    </form>

                </div>

            </div>
            

            );
    }
}



export default MyMaps;
