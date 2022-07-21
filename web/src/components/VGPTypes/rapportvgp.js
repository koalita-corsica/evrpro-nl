import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const RapportVGP = ({props, numero, typeVerif, certif, manuel, rapportPrec, carnet, registre, source, chassis, setChassis, charpente, setCharpente, cabine, setCabine, organes, setOrganes}) => {
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
    // const [typeService, setTypeService] = useState("")
    // const [certificat, setCertificat] = useState("")
    //const [manuel, setManuel] = useState("")
    // const [rapports, setRapports] = useState("")
    // const [carnet, setCarnet] = useState("")
    // const [registre, setRegistre] = useState("")


    // useEffect(() => {
    //     setTimeout(getDataCompany(), 2000)
    // })


    function updatechassis(e) {
        let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
        let parent = e.parentNode.parentNode.firstChild.innerHTML
        let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
        let data = (inputText) ? inputText : parent
        let multiple = {
            etat: e.value,
            detail: data
        }
        setChassis({...chassis, [sujet]: multiple})
    }

    function updatecharpente(e) {
        let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
        let parent = e.parentNode.parentNode.firstChild.innerHTML
        let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
        let data = (inputText) ? inputText : parent
        let multiple = {
            etat: e.value,
            detail: data
        }
        setCharpente({...charpente, [sujet]: multiple})
    }

    function updatecabine(e) {
        let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
        let parent = e.parentNode.parentNode.firstChild.innerHTML
        let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
        let data = (inputText) ? inputText : parent
        let multiple = {
            etat: e.value,
            detail: data
        }
        setCabine({...cabine, [sujet]: multiple})
    }

    function updateorganes(e) {
        let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
        let parent = e.parentNode.parentNode.firstChild.innerHTML
        let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
        let data = (inputText) ? inputText : parent
        let multiple = {
            etat: e.value,
            detail: data
        }
        setOrganes({...organes, [sujet]: multiple})
    }

    return ( 
        <div data-chariotWrapper>
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
                    <h5> Type de Verification </h5>
                    <div onChange={(event) => typeVerif(event.target.value)}>
                        <label><input type='radio' name="typeVerif" value="miseEnService" /> Vérification de mise en service <br /></label>
                        <label><input type='radio' name="typeVerif" value="periodique" /> Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27) <br /></label>
                        <label><input type='radio' name="typeVerif" value="remiseEnService" /> Vérification de remise en service </label>
                    </div>
                </details>
            </div>
            <div data-third>
                <details>
                    <summary> DOCUMENT OBLIGATOIRE REMPLI ET FOURNI </summary>
                    <div>
                        <div onChange={(event) => certif(event.target.value)}>
                        <h5> Certifcat de conformité + épreuve de mise en service </h5>
                            <label><input type='radio' name='conf' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='conf' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => manuel(event.target.value)}>
                        <h5> Manuel d’Utilisation (Art. R4323-1 du C.T.) </h5>
                            <label><input type='radio' name='manuel' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='manuel' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => rapportPrec(event.target.value)}>
                        <h5> Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.) </h5>
                            <label><input type='radio' name='rapportPrec' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='rapportPrec' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => carnet(event.target.value)}>
                        <h5> Carnet de Maintenance (ArtR4323-19,20 du C.T.)</h5>
                            <label><input type='radio' name='carnet' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='carnet' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => registre(event.target.value)}>
                        <h5> Registre de sécurité (Art. R.4323-26, 27 du C.T.) </h5>
                            <label><input type='radio' name='registre' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='registre' value="non" /> Non </label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-fourth>
                <details>
                    <summary> SOURCE D’ENERGIE </summary>
                    <div>
                        <h5> Equipements et Canalisations </h5>
                        <div onChange={(event) => source(event.target.value)}>
                            <label><input type='radio' name='source' value='be' />Bon etat</label>
                            <label><input type='radio' name='source' value='def' />Defectueux</label>
                            <label><input type='radio' name='source' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-fifth>
                <details>
                    <summary> CHASSIS - Porteur </summary>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Châssis, traverses, longerons </h5>
                            <label><input type='radio' name='chassis' value='be' />Bon etat</label>
                            <label><input type='radio' name='chassis' value='def' />Defectueux</label>
                            <label><input type='radio' name='chassis' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Organes de roulement (pneumatiques, chenilles)</h5>
                            <label><input type='radio' name='organe' value='be' />Bon etat</label>
                            <label><input type='radio' name='organe' value='def' />Defectueux</label>
                            <label><input type='radio' name='organe' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Indicateur de dévers </h5>
                            <label><input type='radio' name='devers' value='be' />Bon etat</label>
                            <label><input type='radio' name='devers' value='def' />Defectueux</label>
                            <label><input type='radio' name='devers' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Dispositif d’arrimage pour le transport</h5>
                            <label><input type='radio' name='arrimage' value='be' />Bon etat</label>
                            <label><input type='radio' name='arrimage' value='def' />Defectueux</label>
                            <label><input type='radio' name='arrimage' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Verrouillage mécanique du châssis articulé</h5>
                            <label><input type='radio' name='verrouillage' value='be' />Bon etat</label>
                            <label><input type='radio' name='verrouillage' value='def' />Defectueux</label>
                            <label><input type='radio' name='verrouillage' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-sixth>
                <details>
                    <summary> CHARPENTE </summary>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Ossature, tourelle </h5>
                            <label><input type='radio' name='ossature' value='be' />Bon etat</label>
                            <label><input type='radio' name='ossature' value='def' />Defectueux</label>
                            <label><input type='radio' name='ossature' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Flèche, bras, balancier </h5>
                            <label><input type='radio' name='fleche' value='be' />Bon etat</label>
                            <label><input type='radio' name='fleche' value='def' />Defectueux</label>
                            <label><input type='radio' name='fleche' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Contrepoids (fixations)</h5>
                            <label><input type='radio' name='contrepoid' value='be' />Bon etat</label>
                            <label><input type='radio' name='contrepoid' value='def' />Defectueux</label>
                            <label><input type='radio' name='contrepoid' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Accès intégrés pour entretien</h5>
                            <label><input type='radio' name='accesentretien' value='be' />Bon etat</label>
                            <label><input type='radio' name='accesentretien' value='def' />Defectueux</label>
                            <label><input type='radio' name='accesentretien' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-seventh>
            <details>
                    <summary> CABINE – POSTE DE CONDUITE </summary>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Accès cabine / poste de conduite</h5>
                            <label><input type='radio' name='accescabine' value='be' />Bon etat</label>
                            <label><input type='radio' name='accescabine' value='def' />Defectueux</label>
                            <label><input type='radio' name='accescabine' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Constitution – Fixations - Plancher</h5>
                            <label><input type='radio' name='constitution' value='be' />Bon etat</label>
                            <label><input type='radio' name='constitution' value='def' />Defectueux</label>
                            <label><input type='radio' name='constitution' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Structure de protection, ROPS & FOPS</h5>
                            <label><input type='radio' name='structureprot' value='be' />Bon etat</label>
                            <label><input type='radio' name='structureprot' value='def' />Defectueux</label>
                            <label><input type='radio' name='structureprot' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Visibilité (vitrages - essuie-glace)</h5>
                            <label><input type='radio' name='visibilite' value='be' />Bon etat</label>
                            <label><input type='radio' name='visibilite' value='def' />Defectueux</label>
                            <label><input type='radio' name='visibilite' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Chauffage</h5>
                            <label><input type='radio' name='Chauffage' value='be' />Bon etat</label>
                            <label><input type='radio' name='Chauffage' value='def' />Defectueux</label>
                            <label><input type='radio' name='Chauffage' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Extincteur en cabine</h5>
                            <label><input type='radio' name='chauffage' value='be' />Bon etat</label>
                            <label><input type='radio' name='chauffage' value='def' />Defectueux</label>
                            <label><input type='radio' name='chauffage' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                            </div>
                        </div>
                    <div>
                    <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Siège – Rétroviseurs</h5>
                            <label><input type='radio' name='siegeretro' value='be' />Bon etat</label>
                            <label><input type='radio' name='siegeretro' value='def' />Defectueux</label>
                            <label><input type='radio' name='siegeretro' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Ceinture de sécurité</h5>
                            <label><input type='radio' name='ceinture' value='be' />Bon etat</label>
                            <label><input type='radio' name='ceinture' value='def' />Defectueux</label>
                            <label><input type='radio' name='ceinture' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Eclairage cabine</h5>
                            <label><input type='radio' name='eclairagecabine' value='be' />Bon etat</label>
                            <label><input type='radio' name='eclairagecabine' value='def' />Defectueux</label>
                            <label><input type='radio' name='eclairagecabine' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-eight>
                <details>
                    <summary>ORGANES DE SERVICE ET DE MANOEUVRE </summary>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Identification des organes de service</h5>
                            <label><input type='radio' name='identification' value='be' />Bon etat</label>
                            <label><input type='radio' name='identification' value='def' />Defectueux</label>
                            <label><input type='radio' name='identification' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Retour au point neutre (levage)</h5>
                            <label><input type='radio' name='retourneutre' value='be' />Bon etat</label>
                            <label><input type='radio' name='retourneutre' value='def' />Defectueux</label>
                            <label><input type='radio' name='retourneutre' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Mise en marche - arrêt sélecteur</h5>
                            <label><input type='radio' name='misenmarche' value='be' />Bon etat</label>
                            <label><input type='radio' name='misenmarche' value='def' />Defectueux</label>
                            <label><input type='radio' name='misenmarche' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Dispositif de condamnation</h5>
                            <label><input type='radio' name='condamnation' value='be' />Bon etat</label>
                            <label><input type='radio' name='condamnation' value='def' />Defectueux</label>
                            <label><input type='radio' name='condamnation' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Identification des organes de service</h5>
                            <label><input type='radio' name='identification' value='be' />Bon etat</label>
                            <label><input type='radio' name='identification' value='def' />Defectueux</label>
                            <label><input type='radio' name='identification' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Autres arrêts</h5>
                            <label><input type='radio' name='autresarrets' value='be' />Bon etat</label>
                            <label><input type='radio' name='autresarrets' value='def' />Defectueux</label>
                            <label><input type='radio' name='autresarrets' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Avertisseurs sonores ou lumineux</h5>
                            <label><input type='radio' name='avertisseurs' value='be' />Bon etat</label>
                            <label><input type='radio' name='avertisseurs' value='def' />Defectueux</label>
                            <label><input type='radio' name='avertisseurs' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Indicateur de dévers</h5>
                            <label><input type='radio' name='indicdevers' value='be' />Bon etat</label>
                            <label><input type='radio' name='indicdevers' value='def' />Defectueux</label>
                            <label><input type='radio' name='indicdevers' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Autres organes de service</h5>
                            <label><input type='radio' name='autresorganes' value='be' />Bon etat</label>
                            <label><input type='radio' name='autresorganes' value='def' />Defectueux</label>
                            <label><input type='radio' name='autresorganes' value='nc' />Non Concerné</label>
                            <br />
                            <label>Détail du problème : <input type="text" name='sourceTexte' /></label>
                        </div>
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