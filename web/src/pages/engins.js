import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import * as styles from "../styles/fsap.css";
import {Link} from "gatsby";
import Previous from '../components/previous/previous';
import axios from 'axios';



const Engins = () => {


    const entreprise = typeof window !== "undefined" && window.history.state.entreprise
    const engins = typeof window !== "undefined" && window.history.state.engins
    const bdd = entreprise.idbdd
    const [tableEngin, setTableEngin] = useState([]);
    const [entrepriseId, setEntrepriseId] = useState(entreprise._id)




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
                    console.log(response.data.data)
                    const enginindiv = {
                          _id: "99" + response.data.data[i].id, // obligatoire pour le create if not exist. On rajoute le prefix numérique '99' pour éviter les doublons 
                          _type: 'enginsAPI',
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
                          dernierVGP: response.data.data[i].date_dernier_VGP,
                          slug: `${entreprise.title}/${response.data.data[i].nom}`,
                            entreprise: {
                                _type: 'reference',
                                _ref: entrepriseId,
                            },
                      }
                        // console.log(enginindiv)
                        // create(enginindiv)
                    //   const index = tableEngin.findIndex(object => object.numero_serie === enginindiv.numero_serie);

                    //     if (index === -1) {
                    //      tableEngin.push(enginindiv);
                    //      console.log(tableEngin)
                    //     }
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
                <h1> Liste des engins : {entreprise.title} </h1>
                <div data-fsapGrid>
                    <button onClick={getengins}>Ici</button>
                    {
                        engins.edges.map(
                            i => 
                            <div data-item>
                                    <Link to="/vgp" state={{engin: i, entreprise: entreprise}}>
                                        <ul> 
                                            <li>{i.node.nom}</li>
                                            <li>{i.node.catID}</li>
                                            <li>{i.node.catEngin}</li>
                                            <li>Date de mise en circulation : {i.node.circulation}</li>
                                            <li>Dernier VGP : {i.node.dernierVGP}</li>
                                        </ul> 
                                    </Link> 
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
     );
}

export default Engins;