import React, {useEffect, useState} from 'react';
import * as styles from "../styles/vgp.css";
import { graphql } from "gatsby";
import logo from "../assets/logo.png";
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import ChariotElevateur from '../components/VGPTypes/chariotElevateur';
import Nacelle from '../components/VGPTypes/nacelle';
import Pelle from '../components/VGPTypes/pelle';
import Hayon from '../components/VGPTypes/hayon';
import Previous from '../components/previous/previous';
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

export const query = graphql`
query Pictos2 {
    allSanityEpis {
      edges {
        node {
          _id
          title
          image {
            asset {
              url
            }
          }
        }
      }
    }
    allSanityPictosD {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityPictosI {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityPictosO {
        edges {
          node {
            title
            _id
            picto {
              asset {
                url
              }
            }
          }
        }
      }
      allSanityCompany {
        edges {
          node {
            _id
            id
            title
          }
        }
      }
  }
`

const VGP = (props, location) => {
    // les variables de content from studio
    let log = console.log;
    let data = props.data.allSanityEpis.edges
    let dangers = props.data.allSanityPictosD.edges
    let interdictions = props.data.allSanityPictosI.edges
    let obligations = props.data.allSanityPictosO.edges
    
    let entrepriseData = typeof window !== "undefined" && window.history.state.data

    // Tout les variables d'etat
    const [version, setVersion ] = useState("")
    const [entreprise, setEntreprise ] = useState(entrepriseData.title)
    const [entrepriseId, setEntrepriseId] = useState(entrepriseData._id)
    const [fiche, setFiche] = useState("")
    const [machine, setMachine] = useState("")
    const [machineCat, setMachineCat] = useState("")
    const [caractMachine, setCaractMachine] = useState("")
    const [materials, setMaterials] = useState("")
    const [date, setDate] = useState("")
    const [type, setType] = useState("")
    const [legend, setLegend] = useState([]);
    const [epiData, setEpiData] = useState([]);
    const [epiPreview, setEpiPreview] = useState([]);
    const [dangersData, setDangersData] = useState([]);
    const [dangersPreview, setDangersPreview] = useState([]);
    const [interdictionsData, setInterdictionsData] = useState([]);
    const [interdictionsPreview, setInterdictionsPreview] = useState([]);
    const [taches, setTaches] = useState([])
    const [tachesPreview, setTachesPreview] = useState([])
    const [formation, setFormation] = useState("")
    const [qualifications, setQualifications] = useState("")
    const [tachesPicto, setTachesPicto] = useState([])
    const [tachesPictoPreview, setTachesPictoPreview] = useState([])
    const [clicks, setClicks] = useState(1)
    const [quand, setQuand] = useState("")
    const [quelle, setQuelle] = useState("")
    const [qui, setQui] = useState("")
    const [mesures, setMesures] = useState("")
    const [changed, setChanged] = useState("")
    const [logoSrc, setLogoSrc] = useState("")
    const [options, setOptions] = useState([])

  

    // Crée l'object pour envoyer au studio
    function handleSubmit1() {

        const doc = {
            _type: 'VGP',
            version: version,
            fichedeposte: fiche,
            slug: `${entreprise}/${fiche}`,
            entreprise: {
                _type: 'reference',
                _ref: entrepriseId,
            },
            miseenservice: date,
            machine: machine,
            marque: machineCat,
            caract: caractMachine,
            produits: materials,
            type: type,
            legend: legend,
            tache: taches,
            qualifications: qualifications,
            formation: formation
        }
    }

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
            console.log(response)
            const tokenus = "Bearer " + response.data.token
            // on enchaine avec la requete
            axios.get('https://api.dev.evrpro.com//categories/engin', {
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
  
                    // const doc = {
                    //       _id: "22" + response.data.data[i].id, // obligatoire pour le create if not exist. On rajoute le prefix numérique '22' pour éviter les doublons 
                    //       id:response.data.data[i].id, // On a le champs "ID dans la BDD", juste au cas ou, en controle
                    //       _type: 'company',
                    //       title: response.data.data[i].raison_sociale,
                    //       statut: response.data.data[i].statut_juridique,
                    //       gerant: response.data.data[i].gerants.name,
                    //       activite: response.data.data[i].activite.activite,
                    //       code: response.data.data[i].activite.code,
                    //       division: response.data.data[i].activite.division,
                    //       code_postal: response.data.data[i].adresse.code_postal,
                    //       rue: response.data.data[i].adresse.rue,
                    //       ville: response.data.data[i].adresse.ville,
                    //       email: response.data.data[i].contact.email,
                    //       fax: response.data.data[i].contact.fax,
                    //       telephone: response.data.data[i].contact.telephone
                    //   }
                      
                      console.log(response.data.data[i])
                     // client.createIfNotExists(doc)
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
        <h1> VGP </h1>
        <button onClick={getengins}>API Test log</button>
        <div data-vgpContainer>
            <div data-form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <select onChange={(e) => setType(e.target.value)}> 
                <option> Type de controlle </option>
                <option value="chariot"> Chariot Elevateur </option>
                <option value="nacelle"> Nacelle </option>
                <option value="pelle"> Pelle </option>
                <option value="hayon"> Hayon Elevateur </option>
            </select>
            {type == "chariot" ?
                <ChariotElevateur />
                :
                <>
                    {type == "nacelle"
                    ?
                    <Nacelle />
                    :
                    <>
                    {type == "pelle"
                    ?
                        <>
                            <Pelle />
                        </>
                        :
                        <>
                        {type == "hayon" ?
                            <>
                            <Hayon />
                            </>
                        :
                        <>
                        </>
                        }
                        </>
                    }
                    </>
                    }
                </>
                
            }
            </div>
            <div data-preview>
                <div>
                {/* // id={styles.capture} */}
                    <div data-vgp id="main">
                        <div data-header>
                            <img src={logo} alt="" width="491" />
                            <h1>VERIFICATION REGLEMENTAIRE DES CHARIOTS ELEVATEURS</h1>
                        </div>
                        <div data-mainbody>
                            <div data-section1></div>
                            <div data-section2>
                                <div data-infosG>
                                            <div>Date</div>
                                            <div></div>
                                            <div>N° CLIENT</div>
                                            <div></div>
                                            <div>N° RAPPORT</div>
                                            <div></div>
                                            <div>N° CONTRÔLE</div>
                                            <div></div>
                                            <div>PROCHAINE VÉRIFICATION</div>
                                            <div></div>

                                </div>
                                <div data-checked>
                                    <div><input type="checkbox" />Vérification de mise en service</div>
                                    <div><input type="checkbox" />Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27)</div>
                                    <div><input type="checkbox" />Vérification de remise en service</div>
                                </div>
                            </div>
                            <div data-section3>
                                <p>Selon les Articles R.4323-22 à R.4323-28 du code du travail et arrêté du 1er mars 2004 relatif aux vérifications des appareils de levage.</p>
                                <p><b>R… Recommandations d’utilisation qui définissent les conditions d’obtention du certificat d’aptitude à la conduite en sécurité</b></p>
                            </div>
                            <div data-section4>
                                <div data-docob>
                                        <div>DOCUMENT OBLIGATOIRE REMPLI ET FOURNI</div>
                                        <div>Certifcat de conformité + épreuve de mise en service</div>
                                        <div></div>
                                        <div>Manuel d’Utilisation (Art. R4323-1 du C.T.)</div>
                                        <div></div>
                                        <div>Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.)</div>
                                        <div></div>
                                        <div>Carnet de Maintenance (ArtR4323-19,20 du C.T.)</div>
                                        <div></div>
                                        <div>Registre de sécurité (Art. R.4323-26, 27 du C.T.)</div>
                                        <div></div>
                                </div>
                                <div data-resp>
                                    <div>RESPONSABLE DE L’APPAREIL</div>
                                    <div>SIGNATURE</div>
                                    <div>Nom et société :</div>
                                    <div></div>
                                </div>
                            </div>
                            <div data-section5>
                                    <div>IDENTIFICATION DE L’APPAREIL</div>
                                        <div>Marque</div>
                                        <div></div>
                                        <div>Modèle</div>
                                        <div></div>
                                        <div>N° de série</div>
                                        <div></div>
                                        <div>Catégorie</div>
                                        <div></div>
                                        <div>Accesoire</div>
                                        <div></div>
                                        <div>Charge maxi de levage</div>
                                        <div></div>
                                        <div>Année de fabrication</div>
                                        <div></div>
                                        <div>Marquage CE</div>
                                        <div></div>
                                        <div>Compteur horamètre</div>
                                        <div></div>
                            </div>
                            <div data-section6>
                                        <div>REMARQUES</div>
                                        <div>Si les défaults sont susceptibles d’engendrer un danger, il est conseillé au contrôleur de le notifier au propriétaire de l’appareil par courrier recommandé</div>
                                        <div data-trait>N°</div>
                                        <div data-trait>Défauts auxquels il faut absolument remédier :</div>
                                        <div data-trait>N°</div>
                                        <div>Défauts auxquels il faut absolument remédier :</div>
                                        <div data-trait data-loc="1 1"></div>
                                        <div data-trait data-loc="1 2"></div>
                                        <div data-trait data-loc="1 3"></div>
                                        <div data-loc="1 4"></div>
                                        <div data-trait data-loc="2 1"></div>
                                        <div data-trait data-loc="2 2"></div>
                                        <div data-trait data-loc="2 3"></div>
                                        <div data-loc="2 4"></div>
                                        <div data-trait data-loc="3 1"></div>
                                        <div data-trait data-loc="3 2"></div>
                                        <div data-trait data-loc="3 3"></div>
                                        <div data-loc="3 4"></div>
                                        <div data-trait data-loc="4 1"></div>
                                        <div data-trait data-loc="4 2"></div>
                                        <div data-trait data-loc="4 3"></div>
                                        <div data-loc="4 4"></div>
                                        <div data-trait data-loc="5 1"></div>
                                        <div data-trait data-loc="5 2"></div>
                                        <div data-trait data-loc="5 3"></div>
                                        <div data-loc="5 4"></div>
                                        <div data-trait data-loc="6 1"></div>
                                        <div data-trait data-loc="6 2"></div>
                                        <div data-trait data-loc="6 3"></div>
                                        <div data-loc="6 4"></div>
                            </div>
                            <div data-section7>
                                <div data-appcon>
                                    <p>L’appareil peut etre utilisé par l’opérateur : <span data-usable></span></p>
                                    <p>Une contre visite sera obligatoire : <span data-ctrv></span></p>
                                </div>
                                <div data-controleur>
                                    <div><b>LE CONTRÔLEUR</b></div>
                                    <div><i>David Gibert</i></div>
                                    <div><b>Société :</b> EvR.Pro</div>
                                </div>
                                <p data-annex>Rappel : Le chef d’établissement doit consigner le résultat des vérifications règlementaire, sur le registre de sécurité prévu à l’article L.4711-5 du C.T. et tenir à jour le carnet de maintenance prévu aux articles R.4323-19 du C.T.</p>
                            </div>
                            <div data-section8>
                                <h3>CONFORME A LA REGLEMENTATION EN VIGUEUR</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </Layout>
     );
}

export default VGP;