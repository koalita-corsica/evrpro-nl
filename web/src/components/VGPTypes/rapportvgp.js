import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const RapportVGP = ({stateChanger,props}) => {
    let log = console.log;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let today = year + "/" + month + "/" + day;
    let prochaine = (year + 1) + "/" + month + "/" + day;

    const [date, setDate] = useState(today)
    const [nClient, setNClient] = useState("")
    const [nRapport, setNRapport] = useState("")
    const [nControle, setNControle] = useState("")
    const [prochaineVerif, setProchaineVerif] = useState(prochaine)
    const [typeService, setTypeService] = useState("")
    const [certificat, setCertificat] = useState("")
    const [manuel, setManuel] = useState("")
    const [rapports, setRapports] = useState("")
    const [carnet, setCarnet] = useState("")
    const [registre, setRegistre] = useState("")


    // useEffect(() => {
    //     setTimeout(getDataCompany(), 2000)
    // })


    return ( 
        <div data-chariotWrapper>
                <button onClick={() => stateChanger('plop')}>ici</button>
        <div data-form>
            <div data-first>
            <details>
                <summary> Infos Rapport </summary>
                    <p> Date: <span> {date} </span> </p>
                    <p> Nº Client <span> {nClient} </span> </p>
                    <p> Nº Controle <span> {nControle} </span> </p>
                    <p> Prochaine verification {prochaineVerif}  </p>
                </details>
            </div>
            <div data-second>
                <details>
                <summary> Type de verification </summary>
                    <label for="type"> Type de Verification </label>
                    <select name="type" onChange={(event) => stateChanger(event.target.value)}>
                        <option value="miseEnService"> Vérification de mise en service </option>
                        <option value="periodique"> Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27) </option>
                        <option value="remiseEnService"> Vérification de remise en service </option>
                    </select>
                </details>
            </div>
            <div data-third>
                <details>
                    <summary> DOCUMENT OBLIGATOIRE REMPLI ET FOURNI </summary>
                    <div>
                        <label for="certificat"> Certifcat de conformité + épreuve de mise en service </label>
                        <select name="certificat" onChange={(event) => setCertificat(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="manuel"> Manuel d’Utilisation (Art. R4323-1 du C.T.) </label>
                        <select name="manuel" onChange={(event) => setManuel(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="rapports"> Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.) </label>
                        <select name="rapports" onChange={(event) => setRapports(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="carnet"> Carnet de Maintenance (ArtR4323-19,20 du C.T.) </label>
                        <select name="carnet" onChange={(event) => setCarnet(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                    <div>
                        <label for="registre"> Registre de sécurité (Art. R.4323-26, 27 du C.T.) </label>
                        <select name="registre" onChange={(event) => setRegistre(event.target.value)}>
                            <option> Choisir </option>
                            <option value="oui"> Oui </option>
                            <option value="non"> Non </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-fourth>
                <details>
                    <summary> Compartiment moteur </summary>
                    <div>
                        <label for="capotages"> Capotages (état, fixations, fermetures) </label>
                        <select name="capotages">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="capotages">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="protections"> Protections des parties tournantes (hélices, courroie) </label>
                        <select name="protections">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="protections">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="sortie"> Sortie d'échappement protégée si accessible </label>
                        <select name="sortie">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="sortie">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="fluides"> Niveau des fluides </label>
                        <select name="fluides">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="fluides">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="fuite"> absence de fuite </label>
                        <select name="fuite">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="fuite">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="batterie"> Batterie(s) (état, fixation , dispositif e deconnection) </label>
                        <select name="batterie">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="batterie">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-fifth>
                <details>
                    <summary> Châssis </summary>
                    <div>
                        <label for="pneus"> Etat des pneumatiuques </label>
                        <select name="pneus">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="pneus">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="jantes"> Etat des jantes </label>
                        <select name="jantes">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="jantes">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="contrepoids"> Contrepoids (état et fixation) </label>
                        <select name="contrepoids">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="contrepoids">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="verin"> Vérin(s) de direction (état, fuites, articulations) </label>
                        <select name="verin">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="verin">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="support"> supposrt des bouteilles (gaz) </label>
                        <select name="support">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="support">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="gaz"> Flexibles d'alimentation gaz (état, connexions…) </label>
                        <select name="gaz">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="gaz">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="carburant"> Réservoir de carburant (état déformations, fuites...) </label>
                        <select name="carburant">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="carburant">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="huile"> Réservoir d'huile hydraulique (niveau, état, fuites..) </label>
                        <select name="huile">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="huile">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-sixth>
                <div>
                    <details>
                        <summary> Poste de condutie </summary>
                        <div>
                            <label for="acces"> Accès (état des marchepieds, poignées…) </label>
                            <select name="acces">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="acces">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="protege"> Protège-conducteur (état, fixations, déformations…) </label>
                            <select name="protege">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="protege">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="siege"> Siège (état, fixation, réglages…) </label>
                            <select name="siege">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="siege">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="ceinture"> Ceinture de sécurité (état fixations, fonctionnement) </label>
                            <select name="ceinture">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="ceinture">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="plancher"> Plancher et pédales (état, surface antidérpanate) </label>
                            <select name="plancher">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="plancher">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contacteur"> Contacteur de démarage si transimission engagée </label>
                            <select name="contacteur">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="contacteur">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="leviers"> Fonctionnement et repérgae leviers de commande</label>
                            <select name="leviers">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="leviers">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                        <div>
                            <label for="contactSiege"> Contacteurs de siège ou dispositif équivalent </label>
                            <select name="contactSiege">
                                <option> Choisir </option>
                                <option value="b"> B </option>
                                <option value="d"> D </option>
                                <option value="Neo"> Neo </option>
                            </select>
                            <select name="contactSiege">
                                <option> Choisir </option>
                                <option value="vrai"> V </option>
                                <option value="faux"> F </option>
                            </select>
                        </div>
                    </details>
                </div>
            </div>
            <div data-seventh>
                <details>
                    <summary> Pas de titre </summary>
                    <div>
                        <label for="sonore"> Avertisseur sonore </label>
                        <select name="sonore">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="sonore">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="eclairage"> Eclairage </label>
                        <select name="eclairage">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="eclairage">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="retro"> Rétroviseurs  </label>
                        <select name="retro">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="retro">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="vitrage"> Vitrage's (état, fixations) </label>
                        <select name="vitrage">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="vitrage">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="essuie"> Essuie-glaces </label>
                        <select name="essuie">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="essuie">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="gyrophare"> Gyrophare ou feu équivalent </label>
                        <select name="gyrophare">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="gyrophare">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="conformite"> Conformité au code de la route si utilisation voirie </label>
                        <select name="conformite">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="conformite">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="tableau"> Tableau de bord (état des témoins et cadrans) </label>
                        <select name="tableau">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="tableau">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="abaque"> Présence et lisibilité de l'abaque de charge* </label>
                        <select name="abaque">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="abaque">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="consignes"> Présence et lisibilité des consignes de sécurité </label>
                        <select name="consignes">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="consignes">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="urgence"> Dispositif d'immoblisation de la machine en cas d'incident (arrêt d'urgence) </label>
                        <select name="urgence">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="urgence">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="coupe"> Coupe batterie </label>
                        <select name="coupe">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="coupe">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-eight>
                <details>
                    <summary> Equipment de levage </summary>
                    <div>
                        <label for="fourches"> Fourches (usure, déformations, dispositif calage) </label>
                        <select name="fourches">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="fourches">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="prehension"> Autre dispositif de préhension : </label>
                        <select name="prehension">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="prehension">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="tablier"> Tablier : (état, fixation, butées de fourches) </label>
                        <select name="tablier">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="tablier">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="dosseret"> Dosseret d'appui de charge (état, fixations…) </label>
                        <select name="dosseret">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="dosseret">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="mat"> Mât (état, jeu fixations, butées, galets…) </label>
                        <select name="mat">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="mat">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="verinsLevage"> Vérin(s) de levage (fuite, fixations, arrêts d'axes) </label>
                        <select name="verinsLevage">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="verinsLevage">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="verinsInclinaison"> Vérins d'inclinaison </label>
                        <select name="verinsInclinaison">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="verinsInclinaison">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="autresVerins"> Autre (s) vérin(s) : </label>
                        <select name="autresVerins">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="autresVerins">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="canalisations"> Canalisations hydrauliques rigides et flexibles </label>
                        <select name="canalisations">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="canalisations">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="canalisations"> Canalisations hydrauliques rigides et flexibles </label>
                        <select name="canalisations">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="canalisations">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="flexibles"> Protection des flexibles pressions à -d'1mètre </label>
                        <select name="flexibles">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="flexibles">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="distributerus"> Distributeurs (fuites, connexions…) </label>
                        <select name="distributerus">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="distributerus">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="chainesLevage"> Chaines de levage (usure, fixations…) </label>
                        <select name="chainesLevage">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="chainesLevage">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-tenth>
                <details>
                    <summary> Signalisation </summary>
                    <div>
                        <label for="abaqueCharge"> Abaque(s) de charge 1500Kg </label>
                        <select name="abaqueCharge">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="abaqueCharge">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="zones"> Avertissements de zones dangereures </label>
                        <select name="zones">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="zones">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-eleventh>
                <details>
                    <summary> ESSAI DE FUNCTIONEMENT N.B : Les essais en charge ne sont à réaliser que si l'état du chariot le permet </summary>
                    <div>
                        <label for="immobilite"> Immobilité des équipements de levage ou de translation au démarrage et à l'arrêt du chariot </label>
                        <select name="immobilite">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="immobilite">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="freinService"> Fonctionnement du frein de service </label>
                        <select name="freinService">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="freinService">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="freinParc"> Fonctionnement du frein de parc ou frein serrage auto </label>
                        <select name="freinParc">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="freinParc">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="direction"> Fonctionnement de la direction </label>
                        <select name="direction">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="direction">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="essaiLevage"> Essai de levage (fonctionnement sans à-coups, vibration, bruit anormal, vérification de la vitesse de descente (0,6M/S) </label>
                        <select name="essaiLevage">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="essaiLevage">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
            <div data-twelfth>
                <details>
                    <summary> Essai de maintien de charge </summary>
                    <div>
                        <label for="circuit"> Etanchéité du circuit de levage </label>
                        <select name="circuit">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="circuit">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="circuitInclinaison"> Etanchéité du circuit d'inclinaison </label>
                        <select name="circuitInclinaison">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="circuitInclinaison">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="excessive"> Si la descente excessive de la charge, indiquer le ou les vérins où se situe la fuite : </label>
                        <select name="excessive">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="excessive">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <p> Vérins(s) de levage  …. Déplacement de … mm </p>
                        <p> Vérin(s) d'inclinaison … Déplacement de … mm </p>
                    </div>
                </details>
            </div>
            <div data-thirteenth>
                <details>
                    <summary> Recommandé mais pas obligatoire </summary>
                    <div>
                        <label for="epreuve"> Epreuve dynamique (CMU + 10% ou valeur constructeur; 15mn recommandation VGP) </label>
                        <select name="epreuve">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="epreuve">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="essai"> Charge d'éssai : 1550 Kg à une distance mesurée de : 3m </label>
                        <select name="essai">
                            <option> Choisir </option>
                            <option value="b"> B </option>
                            <option value="d"> D </option>
                            <option value="Neo"> Neo </option>
                        </select>
                        <select name="essai">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="surcharge"> Est-ce que les dispositifs de limitation de la surcharge se sont déclenchés </label>
                        <select name="surcharge">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                    <div>
                        <label for="dispSecurite"> Est-ce que les dispositifs de sécurité du maintien de la charge fonctionnent </label>
                        <select name="dispSecurite">
                            <option> Choisir </option>
                            <option value="vrai"> V </option>
                            <option value="faux"> F </option>
                        </select>
                    </div>
                </details>
            </div>
        </div>
    </div>
     );
}

export default RapportVGP;