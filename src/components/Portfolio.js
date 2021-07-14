
import React, { Component } from 'react';
import '../styles/home.css'
import '../styles/portfolio.css'
import NavV2 from '../components/NavV2'
import PortFolioBody from  '../components/PortFolioBody'

class Portfolio extends Component {


    render() {

        return(
                <div>

                    <NavV2/>

                    <PortFolioBody/>

                </div>
        )
    }
}

export default Portfolio