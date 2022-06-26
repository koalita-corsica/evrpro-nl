import React, {useEffect, useState} from 'react';
import { graphql } from "gatsby";
import * as styles from "../components/Livret/livret.module.css"
import logo from "../assets/logoL.png";
import logoN from "../assets/logoLN.png";
import diplomeN from "../assets/diplomeN.png"
import diplomeB from "../assets/diplomeB.png"
import manger from "../assets/manger.png"
import alcool from "../assets/alcool.png"
import drogue from "../assets/drogue.png"
import ivresse from "../assets/ivresse.png"
import phoneA from "../assets/phoneA.png"
import feu from "../assets/feu.png"
import secourisme from "../assets/secourisme.png";
import evacuation from "../assets/evacuation.png";
import feuM from "../assets/feuM.png";
import PortableText from "../components/portableText";
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

export const query = graphql`
query PictosLivret {
    allSanityEpis {
      edges {
        node {
          _id
          title
          description {
            children {
              text
            }
          }
          image {
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
      allSanityRisques {
        edges {
          node {
            _id
            title
            picto {
              asset {
                url
              }
            }
            warn {
              asset {
                url
              }
            }
            _rawP1
            _rawP2
            _rawP3
            _rawP4
            sensi
          }
        }
      }
}
`

const LivretAPI = (props) => {
    let log = console.log;
    let data = props.data.allSanityEpis.edges
    let wRisques = props.data.allSanityRisques.edges
    let companys = props.data.allSanityCompany.edges;

    let entrepriseData = typeof window !== "undefined" && window.history.state.data

    //variables globals
    const [entreprise, setEntreprise ] = useState(entrepriseData.title)
    const [entrepriseId, setEntrepriseId] = useState(entrepriseData._id)
    const [couverture, setCouverture] = useState([{}])
    const [renseigments, setRenseigments] = useState({})
    const [regles, setRegles] = useState([])
    const [infos, setInfos] = useState({})
    const [equipment, setEquipment] = useState([])
    const [epiData, setEpiData] = useState([]) 
    const [epiPreview, setEpiPreview] = useState([]) 
    const [incendie, setIncendie] = useState({})
    const [risques, setRisques] = useState([])
    const [risquesData, setRisquesData] = useState([])
    const [risquesPreview, setRisquesPreview] = useState([])

    //variables couverture
    const [precision, setPrecision] = useState("")
    const [texte, setTexte] = useState("")
    const [version, setVersion] = useState("")
    const [adresse, setAdresse] = useState(entrepriseData.rue + " " + entrepriseData.ville + " " + entrepriseData.code_postal)
    const [telephone, setTelephone] = useState(entrepriseData.telephone)
    const [mail, setMail] = useState(entrepriseData.email)

    //variables Renseignements
    const [gerant, setGerant] = useState("")
    const [activite, setActivite] = useState(entrepriseData.activite)
    const [nbSalaries, setNbSalaries] = useState("")
    const [codeRisque, setCodeRisque] = useState("")
    const [taux, setTaux] = useState("")
    const [docUnique, setDocUnique] = useState("")
    const [affObligatoire, setAffObligatiore] = useState("")
    const [affPrevention, setAffPrevention] = useState("")
    const [affCovid, setAffCovid] = useState("")
    const [unite, setUnite] = useState("")

    //variables infos
    const [fonction, setFonction] = useState("")
    const [nom, setNom] = useState("")
    const [telephoneInfo, setTelephoneInfo] = useState("")

    //variables Incendie
    const [evacuer, setEvacuer] = useState("")
    

    // Creation de l'object pour envoyer a sanity
    function handleSubmit1() {

        const doc = {
            _type: 'livretsAPI',
            title: {
                _type: 'reference',
                _ref: entrepriseId,
            },
            slug: `${entreprise}`,
            wRisques: risquesData,
            "precision": precision,
            "texte": texte,
            "version": version,
            "adresse": adresse,
            "numero": telephone,
            "mail": mail,
            "gerant": gerant,
            "activite": activite,
            "nbSalaries": nbSalaries,
            "codeRisque": codeRisque,
            "taux": taux,
            "documentUnique": docUnique,
            "affObligatoire": affObligatoire,
            "affPrevention": affPrevention,
            "affCovid": affCovid,
            "unite": unite,
            "evacuer": evacuer,
            livret: [
                {
                    "_type": "regles",
                    "infos": regles
                },
                {
                    "_type": "equipement",
                    "epi": epiData 
                },
            ]
        }

        client.create(doc).then((res) => {
            console.log(`Doc was created, document ID is ${res._id}`)

            document.getElementById("logo").toBlob(uploadImage1, 'image/png')

            function uploadImage1(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        logo: {
                            _type: 'image',
                            asset: {
                                _type: "reference",
                                _ref: imageAsset._id
                            }
                        }
                      })
                      .commit()
                  })
                  .catch((error) => {
                    console.error('Upload failed:', error.message)
                  })
              }

            document.getElementById("plandacces").toBlob(uploadImage2, 'image/png')

            function uploadImage2(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        plandacces: {
                            _type: 'image',
                            asset: {
                                _type: "reference",
                                _ref: imageAsset._id
                            }
                        }
                      })
                      .commit()
                  })
                  .catch((error) => {
                    console.error('Upload failed:', error.message)
                  })
              }


            document.getElementById("partenaire").toBlob(uploadImage3, 'image/png')

            function uploadImage3(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        partn: {
                            _type: 'image',
                            asset: {
                                _type: "reference",
                                _ref: imageAsset._id
                            }
                        }
                      })
                      .commit()
                  })
                  .catch((error) => {
                    console.error('Upload failed:', error.message)
                  })
              }
            
          })

    }    

    function handleImage(event){
        var canvas = document.getElementById('logo');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function handleImagePlan(event){
        var canvas = document.getElementById('plandacces');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }


    function handleImagePartenaire(event){
        var canvas = document.getElementById('partenaire');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function createCouverture() {
        setCouverture({"precision": precision, "texte": texte, "version": version, "adresse": adresse, "numero": telephone, "mail": mail})
        log(couverture)
    }

    function createRenseignements() {
        setRenseigments({"gerant": gerant, "activite": activite, "nbSalaries": nbSalaries, "codeRisque": codeRisque, "taux": taux, "documentUnique": docUnique, "affObligatoire": affObligatoire, "affPrevention": affPrevention, "affCovid": affCovid, "unite": unite})
        log(renseigments)
    }

    function createInfos() {
        let newElem = {"function": fonction, "value": nom, "numero": telephoneInfo}
        setRegles(regles => [...regles, newElem])
        log(regles)
    }

    //Pour choisir les pictos EPI pour la preview et pour le studio 
    function actionEPI(item) {
        var elemPreview = {"image": item.node.image.asset.url, "title": item.node.title, "texte": item.node.description[0].children[0].text}
        var elemData = {"_type": "reference", "_ref": item.node._id}
        if(!epiData.includes(item.node.id)) {
            setEpiData(epiData => [...epiData, elemData])
            setEpiPreview(epiPreview => [...epiPreview, elemPreview])
        } else {
            epiData.splice(epiData.indexOf(item.node._id), 1); 
            epiPreview.splice(epiPreview.indexOf(item.node.image.asset.url), 1); 
        }
    }

    function createIncendie() {
        setIncendie({"evacuer": evacuer})
    }

    //Pour choisir les pictos EPI pour la preview et pour le studio 
    function actionRisques(item) {
        let previewElem = {"image": item.node.picto.asset.url, "sensi": item.node.sensi, "title": item.node.title, "warn": item.node.warn, "p1": item.node._rawP1, "p2": item.node._rawP2, "p3": item.node._rawP3, "p4": item.node._rawP4}
        let dataElem = {"_type": "reference", "_ref": item.node._id}
        if(!risquesData.includes(item.node.id)) {
            setRisquesData(risquesData => [...risquesData, dataElem])
            setRisquesPreview(risquesPreview => [...risquesPreview, previewElem])
        } else {
            risquesData.splice(risquesData.indexOf(item.node._id), 1); 
            risquesPreview.splice(risquesPreview.indexOf(item.node.image.asset.url), 1); 
        }
        log(risquesPreview)
    }

    const monthNames = {0 : "Janvier", 1 : "Février", 2 : "Mars" , 3 : "Avril", 4 : "Mai", 5 : "Juin",
    6 : "Juillet", 7  : "Août", 8 : "Septembre", 9 : "Octobre", 10 : "Novembre", 11 : "Décembre"
  };
  
    const d = new Date();

    return (
        <>  
            <h1> Livret d'Accueil API </h1>
            <div data-livretContainer>
                <div data-form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <fieldset>
                        <legend>Couverture</legend>
                        <div data-couverture>
                        <details>
                            <summary> Page de garde </summary>
                            <div data-logo12>
                                <input type="file" name="image" onChange={(e) => handleImage(e)}/>
                            </div>
                            <div data-precision>
                                <label for="precision"> Precision </label>
                                <input name="precision" type="text" onChange={(event) => setPrecision(event.target.value)}/>
                            </div>  
                            <div data-text>
                                <label for="texte"> Description </label>
                                <input name="texte" type="text" onChange={(event) => setTexte(event.target.value)}/>
                            </div>  
                            <div data-version>
                                <label for="version"> Version </label>
                                <input name="version" type="text" onChange={(event) => setVersion(event.target.value)}/>
                            </div> 
                            <button onClick={createCouverture}> Valider </button>  
                        </details>
                    </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Renseigments
                        </legend>
                        <div data-renseigments>
                        <details>
                            <summary> Informations relatives à l'entreprise </summary>
                            <div data-salaries>
                                <label for="nbSalaries"> Nb de salariés </label>
                                <input name="nbSalaries" type="text" onChange={(event) => setNbSalaries(event.target.value)}/>
                            </div>  
                            <div data-codeRisque>
                                <label for="codeRisque"> Code Risque </label>
                                <input name="codeRisque" type="text" onChange={(event) => setCodeRisque(event.target.value)}/>
                            </div>  
                            <div data-taux>
                                <label for="taux"> Taux AT/MP </label>
                                <input name="taux" type="text" onChange={(event) => setTaux(event.target.value)}/>
                            </div>      
                            <div data-docUnique>
                                <label for="docUnique"> Document Unique </label>
                                <input name="docUnique" type="text" onChange={(event) => setDocUnique(event.target.value)}/>
                            </div>  
                            <div data-affObligatoire>
                                <label for="affObligatoire"> Aff. Obligatoire </label>
                                <input name="affObligatoire" type="text" onChange={(event) => setAffObligatiore(event.target.value)}/>
                            </div>  
                            <div data-affPrevention>
                                <label for="affPrevention"> Aff Prevention </label>
                                <input name="affPrevention" type="text" onChange={(event) => setAffPrevention(event.target.value)}/>
                            </div>      
                            <div data-affCovid>
                                <label for="affCovid"> Aff. COVID </label>
                                <input name="affCovid" type="text" onChange={(event) => setAffCovid(event.target.value)}/>
                            </div>  
                            <div data-unite>
                                <label for="unite"> Unité de Travail </label>
                                <input name="unite" type="text" onChange={(event) => setUnite(event.target.value)}/>
                            </div>
                            <input type="file" name="image" onChange={(e) => handleImagePlan(e)}/>     
                            <br />
                            <button onClick={createRenseignements}> Valider </button> 
                        </details>
                    </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                        Règles
                        </legend>
                        <div data-regles1>
                        <details>
                            <summary> Règles générales de sécurité </summary>
                            <div data-info>
                                <label for="fonction"> Fonction </label>
                                <input name="fonction" type="text" onChange={(event) => setFonction(event.target.value)}/>
                                <br />
                                <label for="nom"> Nom </label>
                                <input name="nom" type="text" onChange={(event) => setNom(event.target.value)}/>
                                <br />
                                <label for="tel"> Téléphone </label>
                                <input name="tel" type="text" onChange={(event) => setTelephoneInfo(event.target.value)}/>
                            </div>  
                            <button onClick={createInfos}> Valider </button> 
                        </details>
                    </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Équipement
                        </legend>
                        <div data-equipment>
                        <details>
                            <summary> Pictogrammes des EPIs </summary>
                            <div data-pictocontainer>
                            {data.map((item, i) => 
                            <>
                                <div data-minipicto>
                                    <label for={item.node.title}> <img src={item.node.image.asset.url} width="50" /> </label>
                                    <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.image.asset.url} onClick={() => actionEPI(item)} />
                                </div>
                            </>
                            )}
                            </div>
                        </details>
                    </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Incendie
                        </legend>
                        <div data-incendie1>
                        <details>
                            <summary> Section Incendie </summary>
                            <div data-evacuer>
                                <label for="evacuer"> Evacuer </label>
                                <input name="evacuer" type="text" onChange={(event) => setEvacuer(event.target.value)}/>
                            </div>
                            <input type="file" name="image" onChange={(e) => handleImagePartenaire(e)}/>
                            <br />
                            <button onClick={createIncendie}> Valider </button>    
                        </details>
                    </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Risques
                        </legend>
                        <div data-risques1>
                        <details>
                            <summary> Pictogrammes des risques </summary>
                            <div data-pictocontainer>
                            {wRisques.map((item, i) => 
                            <>
                                <div data-minipicto>
                                    <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                    <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionRisques(item)} />
                                </div>
                            </>
                            )}
                            </div>
                        </details>
                    </div>
                    </fieldset>
                    <button onClick={handleSubmit1} data-save> Enregistrer la fiche </button>
                    <hr />
                </div>
                <div data-preview>
                    <div id={styles.capture} >
                        <div data-livret id="main">
                            <div data-containerCouverture>
                                <div data-livretH>
                                    <div data-imgLogo>
                                        <img src={logo} alt="" width="155"/>
                                    </div>
                                    <h1 style={{margin: '0'}}> Livret Accueil Sécurité </h1>
                                    <h2 style={{margin: '0', color: 'white'}}> {precision} </h2>
                                </div>
                                <div data-height>
                                    <div data-lgray />
                                    <div data-square>
                                        <canvas id="logo" />
                                        <p> {texte} </p>
                                        <p data-ps> LAS Version n°{version} - {monthNames[d.getMonth()]} {d.getFullYear()}</p>
                                    </div>
                                </div>
                                <footer data-lfooter>
                                    <div data-contact>
                                        <h2> Contact </h2>
                                    </div>
                                    <p style={{marginTop: '1rem'}}> {adresse} </p>
                                    <p> {telephone} </p>
                                    <p> {mail} </p>
                                </footer>
                            </div>
                            <div data-containerSommaire>
                                <div data-headSommaire />
                                <div data-som>
                                <h2> Sommaire </h2>
                                </div>
                                <div data-mid>
                                <div data-rightGray>
                                    <div data-redLeft>
                                    <div data-leftC> <p> Renseignement sur l’entreprise </p> </div>
                                    <div data-leftC> <p> Responsabilité de chacun</p></div>
                                    <div data-leftC> <p> Règles générales de sécurité </p></div>
                                    <div data-leftC> <p> Restauration et repos </p></div>
                                    <div data-leftC> <p> Equipement de protection individuelle </p></div>
                                    <div data-leftC> <p> Risques généraux de l'entreprise </p></div>
                                    <div data-leftC> <p> En cas d'accident </p></div>
                                    <div data-leftC> <p> En cas d'incendie </p></div>
                                    <div data-leftC> <p> Certificat de formation </p></div>
                                    <div data-leftC> <p> Notes</p></div>
                                    </div>
                                </div>
                                </div>
                                <div data-fsommaire>
                                </div>
                            </div>
                            <div data-renseigment>
                                <div data-headSommaire />
                                <div data-som>
                                    <h2> Renseignement sur l'entreprise </h2>
                                </div>
                                <div data-mid>
                                    <div data-redLeft>
                                        <div data-leftC> <p> Gérant </p></div>
                                        <div data-leftC> <p> Activite </p> </div>
                                        <div data-leftC> <p> Nb de salaries </p></div>
                                        <div data-leftC> <p> Code Risque </p></div>
                                        <div data-leftC> <p> Taux AT/MP </p></div>
                                        <div data-leftC> <p> Document Unique </p></div>
                                        <div data-leftC> <p> Affichage obligatoire </p></div>
                                        <div data-leftC> <p> Affichage prevention </p></div>
                                        <div data-leftC> <p> Affichage COVID </p></div>
                                        <div data-leftC> <p> Unité de Travail </p></div>
                                    </div>
                                    <div data-rightGray>
                                        <p> {gerant} </p>
                                        <p> {activite} </p>
                                        <p> {nbSalaries} </p>
                                        <p> {codeRisque} </p>
                                        <p> {taux} </p>
                                        <p style={{width: '90%'}}> {docUnique} </p>
                                        <p> {affObligatoire} </p>
                                        <p> {affPrevention} </p>
                                        <p> {affCovid} </p>
                                        <p> {unite} </p>
                                    </div>
                                </div>
                                <div data-som>
                                    <h2> Plan d'accès </h2>
                                </div>
                                <div data-rsfooter>
                                    <canvas id="plandacces" />
                                </div>
                            </div>
                            <div data-responsabilite>
                                <div data-headSommaire />
                                <div data-som>
                                    <h2> Responsabilité de chacun </h2>
                                </div>
                                <div data-wrapResp>
                                    <div data-grayR>
                                        <div data-respE>
                                            <h5> Les responsabilités de l'employeur (C.T.) </h5>
                                        </div>
                                        <div data-articles>
                                            <div data-artic1>
                                                <div data-bouble>
                                                    <img src={diplomeB} height="38"/>
                                                </div>
                                                <span> Article 4121-1 </span>
                                                <p> " l'employeur est tenu envers le salarié d'une obligation de sécurité qui est une obligation de résultat ". </p>
                                            </div>
                                            <div data-artic2>
                                                <div data-bouble>
                                                    <img src={diplomeB} height="38"/>
                                                </div>
                                                <span> Article 4121-2 </span>
                                                <p> " l'employeur met en œuvre les mesures prévues à l'Article 4121-1 sur le fondement des principes généraux de prévention ", qui sont au nombre de 9. </p>
                                            </div>
                                            <div data-artic3>
                                                <div data-bouble>
                                                    <img src={diplomeB} height="38"/>
                                                </div>
                                                <span> Article 4121-3 </span>
                                                <p>" l'employeur, compte tenu de la nature des activités de l'établissement, doit procéder à l'évaluation des risques pour assurer la santé physique et mentale de ses salariés ". </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tray>
                                        <div data-respS>
                                            <h5> Les responsabilités du salarié (C.T.) </h5>
                                        </div>
                                        <div data-sTxt>
                                            <p> Tout salarié a une obligation de sécurité pour lui et pour les autres. Un manquement à cette obligation peut être considéré comme une faute et entraîner des poursuites en cas d'accident. </p>
                                        </div>
                                        <div data-lastArtc>
                                            <div data-bouble>
                                                <img src={diplomeN} height="38"/>
                                            </div>
                                            <span> Article 4122-1 </span>
                                            <p> Conformément aux instructions qui lui sont données par l'employeur, dans les conditions prévues au règlement intérieur (…), <strong> il incombe à chaque travailleur de prendre soin </strong>, en fonction de sa formation et selon ses possibilités, <strong> de sa santé et de sa sécurité </strong> ainsi que de celles des <strong> autres personnes </strong> concernées par ses actes ou ses omissions au travail. </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-rfooter />
                            </div>
                            <div data-regles>
                                <div data-headSommaire />
                                    <div data-som>
                                        <h2> Règles générales de sécurité </h2>
                                    </div>
                                    <div data-wrapRegl>
                                        <div data-noirR>
                                            <ul>
                                            <li>
                                                Respecter les consignes de sécurité
                                            </li>
                                            <li>
                                                Respecter les dispositifs de protection collective
                                            </li>
                                            <li>
                                                Utiliser les équipements de protection individuelle
                                            </li>
                                            <li>
                                                Respecter le règlement de l’entreprise
                                            </li>
                                            <li>
                                                Respecter les interdictions de fumer
                                            </li>
                                            <li>
                                                Respecter les interdictions de consommer des boissons alcoolisées sur le lieu de travail
                                            </li>
                                            <li>
                                                Signaler toute situation dangereuse à votre responsable
                                            </li>
                                            <li>
                                                Utiliser le matériel uniquement pour l’usage auquel il est destiné
                                            </li>
                                            </ul>
                                        </div>
                                        <div data-contS>
                                            <div data-titCont>
                                                <p> Contacts </p>
                                            </div>
                                            <div data-gridContact>
                                                {regles.map((item) =>
                                                    <div data-partner>
                                                        <p data-func style={{color: '#C40005', textAlign: 'center'}}> {item.function} </p>
                                                        <p data-name> {item.value} </p>
                                                        <p data-name> {item.numero} </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div data-fregles>
                                </div>
                            </div>
                            <div data-restauration>
                                <div data-headSommaire/>
                                <div data-som> 
                                    <h2> Restauration et repos </h2> 
                                </div>
                                <div data-contain>
                                    <div data-leftR> <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem' }}> <img src={manger} height="100" /> <img src={drogue} height="100" /> <img src={alcool} height="100" /> <img src={ivresse} height="100" /></div> </div>
                                    <div data-rightR>
                                    <div data-elem1>
                                        <p> En application de l’article R.4228-21 du CTl, il est interdit au personnel de prendre ses repas dans les locaux affectés au travail. </p>
                                    </div>
                                    <div data-elem2>
                                        <p> L’introduction de drogue ou boissons alcoolisées sur les chantiers est interdite. S’agissant des boissons alcoolisées, des autorisations particulières et exceptionnelles peuvent être délivrées. </p>
                                    </div>
                                    <div data-elem3>
                                        <p> Il est interdit de pénétrer ou de demeurer dans l’établissement en état d’ivresse ou sous l’emprise de la drogue. </p>
                                    </div>
                                    <div data-elem4>
                                        <p> En cas de doute sur l’état d’imprégnation alcoolique d’un salarié occupé à un poste dangereux pour lui-même, ses collègues, les usagers ou le public, et s’il l’on considère qu’il n’est plus à même d’assurer ses missions, celui-ci pourra être soumis à un contrôle éthylotest. </p>
                                    </div>
                                    <div data-elem5>
                                        <p> Le contrôle sera effectué par un ou des agents habilités, désignés par la direction de l’établissement. Le salarié pourra exiger que le contrôle s’effectue en présence d’un membre du personnel de son choix et qu’une contre-expertise sur son état soit réalisée. </p>
                                    </div>
                                    </div>
                                </div>
                                <div data-footerRes/>
                            </div>
                            {epiPreview.length < 6 ?
                            <div data-equip>
                                <div data-headSommaire/>
                                <div data-som>
                                <h2> Equipement de protection individuelle </h2>
                                </div>
                                <div data-contentE>
                                    <div data-titleE>
                                    <p> Lors des différentes activités pour l'entreprise, le port des EPI suivants est obligatoire. </p>
                                    </div>
                                    <div data-gridEquip>
                                    {epiPreview.map((item) =>
                                        <div data-card>
                                        <img src={item.image} width="95" alt="" />
                                        <h4> {item.title} </h4>
                                        <p> {item.texte} </p>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div data-footerRes />
                            </div>
                            :
                            <>
                            <div data-equip>
                                <div data-headSommaire/>
                                <div data-som>
                                <h2> Equipement de protection individuelle </h2>
                                </div>
                                <div data-contentE>
                                    <div data-titleE>
                                    <p style={{textAlign: 'center'}}> Lors des différentes activités pour l'entreprise, le port des EPI suivants est obligatoire. </p>
                                    </div>
                                    <div data-gridEquip>
                                    {/* {livret[3].epi.map((item) =>
                                        <div data-card>
                                        <img src={item.image.asset.url} width="75" height="75" alt="" />
                                        <h4> {item.title} </h4>
                                        <PortableText blocks={item._rawDescription} />
                                        </div>
                                    )} */}
                                    </div>
                                </div>
                                <div data-footerRes />
                            </div>
                            </>
                            }
                            {risquesPreview.map((item) =>
                            <div data-risques>
                            <div data-headSommaire/>
                            <div data-som> 
                                <h2> Risques généraux de l'entreprise </h2> 
                            </div>
                            <div data-contentR>
                                <div data-noirC>
                                    <img src={item.image} alt="" />
                                </div>
                                <div data-danger>
                                {item.warn != null ?
                                <img src={item.warn} alt="" height="47" />
                                :
                                <div style={{height: '47px'}}>
                                </div>
                                }
                                </div>
                                <div data-title>
                                <h5> {item.title} </h5>
                                </div>
                                <div data-contentRisque>
                                <div style={{background: '#ececec', borderBottom: '1px solid black', margin: '0', paddingTop: '.5rem'}}> <PortableText blocks={item.p1}/> </div>
                                <div style={{margin: '0'}}> <PortableText blocks={item.p2}/> </div>
                                <div style={{background: '#ececec', margin: '0', borderTop: '1px solid black'}}> <PortableText blocks={item.p3}/> </div>
                                <div> <PortableText blocks={item.p4}/> </div>
                                </div>
                            </div>
                                <div data-footerRes>
                                {item.sensi != null ?
                                    <p style={{color: 'white', textAlign: 'center'}}> {item.sensi} </p>
                                    :
                                    <>
                                    </>
                                }
                                </div>
                            </div>
                            )}
                            <div data-accident>
                                <div data-headSommaire />
                                <div data-som> 
                                    <h2> En cas d'accident </h2> 
                                </div>
                                <div data-wrapAcc>
                                    <div data-flexA>
                                        <div data-left>
                                            <div data-firstItem>
                                                <div data-num> <h2> 1 </h2> </div>
                                                <h4> Analyser et protéger </h4>
                                                <p> C’est reconnaître, sans s’exposer soi-même, les dangers persistants qui menacent la victime de l’accident et les autres personnes exposées. </p>
                                            </div>
                                            <div data-thirdItem>
                                                <div data-num> <h2> 3 </h2> </div>
                                                <h4> Alerter ou faire alerter </h4>
                                                <p> C’est transmettre aux moyens et aux personnes prévus dans l’organisation des secours de l’entreprise, les informations nécessaires et suffisantes pour qu’ils puissent organiser leur intervention. L’alerte doit être la plus précoce possible. </p>
                                            </div>
                                        </div>
                                        <div data-right>
                                            <div data-SecondItem>
                                                <div data-num> <h2> 2 </h2> </div>
                                                <h4> Examiner </h4>
                                                <p> C’est rechercher les signes qui indiquent que la vie de la victime est menacée </p>
                                            </div>
                                            <div data-fourthItem>
                                                <div data-num> <h2> 4 </h2> </div>
                                                <h4> Secourir : porter assistance à la victime </h4>
                                                <p style={{margin: 0}}> Couvrir le blessé (ne pas bouger la victime </p>
                                                <p style={{margin: 0}}> Ne pas donner à boire </p>
                                                <p style={{margin: 0}}> Éloigner les curieux </p>
                                            </div>
                                            <div data-telA>
                                                <p> Téléphonez au : </p>
                                                <div data-pomp>
                                                <h4> 18 </h4>
                                                <p> Pompiers </p>
                                                </div>
                                                <div data-samu>
                                                <h4> 15 </h4>
                                                <p> Samu </p>
                                                </div>
                                                <div data-appl>
                                                <h4> 112 </h4>
                                                <p> Centre d'appels secours </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-warn>
                                        <h4> IMPORTANT: </h4>
                                        <p> L'employeur doit être tenu informé systématiquement en cas d'incident ou d'accident </p>
                                    </div>
                                </div>
                                <div data-footerRes>
                                    <div data-sauv>
                                        <div data-text>
                                            <h5> Sauveteur Secouriste du Travail : </h5>
                                            <p> Son rôle est de porter les premiers secours à toute victime d'un accident du travail ou d'un malaise, mais aussi d’être acteur de la prévention dans son entreprise. Liste du personnel formé sur affichage séparé. </p>
                                        </div>
                                        <img src={secourisme} width="210" height="210" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-incendie>
                                <div data-headSommaire />
                                <div data-som> 
                                    <h2> En cas d'incendie </h2> 
                                </div>
                                <div data-wrapInc>
                                    <div data-wrapF>
                                        <div data-first>
                                            <div data-num1> 
                                                <h2> 1 </h2> 
                                            </div>
                                            <img src={phoneA} height="41" />
                                            <p> Alerter</p>
                                            <p> Prévenir les Urgences adéquates : </p>
                                            <div data-contat>
                                                <p> 18 ou 112 </p>
                                            </div>
                                            <p> Prévenir l'employeur (si possible) </p>
                                        </div>
                                        <div data-second>
                                            <div data-num1> 
                                                <h2> 2 </h2> 
                                            </div>
                                            <img src={feu} height="41" />
                                            <p> Lutter (si possible) </p>
                                            <p> Utiliser les moyens de secours Extincteurs </p>
                                            <p> Sans mettre votre vie en danger </p>
                                        </div>
                                    </div>
                                    <div data-line>
                                        <img src={evacuation} height="217" alt="" data-imgL/>
                                        <div data-num1> 
                                            <h2> 3 </h2>
                                        </div>
                                        <div data-txtL>
                                            <span> Evacuer </span>
                                            <p> {evacuer} </p>
                                        </div>
                                    </div>
                                    <div data-line2>
                                        <div data-txtL>
                                            <span> Conseils : </span>
                                            <ul>
                                                <li>
                                                Réaliser une installation conforme ;
                                                </li>
                                                <li>
                                                Maintenir le libre accès aux issues de secours ;
                                                </li>
                                                <li>
                                                Rappeler l’interdiction de fumer ;
                                                </li>
                                                <li>
                                                Etablir des consignes d’incendie / Plan d’Évacuation ;
                                                </li>
                                                <li>
                                                Faire vérifier les extincteurs, alarmes, désenfumages, …
                                                </li>
                                                <li>
                                                Sensibiliser et former les salariés.
                                                </li>
                                            </ul>
                                            <p> Chaque seconde compte, Agissez ! </p>
                                        </div>
                                        <img src={feuM} width="217" height="217" alt="" data-imgL/>
                                    </div>
                                </div>
                                <div data-footerRes>
                                    <div style={{display: 'flex'}}>
                                        <p> Notre partenaire Verification Incendie: </p>
                                        <canvas id="partenaire" />
                                    </div>
                                </div>
                            </div>
                            <div data-notes>
                                <div data-headSommaire />
                                <div data-som> <h2> Notes </h2> </div>
                                <div data-content>
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                <div data-tray />
                                </div>
                                <div data-footerRes />
                            </div>
                            <div data-certificat>
                                <div data-headSommaire />
                                <div data-som> <h2> Certificat de Formation à la Sécurité Générale </h2> </div>
                                <div data-content>
                                <div data-imgContain>
                                    <img style={{marginTop: '1rem'}} src={logoN} alt="" width="180"/>
                                </div>
                                <p style={{lineHeight: '2'}}> Je soussigné(e) …………………………………………………………………….. avoir reçu l'information et la formation en interne à la sécurité générale spécifique au lieu de travail de la société <strong> {entreprise} </strong> ainsi que le livret d'accueil sécurité. </p>
                                <p> Je reconnais également avoir reçu ou avoir à disposition le kit Equipement de Protection Individuelle (EPI) </p>
                                <div style={{display: 'flex', gap: '1rem'}}>
                                {epiPreview.map((item) =>
                                    <img src={item.image} width="66" height="66" alt="" />
                                )}
                                </div>
                                <div data-line>
                                <p> Fait le ……………............ </p>
                                <p> Signature </p>
                                </div>
                                <p> À ……………………… </p>
                                <p data-ps> LAS Version n°1 - {monthNames[d.getMonth()]} {d.getFullYear()}</p>
                                </div>
                                <div data-footerRes />
                            </div>
                            <div data-logo>
                                <img src={logoN} alt="" width="258" height="74" />
                            </div>
                            <div data-logo>
                                <div />
                            </div>
                            <div data-final>
                                <div data-head />
                                <div data-content>
                                <img src={logoN} alt="" width="255" />
                                <h3> www.evrpro.com </h3>
                                <div data-center>
                                    <p> Z.I de Baléone - Lot Michel Ange </p>
                                    <p> 20167 AFA </p>
                                    <p> 04 95 23 18 92 </p>
                                    <p> secretariat@evr-pro.com </p>
                                </div>
                                </div>
                                <div data-footerF />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default LivretAPI;