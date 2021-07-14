
import '../styles/home.css'
import Nav from './Nav'
import redis from '../styles/redis.png'
import go from '../styles/go.png'
import docker from '../styles/docker.png'


function Home() {

    return (
        <div>

            <Nav />

            <div className="home-base ">
                
                <div className="links">
                    <button  className="btn buttonSelection">
                        <i className="fa fa-home"></i>
                        Home
                    </button>

                    <button  className="btn buttonSelection">
                        <i className="fab fa-github"></i>
                        Contribute
                    </button>

                    <button className="btn buttonSelection">
                    <i className="fa fa-magic" aria-hidden="true"></i>
                        Logo
                    </button>
                </div>

                <div v-show="!itemSelected" className="searchBox">
                    <input type="search" v-model="search" placeholder="Search cheatsheets" />
                </div>
                
                <div className="grid">
                
                        <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img className="card-images" src={redis}  alt="Redis"  />
                            <div> <h2> Redis </h2> </div>
                            <div> Redis is an open source (BSD licensed), in-memory data structure store, used as a database... </div>
                            </div>
                            <div className="flip-card-back">
                                
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Cheat Sheet
                                </button>
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Documentation
                                </button>

                            </div>
                        </div>
                        </div>
                        <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img className="card-images" src={go}  alt="Redis"  />
                            <div> <h2> Golang </h2> </div>
                            <div> Go is an open source programming language that makes it easy to build simple, reliable, an... </div>
                            </div>
                            <div className="flip-card-back">
                                
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Cheat Sheet
                                </button>
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Documentation
                                </button>

                            </div>
                        </div>
                        </div>
                        <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img className="card-images" src={docker}  alt="Redis"  />
                            <div> <h2> Docker </h2> </div>
                            <div> Docker is a software platform for building applications based on containers — small and li... </div>
                            </div>
                            <div className="flip-card-back">
                                
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Cheat Sheet
                                </button>
                                <button  className="btn flipped-button">
                                    <i className="fa fa-home"></i>
                                    Documentation
                                </button>

                            </div>
                        </div>
                        </div>
                
                </div>

            </div>

        </div>



  );
}

export default Home;