import React, {useEffect, useState} from 'react';
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

const RapportVGP = ({props, numero, typeVerif, certif, manuel, rapportPrec, carnet, registre, source, chassis, setChassis, charpente, setCharpente, cabine, setCabine, organes, setOrganes, mecatrans, setMecatrans, translation, setTranslation, orientation, setOrientation, equipoutils, setEquipoutils, disposdiverses, setDisposdiverses}) => {
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


  

    const updatechassis = (e) => {

        let newState = chassis.map(obj => {

        let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
        let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
        let parent = e.parentNode.parentNode.firstChild.innerHTML
        let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
        let data = (inputText) ? inputText : parent
          if (obj.nom === sujet) {
            return {...obj, etat: valeur, detail: data};
          }
          return obj;
        });
    
        setChassis(newState);
      }

    function updatecharpente(e) {
        
        let newState = charpente.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setCharpente(newState)
    }

    function updatecabine(e) {
        
        let newState = cabine.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setCabine(newState)
    }

    function updateorganes(e) {
        
        let newState = organes.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setOrganes(newState)
    }

    function updatemecatrans(e) {
        
        let newState = mecatrans.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setMecatrans(newState)
    }
    
    function updatetranslation(e) {
        
        let newState = translation.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setTranslation(newState)
    }

    function updateorientation(e) {
        
        let newState = orientation.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setOrientation(newState)
    }

    function updateequipoutil(e) {
        
        let newState = equipoutils.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });

        setEquipoutils(newState)
    }

    function updatedisposdiverses(e) {
        let newState = disposdiverses.map(obj => {

            let sujet = e.parentNode.parentNode.querySelector('input[type=radio]').name
            let valeur = e.parentNode.parentNode.querySelector('input[type=radio]:checked').value
            let parent = e.parentNode.parentNode.firstChild.innerHTML
            let inputText = e.parentNode.parentNode.lastChild.querySelector('input').value
            let data = (inputText) ? inputText : parent
              if (obj.nom === sujet) {
                return {...obj, etat: valeur, detail: data};
              }
              return obj;
            });
            setDisposdiverses(newState)
    }


    return ( 
        <div data-chariotWrapper>
        <div data-form>
            <div data-first>
            <details>
                <summary> Infos Rapport </summary>
                    <p> Date: <span> {date} </span> </p>
                    <p> N?? Client <span> {nClient} </span> </p>
                    <p> N?? Controle <span> {nControle} </span> </p>
                    <p> Prochaine verification {prochaineVerif}  </p>
                </details>
            </div>
            <div data-second>
                <details>
                <summary> Type de verification </summary>
                    <h5> Type de Verification </h5>
                    <div onChange={(event) => typeVerif(event.target.value)}>
                        <label><input type='radio' name="typeVerif" value="miseEnService" /> V??rification de mise en service <br /></label>
                        <label><input type='radio' name="typeVerif" value="periodique" /> V??rification G??n??rale P??riodique VGP (Article R4323-23,24,25,26,27) <br /></label>
                        <label><input type='radio' name="typeVerif" value="remiseEnService" /> V??rification de remise en service </label>
                    </div>
                </details>
            </div>
            <div data-third>
                <details>
                    <summary> DOCUMENT OBLIGATOIRE REMPLI ET FOURNI </summary>
                    <div>
                        <div onChange={(event) => certif(event.target.value)}>
                        <h5> Certifcat de conformit?? + ??preuve de mise en service </h5>
                            <label><input type='radio' name='conf' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='conf' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => manuel(event.target.value)}>
                        <h5> Manuel d???Utilisation (Art. R4323-1 du C.T.) </h5>
                            <label><input type='radio' name='manuel' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='manuel' value="non" /> Non </label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(event) => rapportPrec(event.target.value)}>
                        <h5> Rapport(s) de v??rification pr??c??dent???s) (Art L4711-1 du C.T.) </h5>
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
                        <h5> Registre de s??curit?? (Art. R.4323-26, 27 du C.T.) </h5>
                            <label><input type='radio' name='registre' value="oui" /> Oui <br /></label>
                            <label><input type='radio' name='registre' value="non" /> Non </label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-fourth>
                <details>
                    <summary> SOURCE D???ENERGIE </summary>
                    <div>
                        <h5> Equipements et Canalisations </h5>
                        <div onChange={(event) => source(event.target.value)}>
                            <label><input type='radio' name='source' value='be' />Bon etat</label>
                            <label><input type='radio' name='source' value='def' />Defectueux</label>
                            <label><input type='radio' name='source' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-fifth>
                <details>
                    <summary> CHASSIS - Porteur </summary>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Ch??ssis, traverses, longerons </h5>
                            <label><input type='radio' name='chassis' value='be' />Bon etat</label>
                            <label><input type='radio' name='chassis' value='def' />Defectueux</label>
                            <label><input type='radio' name='chassis' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Organes de roulement (pneumatiques, chenilles)</h5>
                            <label><input type='radio' name='organe' value='be' />Bon etat</label>
                            <label><input type='radio' name='organe' value='def' />Defectueux</label>
                            <label><input type='radio' name='organe' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Indicateur de d??vers </h5>
                            <label><input type='radio' name='devers' value='be' />Bon etat</label>
                            <label><input type='radio' name='devers' value='def' />Defectueux</label>
                            <label><input type='radio' name='devers' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Dispositif d???arrimage pour le transport</h5>
                            <label><input type='radio' name='arrimage' value='be' />Bon etat</label>
                            <label><input type='radio' name='arrimage' value='def' />Defectueux</label>
                            <label><input type='radio' name='arrimage' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatechassis(e.target)}>
                        <h5> Verrouillage m??canique du ch??ssis articul??</h5>
                            <label><input type='radio' name='verrouillage' value='be' />Bon etat</label>
                            <label><input type='radio' name='verrouillage' value='def' />Defectueux</label>
                            <label><input type='radio' name='verrouillage' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
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
                            <label><input type='radio' name='ossature' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Fl??che, bras, balancier </h5>
                            <label><input type='radio' name='fleche' value='be' />Bon etat</label>
                            <label><input type='radio' name='fleche' value='def' />Defectueux</label>
                            <label><input type='radio' name='fleche' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Contrepoids (fixations)</h5>
                            <label><input type='radio' name='contrepoid' value='be' />Bon etat</label>
                            <label><input type='radio' name='contrepoid' value='def' />Defectueux</label>
                            <label><input type='radio' name='contrepoid' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecharpente(e.target)}>
                        <h5> Acc??s int??gr??s pour entretien</h5>
                            <label><input type='radio' name='accesentretien' value='be' />Bon etat</label>
                            <label><input type='radio' name='accesentretien' value='def' />Defectueux</label>
                            <label><input type='radio' name='accesentretien' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-seventh>
            <details>
                    <summary> CABINE ??? POSTE DE CONDUITE </summary>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Acc??s cabine / poste de conduite</h5>
                            <label><input type='radio' name='accescabine' value='be' />Bon etat</label>
                            <label><input type='radio' name='accescabine' value='def' />Defectueux</label>
                            <label><input type='radio' name='accescabine' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Constitution ??? Fixations - Plancher</h5>
                            <label><input type='radio' name='constitution' value='be' />Bon etat</label>
                            <label><input type='radio' name='constitution' value='def' />Defectueux</label>
                            <label><input type='radio' name='constitution' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Structure de protection, ROPS & FOPS</h5>
                            <label><input type='radio' name='structureprot' value='be' />Bon etat</label>
                            <label><input type='radio' name='structureprot' value='def' />Defectueux</label>
                            <label><input type='radio' name='structureprot' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Visibilit?? (vitrages - essuie-glace)</h5>
                            <label><input type='radio' name='visibilite' value='be' />Bon etat</label>
                            <label><input type='radio' name='visibilite' value='def' />Defectueux</label>
                            <label><input type='radio' name='visibilite' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Chauffage</h5>
                            <label><input type='radio' name='Chauffage' value='be' />Bon etat</label>
                            <label><input type='radio' name='Chauffage' value='def' />Defectueux</label>
                            <label><input type='radio' name='Chauffage' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Extincteur en cabine</h5>
                            <label><input type='radio' name='chauffage' value='be' />Bon etat</label>
                            <label><input type='radio' name='chauffage' value='def' />Defectueux</label>
                            <label><input type='radio' name='chauffage' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                            </div>
                        </div>
                    <div>
                    <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Si??ge ??? R??troviseurs</h5>
                            <label><input type='radio' name='siegeretro' value='be' />Bon etat</label>
                            <label><input type='radio' name='siegeretro' value='def' />Defectueux</label>
                            <label><input type='radio' name='siegeretro' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Ceinture de s??curit??</h5>
                            <label><input type='radio' name='ceinture' value='be' />Bon etat</label>
                            <label><input type='radio' name='ceinture' value='def' />Defectueux</label>
                            <label><input type='radio' name='ceinture' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatecabine(e.target)}>
                        <h5>Eclairage cabine</h5>
                            <label><input type='radio' name='eclairagecabine' value='be' />Bon etat</label>
                            <label><input type='radio' name='eclairagecabine' value='def' />Defectueux</label>
                            <label><input type='radio' name='eclairagecabine' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
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
                            <label><input type='radio' name='identification' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Retour au point neutre (levage)</h5>
                            <label><input type='radio' name='retourneutre' value='be' />Bon etat</label>
                            <label><input type='radio' name='retourneutre' value='def' />Defectueux</label>
                            <label><input type='radio' name='retourneutre' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Mise en marche - arr??t s??lecteur</h5>
                            <label><input type='radio' name='misenmarche' value='be' />Bon etat</label>
                            <label><input type='radio' name='misenmarche' value='def' />Defectueux</label>
                            <label><input type='radio' name='misenmarche' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Dispositif de condamnation</h5>
                            <label><input type='radio' name='condamnation' value='be' />Bon etat</label>
                            <label><input type='radio' name='condamnation' value='def' />Defectueux</label>
                            <label><input type='radio' name='condamnation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Identification des organes de service</h5>
                            <label><input type='radio' name='identification' value='be' />Bon etat</label>
                            <label><input type='radio' name='identification' value='def' />Defectueux</label>
                            <label><input type='radio' name='identification' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Autres arr??ts</h5>
                            <label><input type='radio' name='autresarrets' value='be' />Bon etat</label>
                            <label><input type='radio' name='autresarrets' value='def' />Defectueux</label>
                            <label><input type='radio' name='autresarrets' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Avertisseurs sonores ou lumineux</h5>
                            <label><input type='radio' name='avertisseurs' value='be' />Bon etat</label>
                            <label><input type='radio' name='avertisseurs' value='def' />Defectueux</label>
                            <label><input type='radio' name='avertisseurs' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Indicateur de d??vers</h5>
                            <label><input type='radio' name='indicdevers' value='be' />Bon etat</label>
                            <label><input type='radio' name='indicdevers' value='def' />Defectueux</label>
                            <label><input type='radio' name='indicdevers' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorganes(e.target)}>
                        <h5>Autres organes de service</h5>
                            <label><input type='radio' name='autresorganes' value='be' />Bon etat</label>
                            <label><input type='radio' name='autresorganes' value='def' />Defectueux</label>
                            <label><input type='radio' name='autresorganes' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-tenth>
            <details>
                    <summary>"MECANISME ORGANES DE TRANSMISSION ACCESSOIRE"</summary>
                    <div>
                        <div onChange={(e) => updatemecatrans(e.target)}>
                        <h5>M??canismes</h5>
                            <label><input type='radio' name='mecanismes' value='be' />Bon etat</label>
                            <label><input type='radio' name='mecanismes' value='def' />Defectueux</label>
                            <label><input type='radio' name='mecanismes' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatemecatrans(e.target)}>
                        <h5>V??rins et canalisations</h5>
                            <label><input type='radio' name='verinscanalisation' value='be' />Bon etat</label>
                            <label><input type='radio' name='verinscanalisation' value='def' />Defectueux</label>
                            <label><input type='radio' name='verinscanalisation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatemecatrans(e.target)}>
                        <h5>Protection des organes mobiles de transmission</h5>
                            <label><input type='radio' name='protection' value='be' />Bon etat</label>
                            <label><input type='radio' name='protection' value='def' />Defectueux</label>
                            <label><input type='radio' name='protection' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-eleventh>
                <details>
                    <summary>MOUVEMENT DE TRANSLATION</summary>
                    <div>
                        <div onChange={(e) => updatetranslation(e.target)}>
                        <h5>Frein</h5>
                            <label><input type='radio' name='freinsTranslation' value='be' />Bon etat</label>
                            <label><input type='radio' name='freinsTranslation' value='def' />Defectueux</label>
                            <label><input type='radio' name='freinsTranslation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatetranslation(e.target)}>
                        <h5>S??curit?? de si??ge</h5>
                            <label><input type='radio' name='securiteSiege' value='be' />Bon etat</label>
                            <label><input type='radio' name='securiteSiege' value='def' />Defectueux</label>
                            <label><input type='radio' name='securiteSiege' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatetranslation(e.target)}>
                        <h5>Feux de signalisation</h5>
                            <label><input type='radio' name='feuxSignalisation' value='be' />Bon etat</label>
                            <label><input type='radio' name='feuxSignalisation' value='def' />Defectueux</label>
                            <label><input type='radio' name='feuxSignalisation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-twelfth> 
                <details>
                    <summary>MOUVEMENT D???ORIENTATION</summary>
                    <div>
                        <div onChange={(e) => updateorientation(e.target)}>
                        <h5>M??canismes</h5>
                            <label><input type='radio' name='mecanismeOrientation' value='be' />Bon etat</label>
                            <label><input type='radio' name='mecanismeOrientation' value='def' />Defectueux</label>
                            <label><input type='radio' name='mecanismeOrientation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorientation(e.target)}>
                        <h5>Frein</h5>
                            <label><input type='radio' name='freinsOrientation' value='be' />Bon etat</label>
                            <label><input type='radio' name='freinsOrientation' value='def' />Defectueux</label>
                            <label><input type='radio' name='freinsOrientation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorientation(e.target)}>
                        <h5>Limiteur d???orientation</h5>
                            <label><input type='radio' name='limiteurOrientation' value='be' />Bon etat</label>
                            <label><input type='radio' name='limiteurOrientation' value='def' />Defectueux</label>
                            <label><input type='radio' name='limiteurOrientation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updateorientation(e.target)}>
                        <h5>Dispositif d???immobilisation (transport)</h5>
                            <label><input type='radio' name='dispositifiImmobilisation' value='be' />Bon etat</label>
                            <label><input type='radio' name='dispositifiImmobilisation' value='def' />Defectueux</label>
                            <label><input type='radio' name='dispositifiImmobilisation' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-thirteenth>
            <details>
                    <summary>EQUIPEMENTS-OUTILS (GODET, PINCE, LAME, BENNE, DENT, DEFONCEUSE, COMPACTEUR)</summary>
                    <div>
                        <div onChange={(e) => updateequipoutil(e.target)}>
                        <h5>Structure ??? Fixations ??? Liaisons - Axes</h5>
                            <label><input type='radio' name='equipoutils' value='be' />Bon etat</label>
                            <label><input type='radio' name='equipoutils' value='def' />Defectueux</label>
                            <label><input type='radio' name='equipoutils' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
            <div data-fourteenth>
            <details>
                    <summary>DISPOSITIONS DIVERSES</summary>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Tableau des charges</h5>
                            <label><input type='radio' name='tableauCharge' value='be' />Bon etat</label>
                            <label><input type='radio' name='tableauCharge' value='def' />Defectueux</label>
                            <label><input type='radio' name='tableauCharge' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Consignes de s??curit??</h5>
                            <label><input type='radio' name='consignesSecu' value='be' />Bon etat</label>
                            <label><input type='radio' name='consignesSecu' value='def' />Defectueux</label>
                            <label><input type='radio' name='consignesSecu' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Eclairage incorpor?? ?? l???appareil</h5>
                            <label><input type='radio' name='eclairageIncorpore' value='be' />Bon etat</label>
                            <label><input type='radio' name='eclairageIncorpore' value='def' />Defectueux</label>
                            <label><input type='radio' name='eclairageIncorpore' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Masse et capacit?? des ??quipements</h5>
                            <label><input type='radio' name='masseCapa' value='be' />Bon etat</label>
                            <label><input type='radio' name='masseCapa' value='def' />Defectueux</label>
                            <label><input type='radio' name='masseCapa' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Identification - rep??re</h5>
                            <label><input type='radio' name='idRepere' value='be' />Bon etat</label>
                            <label><input type='radio' name='idRepere' value='def' />Defectueux</label>
                            <label><input type='radio' name='idRepere' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                    <div>
                        <div onChange={(e) => updatedisposdiverses(e.target)}>
                        <h5>Notice d???instructions / d??claration de conformit??</h5>
                            <label><input type='radio' name='noticeConfo' value='be' />Bon etat</label>
                            <label><input type='radio' name='noticeConfo' value='def' />Defectueux</label>
                            <label><input type='radio' name='noticeConfo' value='nc' />Non Concern??</label>
                            <br />
                            <label>D??tail du probl??me : <input type="text" name='sourceTexte' /></label>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </div>
     );
}

export default RapportVGP;