import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import {Link} from "gatsby";
import Previous from '../components/previous/previous';
import axios from 'axios';


const Engins = () => {


    const entreprise = typeof window !== "undefined" && window.history.state.entreprise
    const bdd = entreprise.idbdd
    const [tableEngin, setTableEngin] = useState([]);


    function getengins() {
        axios.post('https://api.dev.evrpro.com/login', {
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
          },
          'email' : 'jiann@koalita.corsica',
          'password' : 'wBoCqT1k',
        })
        .then(function (response) {
            // handle success
            // console.log(response)
            const tokenus = "Bearer " + response.data.token
            // on enchaine avec la requete
            axios.get('https://api.dev.evrpro.com/societes/' + bdd + '/engins', {
                headers: {
                    'Authorization' : tokenus,
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                },
              })
              .then(function (response) {
  
                const sanityClient = require('@sanity/client')
                const client = sanityClient({
                  projectId: 'zpdf06rn',
                  dataset: 'production',
                  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
                  token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
                })
                
                
                  // handle success
                  for(var i in response.data.data){
  
                    const enginindiv = {
                          nom: response.data.data[i].nom,
                          marque: response.data.data[i].marque,
                          catID: response.data.data[i].categorie.identifiant,
                          catFamille: response.data.data[i].categorie.famille,
                          catEngin: response.data.data[i].categorie.engin,
                          numero_serie: response.data.data[i].numero_serie,
                          immatriculation: response.data.data[i].immatriculation,
                          achat: response.data.data[i].date_achat,
                          circulation: response.data.data[i].date_mise_en_circulation,
                          dernierCT: response.data.data[i].date_dernier_CT,
                          dernierVGP: response.data.data[i].date_dernier_VGP
                      }
                      tableEngin.push(enginindiv)
                  }
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              });
   
        })
        .catch(function (error) {
            // handle error
            console.log("err : " + error);
        });
      }

    return ( 
        <Layout>
            <Previous />
            <div data-fsapWrapper>
                <h1> VGP/{entreprise.title} </h1>
                <h1>{entreprise.sanityId}</h1>
                <div data-fsapGrid>
                    {getengins()}
                        {
                        tableEngin.map(function(item, i) {
                            <button>Hey</button>
                        })
                        }
                        <Link to="/create-vgp" 
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
            {/* <div data-item>
                                <Link to="{`/VGP/${item.node.slug}`}" >
                                <div data-main>
                                    <p> Nom : {item.node.nom} </p> 
                                    <p> Marque : {item.node.marque} </p>
                                </div>
                                </Link>
                                <div data-icons1>
                                    <Link data-search to="{`/VGP/${item.node.slug}`}" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{cursor: 'pointer', transform: 'scale(1.1)'}} viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{cursor: 'pointer', transform: 'scale(1.1)'}} viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                    </svg>
                                </div>
                            </div> */}
        </Layout>
     );
}

export default Engins;