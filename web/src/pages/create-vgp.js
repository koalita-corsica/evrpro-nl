import React, {useEffect, useState} from 'react';
import * as styles from "../styles/vgp.css";
import { graphql } from "gatsby";
import logo from "../assets/logo.png";
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import RapportVGP from '../components/VGPTypes/rapportvgp';
import Previous from '../components/previous/previous';
import { set } from 'react-hook-form';
const sanityClient = require('@sanity/client');
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
      allSanityPictosEngins {
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
    
    const engin = typeof window !== "undefined" && window.history.state.engin
    const entrepriseData = typeof window !== "undefined" && window.history.state.entreprise
    const numero = typeof window !== "undefined" && window.history.state.numero
    
    const pictosEngins = props.data.allSanityPictosEngins.edges

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

    
    // State globaux

    const [typeverif, setTypeVerif] = useState("")
    const [certif, setCertif] = useState("")
    const [manuel, setManuel] = useState("") 
    const [rapportPrec, setRapportPrec] = useState("") 
    const [carnet, setCarnet] = useState("") 
    const [registre, setRegistre] = useState("") 


    // State rapport 1

    const [allPB, setAllPB] = useState([])

    const [source, setSource] = useState([""])
    const [probs, setProbs] = useState([{}])
    const [chassis, setChassis] = useState([
      {nom: 'chassis', etat: "", detail: ""},
      {nom: 'organe', etat: "", detail: ""},
      {nom: 'devers', etat: "", detail: ""},
      {nom: 'arrimage', etat: "", detail: ""},
      {nom: 'verrouillage', etat: "", detail: ""}
    ])
    const [charpente, setCharpente] = useState([
      {nom: 'ossature', etat: "", detail: ""},
      {nom: 'fleche', etat: "", detail: ""},
      {nom: 'contrepoid', etat: "", detail: ""},
      {nom: 'accesentretien', etat: "", detail: ""}
    ])
    const [cabine, setCabine] = useState([
      {nom: 'accescabine', etat: "", detail: ""},
      {nom: 'constitution', etat: "", detail: ""},
      {nom: 'structureprot', etat: "", detail: ""},
      {nom: 'visibilite', etat: "", detail: ""},
      {nom: 'chauffage', etat: "", detail: ""},
      {nom: 'exctincteurcabine', etat: "", detail: ""},
      {nom: 'siegeretro', etat: "", detail: ""},
      {nom: 'ceinture', etat: "", detail: ""},
      {nom: 'eclairagecabine', etat: "", detail: ""}
    ])
    const [organes, setOrganes] = useState([
      {nom: 'identification', etat: "", detail: ""},
      {nom: 'retourneutre', etat: "", detail: ""},
      {nom: 'misenmarche', etat: "", detail: ""},
      {nom: 'condamnation', etat: "", detail: ""},
      {nom: 'autresarrets', etat: "", detail: ""},
      {nom: 'avertisseurs', etat: "", detail: ""},
      {nom: 'indicdevers', etat: "", detail: ""},
      {nom: 'autresorganes', etat: "", detail: ""}
    ])
    const [mecatrans, setMecatrans] = useState([
      {nom: 'mecanismes', etat: "", detail: ""},
      {nom: 'verinscanalisation', etat: "", detail: ""},
      {nom: 'protection',etat: "", detail: ""}
    ])
    const [translation, setTranslation] = useState([
      {nom: 'freinsTranslation', etat: "", detail: ""},
      {nom: 'securiteSiege', etat: "", detail: ""},
      {nom: 'feuxSignalisation', etat: "", detail: ""}
    ])
    const [orientation, setOrientation] = useState([
      {nom: 'mecanismeOrientation', etat: "", detail: ""},
      {nom: 'freinsOrientation', etat: "", detail: ""},
      {nom: 'limiteurOrientation', etat: "", detail: ""},
      {nom: 'dispositifiImmobilisation', etat: "", detail: ""}
    ])
    const [equipoutils, setEquipoutils] = useState([
      {nom: 'equipoutils', etat: "", detail: ""}
    ])
    const [disposdiverses, setDisposdiverses] = useState([
      {nom: 'tableauCharge', etat: "", detail: ""},
      {nom: 'consignesSecu', etat: "", detail: ""},
      {nom: 'eclairageIncorpore', etat: "", detail: ""},
      {nom: 'masseCapa', etat: "", detail: ""},
      {nom: 'idRepere', etat: "", detail: ""},
      {nom: 'noticeConfo', etat: "", detail: ""}
    ])

    const fullReport = chassis.concat(charpente, cabine, organes, mecatrans, translation, orientation, equipoutils, disposdiverses)

   
    // https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react

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


    return (
        <Layout>
        <Previous />
        <div data-vgpContainer>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <RapportVGP 
              numero={numero}
              typeVerif={setTypeVerif} 
              certif={setCertif} 
              manuel={setManuel} 
              rapportPrec={setRapportPrec} 
              carnet={setCarnet}
              registre={setRegistre}
              source={setSource}
              chassis={chassis}
              setChassis={setChassis}
              charpente={charpente}
              setCharpente={setCharpente}
              cabine={cabine}
              setCabine={setCabine}
              organes={organes}
              setOrganes={setOrganes}
              mecatrans={mecatrans}
              setMecatrans={setMecatrans}
              translation={translation}
              setTranslation={setTranslation}
              orientation={orientation}
              setOrientation={setOrientation}
              equipoutils={equipoutils}
              setEquipoutils={setEquipoutils}
              disposdiverses={disposdiverses}
              setDisposdiverses={setDisposdiverses}

              />
            </div>
            <div data-preview>
                <div>
                {/* // id={styles.capture} */}
                    <div data-vgp id="main">
                        <div data-header>
                            <img src={logo} alt="" width="491" />
                            <h1>VERIFICATION REGLEMENTAIRE DES {engin.catEngin}</h1>
                        </div>
                        <div data-mainbody>
                            <div data-section1>
                            </div>
                            <div data-section2>
                                <div data-infosG>
                                            <div>Date</div>
                                            <div></div>
                                            <div>N° CLIENT</div>
                                            <div>{version}</div>
                                            <div>N° RAPPORT</div>
                                            <div></div>
                                            <div>N° CONTRÔLE</div>
                                            <div></div>
                                            <div>PROCHAINE VÉRIFICATION</div>
                                            <div>{typeverif}</div>

                                </div>
                                <div data-checked>
                                    <div>{typeverif == "miseEnService" ? <input type="checkbox" checked /> : <input type="checkbox" />}Vérification de mise en service</div>
                                    <div>{typeverif == "periodique" ? <input type="checkbox" checked /> : <input type="checkbox" />}Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27)</div>
                                    <div>{typeverif == "remiseEnService" ? <input type="checkbox" checked /> : <input type="checkbox" />}Vérification de remise en service</div>
                                </div>
                            </div>
                            <div data-section3>
                                <p>Selon les Articles R.4323-22 à R.4323-28 du code du travail et arrêté du 1er mars 2004 relatif aux vérifications des appareils de levage.</p>
                                <p><b>R… Recommandations d’utilisation qui définissent les conditions d’obtention du certificat d’aptitude à la conduite en sécurité</b></p>
                            </div>
                            <div data-section4>
                                <div data-docob>
                                        <div>DOCUMENT OBLIGATOIRE REMPLI ET FOURNI</div>
                                        <div>Certificat de conformité + épreuve de mise en service</div>
                                        <div>{certif}</div>
                                        <div>Manuel d’Utilisation (Art. R4323-1 du C.T.)</div>
                                        <div>{manuel}</div>
                                        <div>Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.)</div>
                                        <div>{rapportPrec}</div>
                                        <div>Carnet de Maintenance (ArtR4323-19,20 du C.T.)</div>
                                        <div>{carnet}</div>
                                        <div>Registre de sécurité (Art. R.4323-26, 27 du C.T.)</div>
                                        <div>{registre}</div>
                                </div>
                                <div data-resp>
                                    <div>RESPONSABLE DE L’APPAREIL</div>
                                    <div>SIGNATURE</div>
                                    <div>Nom et société : <br />
                                    {entreprise}
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div data-section5>
                                    <div>IDENTIFICATION DE L’APPAREIL</div>
                                        <div>Marque</div>
                                        <div>{engin.marque}</div>
                                        <div>Modèle</div>
                                        <div>{engin.nom}</div>
                                        <div>N° de série</div>
                                        <div>{engin.numero_serie}</div>
                                        <div>Catégorie</div>
                                        <div>{engin.catEngin}</div>
                                        <div>Accessoire(s)</div>
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
                                        {fullReport.filter(item => item.etat === 'def').map((filteredList, index) => (
                                          <>
                                            <div data-trait data-loc="1 1">{index + 1}</div>
                                            <div data-trait data-loc="1 2">{filteredList.detail}</div>
                                          </>
                                        ))}
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