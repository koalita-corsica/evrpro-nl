import React from 'react';
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";
import * as styles from "../styles/fsap.css";
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowRight } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"


const FSAP = () => {
    let log = console.log;

    const data = window.history.state.fiches.edges
    
    log(window.history.state.entreprise)

     return ( 
        <Layout>
            <div data-fsapWrapper>
                <h2> FSAP/{window.history.state.entreprise.title} </h2>
                <div data-fsapGrid>
                    {data.map((item, i) =>
                        <div data-item>
                            <div data-main>
                                <p> Nom {item.node.fichedeposte} </p> 
                                <p> Version/Date {item.node.version} </p>
                            </div>
                            <div data-icons1>
                                <Link data-search to={`/fichesdeposteAPI/${item.node.slug}`} >
                                    <BsSearch style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                                </Link>
                                <AiOutlineArrowRight style={{cursor: 'pointer', transform: 'scale(1.1)'}}/>
                            </div>
                        </div>
                    )}
                    <Link to="/create-fichePoste" 
                        state={{data: window.history.state.entreprise}}
                    >
                        <div data-item>
                            <AiOutlinePlus style={{fontSize: '70px'}} />
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
      );
 }
 
 export default FSAP;