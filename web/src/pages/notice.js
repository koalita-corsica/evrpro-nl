import React from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import {Link} from "gatsby";
import Previous from '../components/previous/previous';

const Notice = () => {
    let log = console.log;

    const data = typeof window !== "undefined" && window.history.state.notices.edges
    const entreprise = typeof window !== "undefined" && window.history.state.entreprise


    return ( 
        <Layout>
            <Previous />
            <div data-fsapWrapper>
                <h1> NOTICE/{entreprise.title} </h1>
                <div data-fsapGrid>
                    {data && data != null ?
                    <>
                        {data.map((item, i) =>
                            <div data-item>
                                <Link to={`/noticeAPI/${item.node.slug}`} >
                                <div data-main>
                                    <p> Nom : {item.node.fichedeposte} </p> 
                                    <p> Version/Date : {item.node.version} </p>
                                </div>
                                </Link>
                                <div data-icons1>
                                    <Link data-search to={`/noticeAPI/${item.node.slug}`} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{cursor: 'pointer', transform: 'scale(1.1)'}} viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{cursor: 'pointer', transform: 'scale(1.1)'}} viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                    </svg>
                                </div>
                            </div>
                        )}
                        </>
                        :
                            ""
                        }
                        <Link to="/create-ficheChimique" 
                        state={{data: entreprise}}
                        >
                            <div data-create>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg>
                            </div>
                        </Link>
                </div>
            </div>
        </Layout>
     );
}

export default Notice;