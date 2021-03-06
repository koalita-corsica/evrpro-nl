/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import Layout from "../containers/layout";
import { Link } from "gatsby";
import axios from 'axios';


import * as styles from "../styles/home.css";



export const query = graphql`
  query Home {
    allSanityCompany {
      edges {
        node {
          _id
          title
          email
          activite
          logo {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;


const IndexPage = (props) => {
  const { data, errors } = props;
  const company = data.allSanityCompany.edges;
  let log = console.log;


  function recherche(input) {
    const inputSearch = input.target.value.toLowerCase();
    const filtered = Array.from(document.querySelectorAll(`[data-entreprise]`));
    for (var i = 0; i < filtered.length; i++) {
      let nom = filtered[i].dataset.entreprise.toLowerCase();
      let parent = filtered[i].parentNode ;
      if (nom.includes(inputSearch)){
        parent.dataset.vue="up";
      } else {
        parent.dataset.vue="down";
      }
    }
    //  log("hey : " + filtered.dataset.entreprise);

  }
  // function createCompany() {
  //   axios.get('https://api.dev.evrpro.com/societes/', {
  //     headers: {
  //         'Authorization' : 'Bearer 8|oGHdJjQo7UTHeaJb6v8jGccSG4k5DHRg3n3pMGxX',
  //         'Content-Type' : 'application/json',
  //         'Accept' : 'application/json',
  //     }
  //   })
  //   .then(function (response) {
  //       // handle success
  //       for(var i in response.data.data){
  
  
  //        const concat = concat('22 ', response.data.data[i].id);
  //           const doc = {
  //               _id: concat,
  //               _type: 'company',
  //               title: response.data.data[i].raison_sociale,
  //               statut: response.data.data[i].statut_juridique,
  //               gerant: response.data.data[i].gerants.name,
  //               activite: response.data.data[i].activite.activite,
  //               code: response.data.data[i].activite.code,
  //               division: response.data.data[i].activite.division,
  //               code_postal: response.data.data[i].adresse.code_postal,
  //               rue: response.data.data[i].adresse.rue,
  //               ville: response.data.data[i].adresse.ville,
  //               email: response.data.data[i].contact.email,
  //               fax: response.data.data[i].contact.fax,
  //               telephone: response.data.data[i].contact.telephone
  //           }
            
  //           console.log(doc)
  //          // client.createIfNotExists(doc)
  //       }
  //   })
  //   .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //   });
  // }

  function logzog() {
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
          console.log(response)
          const tokenus = "Bearer " + response.data.token
          // on enchaine avec la requete
          axios.get('https://api.dev.evrpro.com/societes', {
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

                  const doc = {
                        _id: "22" + response.data.data[i].id, // obligatoire pour le create if not exist. On rajoute le prefix num??rique '22' pour ??viter les doublons 
                        id:response.data.data[i].id, // On a le champs "ID dans la BDD", juste au cas ou, en controle
                        idbdd:response.data.data[i].id, // Duplique parce que "ID" c'est pas ouf
                        _type: 'company',
                        title: response.data.data[i].raison_sociale,
                        statut: response.data.data[i].statut_juridique,
                        gerant: response.data.data[i].gerants.name,
                        activite: response.data.data[i].activite.activite,
                        code: response.data.data[i].activite.code,
                        division: response.data.data[i].activite.division,
                        code_postal: response.data.data[i].adresse.code_postal,
                        rue: response.data.data[i].adresse.rue,
                        ville: response.data.data[i].adresse.ville,
                        email: response.data.data[i].contact.email,
                        fax: response.data.data[i].contact.fax,
                        telephone: response.data.data[i].contact.telephone
                    }
                    
                    console.log(doc)
                    client.createIfNotExists(doc)
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
          <label>Filtrer les entreprises : <input type="text" onKeyUp={recherche} /></label>
          <button onClick={logzog}>API Test log</button>
          <div data-homewrapper >
            <div data-gridhome>              
              {company.map((item, i) =>
              <Link to={`/entreprise/${item.node.title}`}  data-vue="up">
                <div data-item data-entreprise={item.node.title}>
                  <img src="https://images.unsplash.com/photo-1556800287-e594b229b561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80" alt={`logo de ${item.node.title}`} width="200" />
                  <div>
                    <ul>
                      <li><strong>{item.node.title.length > 25 && item.node.title.substring(0,22) + "..."}{item.node.title.length < 26 && item.node.title}</strong></li>
                      <li> <i>{item.node.activite.length > 50 && item.node.activite.substring(0,50) + "..."}{item.node.activite.length < 50 && item.node.activite}</i></li>
                      <li>{item.node.email}</li>
                    </ul>
                  </div>
                  
                </div>
              </Link>
              )}
            </div>
          </div>
        </Layout>
  );
};

export default IndexPage;
