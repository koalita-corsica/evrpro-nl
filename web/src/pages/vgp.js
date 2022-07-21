import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import {Link} from "gatsby";
import Previous from '../components/previous/previous';

const VGP = () => {
    let log = console.log;

    const engin = typeof window !== "undefined" && window.history.state.engin.node
    const entreprise = typeof window !== "undefined" && window.history.state.entreprise
    console.log(engin)
    const typeRapport = () => {
        switch(engin.catID) {

            case "R.482 Cat A 1":
            case "R.482 Cat A 2":
            case "R.482 Cat A 3":
            case "R.482 Cat A 4":
            case "R.482 Cat A 5":                
            case "R.482 Cat B 1":
            case "R.482 Cat B 2":
            case "R.482 Cat B 3":
            case "R.482 Cat C 1":
            case "R.482 Cat C 2":
            case "R.482 Cat C 3":
            case "R.482 Cat D 1":
            case "R.482 Cat D 2":
            case "R.482 Cat E 1":
            case "R.482 Cat E 2":
            case "R.482 Cat E 3":
                return  <div>
                            <h3>Rapport de Chantier</h3>
                            <h4>Périodicité : 12 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin, perio: 12}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    ;
                break;
            case "R.482 Cat F 1":
            case "R.482 Cat F 2":
            case "R.486 Cat A 3":
            case "R.486 Cat B 1":
            case "R.486 Cat B 2":
            case "R.486 Cat B 3":
            case "R.489 Cat 1 B":
            case "R.489 Cat 2B":
            case "R.489 Cat 3":
            case "R.489 Cat 4":
            case "R.489 Cat 5":
            case "R.489 Cat 6":
            case "R.490 cat 1":
            case "R. 490 cat 2":
            case "R. 484 cat 1":
            case "R. 484 cat 2":
            case "R.485 cat 1":
            case "R.485 cat 2":    
            case "HAYON":
                return <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin, numero: 1}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                ;
                break;   

            case "BOM":
                return <div>
                            <h3>Rapport de Compacteur</h3>
                            <h4>Périodicité : 3 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                ;
                break;     

            case "PE 1":
            case "PE 2":
            case "PE 3":
            case "PE P":
            case "PEG 4":
            case "PEG C":
            case "PE C":
                return <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 12 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                ;
                break;  

            case "MM C":
            case "MM P":
            case "MM CH":
            case "MM A":
                return <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
            ;
                break;         

            case "R. 490C PL": 
            case "R. 490C VL":
                return <>
                        <div>
                            <h3>Rapport de Compacteur</h3>
                            <h4>Périodicité : 3 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </>
                ;
                break;

            case "R. 490G PL": 
            case "R. 490G VL":
                return <>
                        <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <h3>Rapport de Levage</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </>
                break;            

            case "R. 487 Cat 1":
            case "R. 487 Cat 2":
            case "R. 487 Cat 3":
            case "R. 483m A":
            case "R. 483m B": 
                return <div>
                            <h3>Rapport de Levage Grue</h3>
                            <h4>Périodicité : 6 mois</h4>
                            <Link to="/create-vgp" state={{entreprise: entreprise, engin: engin}}>
                                <div data-create>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>;
                break;

            default: return <div><h3>Pas de VGP trouvés pour cette Identifiant de catégorie</h3></div>;
        }
    }


    return ( 
        <Layout>
            <Previous />
            <div data-fsapWrapper>
                <h1> VGP : {entreprise.title} - {engin.nom}</h1>
                <p>{engin.catID}</p>
                <div data-fsapGrid>
                    {typeRapport()}
                </div>
            </div>
        </Layout>
     );
}

export default VGP;