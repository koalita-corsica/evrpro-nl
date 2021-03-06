import React, {useEffect, useState} from 'react';
import * as styles from "../components/ficheChimique/ficheChimique.module.css";
import { graphql } from "gatsby";
import fire from "../assets/fire.png";
import secours from "../assets/secours.png";
import logo from "../assets/logo.png";
import qualifi from "../assets/qualifications.png";
import forma from "../assets/formations.png";
const sanityClient = require('@sanity/client');
const axios = require('axios');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

export const query = graphql`
query Pictos1 {
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

const FicheChimique = (props) => {
    // les variables de content from studio
    let log = console.log;
    let data = props.data.allSanityEpis.edges
    let dangers = props.data.allSanityPictosD.edges
    let interdictions = props.data.allSanityPictosI.edges
    let obligations = props.data.allSanityPictosO.edges

    //data de l'entreprise choisi
    let entrepriseData = typeof window !== "undefined" && window.history.state.data

    // Tout les variables d'etat
    const [version, setVersion ] = useState("")
    const [entreprise, setEntreprise ] = useState(entrepriseData.title)
    const [entrepriseId, setEntrepriseId] = useState(entrepriseData._id)
    const [fiche, setFiche] = useState("")
    const [produit, setProduit] = useState("")
    const [fournisseur, setFournisseur] = useState("")
    const [caractMachine, setCaractMachine] = useState("")
    const [lieu, setLieu] = useState("")
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

    //la separation pour la grid de la fiche
    var tache2 = tachesPreview.slice(0,3);
    var tache0 = tachesPreview.slice(2,9);
    
    // Function pour dessiner les ronds dans l'image de la machine
    function draw(e) {
        var canvas = document.getElementById('imageCanvas'); 
        var ctx = canvas.getContext("2d");
        var pos = getCursorPosition(canvas, e);
        var clickX = pos.x;
        var clickY = pos.y;
        
        ctx.fillStyle = "#ff2626"; // Red color
        ctx.beginPath();
        ctx.arc(clickX, clickY, 15, 0, Math.PI * 2, true);
        ctx.fill();
  
        ctx.font = "10pt Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(clicks, clickX, clickY + 3);
        setClicks(clicks+1)
    }

    // Pour avoir les coordones du click
    function getCursorPosition(canvas, e) {
        let rect = canvas.getBoundingClientRect();
        
        
        return {
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top
        };
    }


    // Cr??e l'object pour envoyer au studio
    function handleSubmit1() {

        const doc = {
            _type: 'fichesChmiqueAPI',
            version: version,
            fichedeposte: fiche,
            slug: `${entreprise}/${fiche}`,
            entreprise: {
                _type: 'reference',
                _ref: entrepriseId,
            },
            miseenservice: date,
            machine: produit,
            marque: fournisseur,
            caract: caractMachine,
            produits: lieu,
            type: type,
            tache: taches,
            qualifications: qualifications,
            formation: formation
        }

        client.create(doc).then((res) => {
            console.log(`Doc was created, document ID is ${res._id}`)

            var canvas = document.getElementById('imageCanvas');
            
            canvas.toBlob(uploadImageBlob, 'image/png')

            epiData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({epi: []})
                .insert('after', 'epi[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })
            
            dangersData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({risquesD: []})
                .insert('after', 'risquesD[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })

            interdictionsData.map((item, i) => {
                client
                .patch(res._id)
                .setIfMissing({interdiction: []})
                .insert('after', 'interdiction[-1]', [{_key: (i+1), _ref: item}])
                .commit({autoGenerateArrayKeys: true,})
            })
        

            function uploadImageBlob(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        ogImage: {
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

    // Pour montrer l'image dans la fiche
    function handleImage(event){
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                if (document.getElementById("typeImage").value == "horizontal") {
                    canvas.width = 196;
                    canvas.height = 130;
                } else {
                    canvas.height = 231;
                }
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    //Pour choisir les pictos EPI pour la preview et pour le studio 
    function actionEPI(item) {
        if(!epiData.includes(item.node._id)) {
            setEpiData(epiData => [...epiData, item.node._id])
            setEpiPreview(epiPreview => [...epiPreview, item.node.image.asset.url])
        } else {
            let newEpiData = [...epiData]
            newEpiData.splice(epiPreview.indexOf(item.node.image.asset.url), 1); 
            setEpiData(newEpiData)            
            // epiData.splice(epiData.indexOf(item.node._id), 1); 
            epiPreview.splice(epiPreview.indexOf(item.node.image.asset.url), 1); 
        }
    }


    //Pour choisir les pictos Danger pour la preview et pour le studio 
    function actionDanger(item) {
        if(!dangersData.includes(item.node._id)) {
            setDangersData(dangersData => [...dangersData, item.node._id])
            setDangersPreview(dangersPreview => [...dangersPreview, item.node.picto.asset.url])
        } else {
            let newDangersData = [...dangersData]
            newDangersData.splice(dangersData.indexOf(item.node._id), 1); 
            setDangersData(newDangersData);
            // dangersData.splice(dangersData.indexOf(item.node._id), 1); 
            dangersPreview.splice(dangersPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    //Pour choisir les pictos Interdiction pour la preview et pour le studio 
    function actionInterdiction(item) {
        if(!interdictionsData.includes(item.node._id)) {
            setInterdictionsData(interdictionsData => [...interdictionsData, item.node._id])
            setInterdictionsPreview(interdictionsPreview => [...interdictionsPreview, item.node.picto.asset.url])
        } else {
            let newInterData = [...interdictionsData]
            newInterData.splice(interdictionsData.indexOf(item.node._id),1)
            setInterdictionsData(newInterData)
            // interdictionsData.splice(interdictionsData.indexOf(item.node.id), 1); 
            interdictionsPreview.splice(interdictionsPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    //Pour choisir les pictos qui seront dans les taches pour la preview et pour le studio 
    function helperTache(item) {
        if(!tachesPicto.includes(item.node.id)) {
            setTachesPicto(tachesPicto => [...tachesPicto, {"_key": 1, "_ref": item.node._id}])
            setTachesPictoPreview(tachesPictoPreview => [...tachesPictoPreview, item.node.picto.asset.url])
        } else {
            tachesPicto.splice(tachesPicto.indexOf(item.node._id), 1); 
            tachesPictoPreview.splice(tachesPictoPreview.indexOf(item.node.picto.asset.url), 1); 
        }
    }

    //Savegaurder les taches 
    function actionTache() {
        setTaches(taches => [...taches, {"quand": quand, "quelle": quelle, "qui": qui, "mesures": mesures, "risques": tachesPicto}]);
        setTachesPreview(tachesPreview => [...tachesPreview, {"quand": quand, "quelle": quelle, "qui": qui, "mesures": mesures, "risques": tachesPictoPreview}]);
        document.getElementById("quand").value = ""
        document.getElementById("quelle").value = ""
        document.getElementById("qui").value = ""
        document.getElementById("mesure").value = ""
        setQuand("")
        setQuelle("")
        setQui("")
        setMesures("")
    }

    return ( 
        <>
            <h1> Notice de Poste Produit Chimique</h1>
            <div data-ficheContainer>
                <div data-form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <div data-fiche>
                        <label for="fiche"> Nom de la Fiche </label>
                        <input name="fiche" type="text" onChange={(event) => setFiche(event.target.value)}/>
                    </div>
                    <hr />

                    <fieldset>
                        <legend>Informations g??n??rales</legend>
                        <details>
                            <summary><i>Informations li??es au poste et ?? la machine</i></summary>
                            <div data-version>
                                <label for="version"> Version </label>
                                <input name="version" type="text" onChange={(event) => setVersion(event.target.value)}/>
                            </div>                    
                            <div data-machineF>
                                <label for="machine"> Produit </label>
                                <input name="machine" type="text" onChange={(event) => setProduit(event.target.value)}/>
                            </div>
                            <div data-typeMachine>
                                <label for="typeMachine"> Fournisseur </label>
                                <input name="typeMachine" type="text" onChange={(event) => setFournisseur(event.target.value)}/>
                            </div>
                            <div data-caract>
                                <label for="caract"> Caract??ristiques principales du Porduit </label>
                                <input name="caract" type="text" onChange={(event) => setCaractMachine(event.target.value)}/>
                            </div>
                            <div data-date>
                                <label for="date"> Date de mise en service </label>
                                <input name="date" type="date" onChange={(event) => setDate(event.target.value)}/>
                            </div>
                            <div data-materials>
                                <label for="materials"> Lieu de Consultation FDS </label>
                                <input name="materials" type="text" onChange={(event) => setLieu(event.target.value)}/>
                            </div>
                        </details>
                    </fieldset>
                    <hr />

                    <fieldset data-upload><legend>Image &amp; l??gende</legend>
                    <details>
                    <summary><i>Ajouter une image et la l??gender</i></summary>
                        <div data-typeImage>
                            <label for="type"> Type d'image </label>
                            <select name="select" id="typeImage" onChange={(event) => setType(event.target.value)}>
                                <option value="horizontal">Horizontal 196x130</option>
                                <option value="vertical">Vertical 231</option>
                            </select>
                        </div>
                        <div data-image>
                            <input type="file" name="image" onChange={(e) => handleImage(e)}/>
                        </div>
                    </details>
                    </fieldset>
                    <hr />

                    <fieldset><legend>Pictos </legend>
                    <details>
                    <summary><i>Ajouter et supprimer les pictos pour les EPI, les dangers et les interdictions</i></summary>
                    <div data-epi>
                        <details>
                            <summary> EPI Obligatoires </summary>
                            <div data-pictocontainer>
                        {data.map((item, i) => 
                        <>
                            <div data-minipicto>
                                <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.image.asset.url} onClick={() => actionEPI(item)} />
                                <label for={item.node.title}> <img src={item.node.image.asset.url} width="50" /> </label>
                            </div>
                        </>
                        )}
                        </div>
                        </details>
                    </div>
                    <div data-dangers>
                        <details>
                            <summary> Dangers / Obligations </summary>
                            <div data-pictocontainer>

                        {dangers.map((item, i) => 
                        <>
                            <div data-minipicto>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionDanger(item)} />
                            </div>
                        </>
                        )}

                        {obligations.map((item, i) => 
                        <>
                            <div data-minipicto>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionDanger(item)} />
                            </div>
                        </>
                        )}
                        </div>
                        </details>
                    </div>
                    <div data-interdictions>
                        <details>
                            <summary> Interdictions </summary>
                            <div data-pictocontainer>
                        {interdictions.map((item, i) => 
                        <>
                            <div data-minipicto>
                                <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.picto.asset.url} onClick={() => actionInterdiction(item)} />
                            </div>
                        </>
                        )}
                        </div>
                        </details>
                    </div>
                    </details>
                    </fieldset>
                    <hr />

                    <fieldset><legend>Liste des t??ches</legend>
                    <details>
                    <summary><i>Ajouter / Supprimer les t??ches li??es au poste</i></summary>
                    <div data-taches>
                        <label for="quand"> Quand : </label>
                        <input name="quand" type="text" id="quand"  onChange={(event) => setQuand(event.target.value)}/>
                        <br />
                        <label for="quelle"> Quelle : </label>
                        <input name="quelle" type="text" id="quelle"  onChange={(event) => setQuelle(event.target.value)}/>
                        <br />
                        <label for="qui"> Qui : </label>
                        <input name="qui" type="text" id="qui"  onChange={(event) => setQui(event.target.value)}/>
                        <details>
                            <summary> Pictos pour les taches </summary>
                                <details>
                                    <summary> Pictos dangers </summary>
                                    <div data-pictocontainer>
                                    {dangers.map((item, i) => 
                                    <>
                                        <div data-minipicto>
                                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                            <input type="checkbox"  value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                        </div>
                                    </>
                                    )}
                                    </div>
                                </details>
                                <details>
                                    <summary> Pictos obligations </summary>
                                    <div data-pictocontainer>
                                    {obligations.map((item, i) => 
                                    <>
                                        <div data-minipicto>
                                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                            <input type="checkbox" value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                        </div>
                                    </>
                                    )}
                                    </div>
                                </details>
                                <details>
                                    <summary> Pictos interdictions </summary>
                                    <div data-pictocontainer>
                                    {interdictions.map((item, i) => 
                                    <>
                                        <div data-minipicto>
                                            <label for={item.node.title}> <img src={item.node.picto.asset.url} width="50" /> </label>
                                            <input type="checkbox"  value={item.node.picto.asset.url} onClick={() => helperTache(item)}/>
                                        </div>
                                    </>
                                    )}
                                    </div>
                                </details>
                        </details>
                        <label for="mesure"> Mesure : </label>
                        <input name="mesure" type="text" id="mesure"  onChange={(event) => setMesures(event.target.value)}/>
                        <br />
                        <button onClick={actionTache}> Ajouter la t??che </button>
                    </div>
                    </details>
                    </fieldset>
                    <hr />

                    <div data-qualifica>
                        <label for="qualif"> Qualifications : </label>
                        <input name="qualif" type="text" onChange={(event) => setQualifications(event.target.value)}/>
                    </div>
                    <hr />
                    <div data-forma>
                        <label for="forma"> Formation obligatoire : </label>
                        <input name="forma" type="text" onChange={(event) => setFormation(event.target.value)}/>
                    </div>
                    <hr />
                    <button onClick={handleSubmit1} data-save> Enregistrer la fiche </button>
                    <hr />
                </div>

                <div data-livePreview>
                    <div id={styles.capture}>
                        <div className={styles.container}>
                            <div data-headerF>
                                <div data-headerContF>
                                    <h2 style={{padding: '1rem'}}> Notice de Poste Produit Chimique </h2>
                                    <div style={{display: 'flex', justifyContent: 'space-around', padding: '-1rem'}}>
                                        <div data-line2h>
                                            <h6> Version n?? / date <span> {version} </span> </h6>
                                        </div>
                                        <h3 style={{margin: '0', textAlign: 'center', padding: '1rem', textTransform: 'Uppercase', fontSize: '27px', marginTop: '-1rem'}}> {fiche} </h3>
                                        <div data-entre>
                                            <span> {entreprise} </span>
                                            {/* {entreprise.logo != null ?
                                            <img data-img src={entreprise.logo.asset.url} alt="logo entreprise" width="60"/>
                                            :
                                            <>
                                            </>
                                            } */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-contentF>
                                <div data-gray />
                                {type && type == "horizontal" ?
                                <div data-machinec>
                                    <div data-specsc>
                                        <p> Nom du Produit : <span> {produit} </span> </p>
                                        <p> Fournisseur : <span> {fournisseur} </span> </p>
                                        <p>
                                        Caract??ristiques principales du produit :
                                        <span> {caractMachine} </span>
                                        </p>
                                        <p>
                                        Lieu de consultation FDS : <span> {lieu} </span>
                                        </p>
                                        <p>
                                        Date FDS : <span> {date} </span>
                                        </p>
                                    </div>
                                    <div data-bar/>
                                    <div data-rsec>
                                        <canvas id="imageCanvas" onClick={(e) => draw(e)}/>                                    <div data-legendc>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div data-machinevc>
                                    <div data-specsvc>
                                        <p> Nom du Produit : <span> {produit} </span> </p>
                                        <p> Fournisseur : <span> {fournisseur} </span> </p>
                                        <p>
                                        Caract??ristiques principales du produit :
                                        <span> {caractMachine} </span>
                                        </p>
                                        <p>
                                        Lieu de consultation FDS : <span> {lieu} </span>
                                        </p>
                                        <p>
                                        Date FDS : <span> {date} </span>
                                        </p>
                                    </div>
                                    <div data-barv/>
                                    <div data-rsecvc>
                                        <div style={{alignItems: 'flex-start'}} data-legendvc>
                                        </div>
                                        <canvas style={{margin: '0', marginTop: '-3rem', marginLeft: '3.5rem'}} id="imageCanvas" onClick={(e) => draw(e)}/>
                                    </div>
                                </div>
                                }
                                <div data-iconsP>
                                    <div data-epi>
                                        <h5> EPI obligatoires </h5>
                                        {epiPreview.map((item) =>
                                            <img src={item} alt=""/>
                                        )}
                                    </div>
                                    <div data-risquesD>
                                        <h5> Risques - Dangers g??n??raux </h5>
                                        {dangersPreview.map((item) =>
                                            <img src={item} alt=""/>
                                        )}
                                    </div>
                                    <div data-inter1>
                                        <h5> Interdictions </h5>
                                        {interdictionsPreview.map((item) =>
                                            <img src={item} alt=""/>
                                        )}
                                    </div>
                                </div>
                                <div data-grid>
                                    <div class={styles.empty1} />
                                    <div class={styles.headerg}>
                                        <p>T??che exposant <br />l???op??rateur ?? un risque</p>
                                    </div>
                                    <div class={styles.headerm}>
                                        <p>Dangers - Obligations</p>
                                    </div>
                                    <div class={styles.headerd}>
                                        <p>Mesures de pr??vention - Op??rations ou proc??dures ?? respecter</p>
                                    </div>
                                    <div class={styles.empty2} />
                                    {tache2.map((item, i) =>
                                        i % 2 == 0 ?
                                    <>
                                        {log(item)}
                                        <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`} />
                                        <div style={{background: '#E5E5E5'}} data-g="data-g" data-odd>
                                            <ul style={{background: '#E5E5E5'}}>
                                                {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                                {item.quelle && (<li> {item.quelle} </li> )}
                                                {item.qui && (<li> {item.qui} </li> )}
                                            </ul>
                                        </div>
                                        <div style={{background: '#E5E5E5'}} data-m="data-m" data-odd id={`${i+1}`}>
                                            {item.risques.map((imag) =>
                                                <img src={imag} alt="" height="44"/>
                                            )}
                                        </div>
                                        <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                                            <p> {item.mesures} </p>
                                        </div>
                                        <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div >
                                    </>
                                    :
                                    <>
                                        <div class={styles.empty} data-odd id={`${i+1}`} />
                                        <div data-g="data-g" data-odd>
                                            <ul>
                                                {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                                {item.quelle && (<li> {item.quelle} </li> )}
                                                {item.qui && (<li> {item.qui} </li> )}
                                            </ul>
                                        </div>
                                        <div data-m="data-m" data-odd id={`${i+1}`}>
                                            {item.risques.map((imag) =>
                                                <img src={imag} alt="" height="44"/>
                                            )}
                                        </div>
                                        <div data-d="data-d" data-odd id={`${i+1}`}>
                                            <p> {item.mesures} </p>
                                        </div>
                                        <div class={styles.empty} data-odd id={`${i+1}`} />
                                    </>
                                    )}
                                </div>
                                {taches && taches.length > 3 ?
                                    <>
                                <div data-footer/>
                                <div data-page2 id="page2">
                                    <div data-header>
                                    <div data-headerCont>
                                        <h6> Version n?? / date <span> {version} </span> </h6>
                                        <h4> Fiche de S??curit?? Au Poste </h4>
                                        <h6> Entreprise <span> {entreprise.name} </span> </h6>
                                    </div>
                                    </div>
                                    <div data-grid1>
                                    <div class={styles.empty1}> </div>
                                    <div class={styles.headerg}>
                                        <p>T??che exposant <br />l???op??rateur ?? un risque</p>
                                    </div>
                                    <div class={styles.headerm}>
                                        <p>Dangers - Obligations</p>
                                    </div>
                                    <div class={styles.headerd}>
                                        <p>Mesures de pr??vention - Op??rations ou proc??dures ?? respecter</p>
                                    </div>
                                    <div class={styles.empty2}></div>
                                    {tache0.map((item, i) =>
                                    i % 2 == 0 ?
                                    <>
                                    <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div>
                                        <div style={{background: '#E5E5E5'}} data-g="data-g" data-odd>
                                        <ul style={{background: '#E5E5E5'}}>
                                            {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                            {item.quelle && (<li> {item.quelle} </li> )}
                                            {item.qui && (<li> {item.qui} </li> )}
                                        </ul>
                                        </div>
                                        <div style={{background: '#E5E5E5'}} data-m="data-m" data-odd id={`${i+1}`}>
                                        {item.risques.map((imag) =>
                                            <img src={imag} alt="" height="44"/>
                                        )}
                                        </div>
                                        <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                                            <p> {item.mesures} </p>
                                        </div>
                                        <div style={{background: '#E5E5E5'}} class={styles.empty} data-odd id={`${i+1}`}></div >
                                    </>
                                    :
                                    <>
                                    <div class={styles.empty} data-odd id={`${i+1}`}></div>
                                        <div data-g="data-g" data-odd>
                                        <ul>
                                        {item.quand && (<li style={{fontWeigth: 'bold'}}> {item.quand} </li> )}
                                        {item.quelle && (<li> {item.quelle} </li> )}
                                        {item.qui && (<li> {item.qui} </li> )}
                                        </ul>
                                        </div>
                                        <div data-m="data-m" data-odd id={`${i+1}`}>
                                        {item.risques.map((imag) =>
                                            <img src={imag} alt="" height="44"/>
                                        )}
                                        </div>
                                        <div data-d="data-d" data-odd id={`${i+1}`}>
                                            <p> {item.mesures} </p>
                                        </div>
                                        <div class={styles.empty} data-odd id={`${i+1}`}></div >
                                    </>
                                    )}
                                    </div>
                                    <div data-footer2>
                                    <div data-fflex>
                                    <div data-qualif>
                                        <img src={qualifi} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                        <div data-qualit>
                                        <h3> Qualification et autorisation </h3>
                                        <p> {qualifications != null ? qualifications : ''} </p>
                                        </div>
                                    </div>
                                    <div data-formatf>
                                        <img src={forma} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                        <div data-formatt>
                                        <h3> Formations </h3>
                                        <p> {formation != null ? formation : ''} </p>
                                        </div>
                                    </div>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <div data-secours>
                                        <img src={secours} width="48px" height="48px"/>
                                        <div data-secourst>
                                            <h3> En cas d???accident, alerter un secouriste du travail. </h3>
                                            <p>n?? t??l SAMU : 15 </p>
                                        </div>
                                        </div>
                                        <div data-incend>
                                        <img src={fire} width="48px" height="48px"/>
                                        <div data-incendt>
                                        <h3> En cas d???incendie, alerter le responsable. </h3>
                                        <p>n?? t??l pompiers : 18 </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </>
                                :
                                <div data-footer2>
                                    <div data-fflex>
                                    <div data-qualif>
                                    <img src={qualifi} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                    <div data-qualit>
                                        <h3> Qualification et autorisation </h3>
                                        <p> {qualifications} </p>
                                    </div>
                                    </div>
                                    <div data-formatf>
                                    <img src={forma} style={{color: 'white', fontSize: '35px', borderRight: '1px solid white', marginLeft: '15px', marginRight: '10px', paddingRight: '10px'}} width="29px"/>
                                    <div data-formatt>
                                        <h3> Formations </h3>
                                        <p> {formation} </p>
                                    </div>
                                    </div>
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <div data-secours>
                                        <img src={secours} width="48px" height="48px"/>
                                        <div data-secourst>
                                        <h3> En cas d???accident, alerter un secouriste du travail. </h3>
                                        <p>n?? t??l SAMU : <span style={{color: 'white', fontSize: '18px'}}> 15 </span> </p>
                                        </div>
                                    </div>
                                    <div data-incend>
                                    <img src={fire} width="48px" height="48px"/>
                                    <div data-incendt>
                                        <h3> En cas d???incendie, alerter le responsable. </h3>
                                        <p>n?? t??l pompiers : <span style={{color: 'white', fontSize: '18px'}}> 18 </span> </p>
                                    </div>
                                    </div>
                                    </div>
                                    <img style={{marginLeft: '44rem'}} src={logo} width="70" />
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FicheChimique;