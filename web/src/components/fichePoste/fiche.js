/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import * as styles from "./fiche.module.css";
import React from "react";

import fire from "../../assets/fire.png";
import secours from "../../assets/secours.png";
import logo from "../../assets/logo.png";
import qualifi from "../../assets/qualifications.png";
import forma from "../../assets/formations.png";
import html2canvas from "html2canvas";
import PortableText from "../portableText";

const Fiche = (props) => {
  const {
    slug,
    version,
    fichedeposte,
    entreprise,
    machine,
    marque,
    caract,
    miseenservice,
    produits,
    type,
    ogImage,
    legend,
    epi,
    tache,
    qualifications,
    formation,
    interdiction,
    risquesD,
  } = props;

  var legend4 = legend.slice(0, 4)
  var legend8 = legend.slice(4, 8)
  var legend12 = legend.slice(8, 12)

  var tache2 = tache.slice(0,3);
  var tache0 = tache.slice(2,9);


  return (
    <React.Fragment>
      <input
        type="button"
        value="Télécharger le pdf"
        onClick={() => window.print()}
        className={styles.button1}
      />
      <div id={styles.capture}>
        <div className={styles.container}>
          <div data-headerF>
            <div data-headerContF>
              <h2 style={{padding: '1rem'}}> Fiche de Sécurité Au Poste </h2>
              <div style={{display: 'flex', justifyContent: 'space-around', padding: '-1rem'}}>
                <div data-line2h>
                  <h6> Version n° / date <span> {version != null ? version : ''} </span> </h6>
                </div>
                <h3 style={{margin: '0', textAlign: 'center', padding: '1rem', textTransform: 'Uppercase', fontSize: '27px', marginTop: '-1rem'}}> {fichedeposte != null ? fichedeposte : ' '} </h3>
                <div data-entre>
                  <span> {entreprise.name != null ? entreprise.name : ''} </span>
                  {entreprise.logo != null ?
                  <img data-img src={entreprise.logo.asset.url} alt="logo entreprise" width="60"/>
                  :
                  <>
                  </>
                  }
                </div>
              </div>
            </div>
          </div>
          <div data-contentF>
            <div data-gray>
            </div>
            {type && type == "horizontal" ?
            <div data-machine>
            <div data-specs>
                <p> Machine : <span> {machine != null ? machine : ''} </span> </p>
                <p> Marque - Type : <span> {marque != null ? machine : ''} </span> </p>
                <p>
                  Caractéristiques principales :
                  <span> {caract != null ? caract : ''} </span>
                </p>
                <p>
                  Date de mise en service : <span> {miseenservice != null ? miseenservice : '' } </span>
                </p>
                <p>
                  Produits ou matériaux à utiliser : <span> {produits != null ? produits : ''} </span>
                </p>
              </div>
              <div data-bar/>
                <div data-rsec>
                  <img src={ogImage.asset.url} alt="" width="196" height="130"/>
                  <div data-legend>
                  {legend != null ? legend.map((item, i) =>
                    <div data-number={`${i+1}`}> {item} </div>
                  ): ''}
                  </div>
              </div>
            </div>
            :
            <div data-machinev>
            <div data-specsv>
                <p> Machine : <span> {machine != null ? machine : ''} </span> </p>
                <p> Marque/Type : <span> {marque != null ? machine : ''} </span> </p>
                <p>
                  Caractéristiques principales:
                  <span> {caract != null ? caract : ''} </span>
                </p>
                <p>
                  Date de mise en service : <span> {miseenservice != null ? miseenservice : ''} </span>
                </p>
                <p>
                  Produits ou matériaux à utiliser : <span> {produits != null ? produits : ''} </span>
                </p>
              </div>
              <div data-barv/>
                <div data-rsecv>
                <div style={{alignItems: 'flex-start'}} data-legendv>
                {legend != null ? legend.map((item, i) =>
                  <div data-number={`${i+1}`}> {item} </div>
                ): ''}
                </div>
                  <img style={{margin: '0', marginLeft: '3rem', marginRight: '1rem'}} src={ogImage.asset.url} alt="" height="231"/>
              </div>
            </div>
            }
            <div data-iconsP>
              <div data-epi>
                <h5> EPI obligatoires </h5>
                {epi != null ? epi.map((item) =>
                  <img src={item.image.asset.url} alt=""/>
                ): ''}
              </div>
              <div data-risquesD>
                <h5> Dangers - Obligations </h5>
                {risquesD != null ? risquesD.map((item) =>
                  <img src={item.picto.asset.url} alt=""/>
                ): ''}
              </div>
              <div data-inter1>
                <h5> Interdictions </h5>
                {interdiction != null ? interdiction.map((item) =>
                  <img src={item.picto.asset.url} alt=""/>
                ): ''}
              </div>
            </div>
            <div data-grid>
              <div class={styles.empty1}> </div>
              <div class={styles.headerg}>
                <p>Tâche exposant <br />l’opérateur à un risque</p>
              </div>
              <div class={styles.headerm}>
                <p>Dangers - Obligations</p>
              </div>
              <div class={styles.headerd}>
                <p>Mesures de prévention - Opérations ou procédures à respecter</p>
              </div>
              <div class={styles.empty2}></div>
              {tache2.map((item, i) =>
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
                    <img src={imag.picto.asset.url} alt="" height="44"/>
                  )}
                  </div>
                  <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                    <PortableText blocks={item._rawMesures} />
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
                    <img src={imag.picto.asset.url} alt="" height="44"/>
                  )}
                  </div>
                  <div data-d="data-d" data-odd id={`${i+1}`}>
                    <PortableText blocks={item._rawMesures} />
                  </div>
                  <div class={styles.empty} data-odd id={`${i+1}`}></div >
              </>
              )}
              </div>
            </div>
            {tache && tache.length > 3 ?
              <>
          <div data-footer/>
          <div data-page2 id="page2">
            <div data-header>
              <div data-headerCont>
                <h6> Version n° / date <span> {version} </span> </h6>
                <h4> Fiche de Sécurité Au Poste </h4>
                <h6> Entreprise <span> {entreprise.name} </span> </h6>
              </div>
            </div>
            <div data-grid1>
              <div class={styles.empty1}> </div>
              <div class={styles.headerg}>
                <p>Tâche exposant <br />l’opérateur à un risque</p>
              </div>
              <div class={styles.headerm}>
                <p>Dangers - Obligations</p>
              </div>
              <div class={styles.headerd}>
                <p>Mesures de prévention - Opérations ou procédures à respecter</p>
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
                    <img src={imag.picto.asset.url} alt="" height="44"/>
                  )}
                  </div>
                  <div style={{background: '#E5E5E5'}} data-d="data-d" data-odd id={`${i+1}`}>
                    <PortableText blocks={item._rawMesures} />
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
                    <img src={imag.picto.asset.url} alt="" height="44"/>
                  )}
                  </div>
                  <div data-d="data-d" data-odd id={`${i+1}`}>
                    <PortableText blocks={item._rawMesures} />
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
                    <h3> En cas d’accident, alerter un secouriste du travail. </h3>
                    <p>n° tél SAMU : 15 </p>
                  </div>
                </div>
                <div data-incend>
                <img src={fire} width="48px" height="48px"/>
                <div data-incendt>
                  <h3> En cas d’incendie, alerter le responsable. </h3>
                  <p>n° tél pompiers : 18 </p>
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
                  <h3> En cas d’accident, alerter un secouriste du travail. </h3>
                  <p>n° tél SAMU : <span style={{color: 'white', fontSize: '18px'}}> 15 </span> </p>
                </div>
              </div>
              <div data-incend>
              <img src={fire} width="48px" height="48px"/>
              <div data-incendt>
                <h3> En cas d’incendie, alerter le responsable. </h3>
                <p>n° tél pompiers : <span style={{color: 'white', fontSize: '18px'}}> 18 </span> </p>
              </div>
              </div>
            </div>
            <img style={{marginLeft: '44rem'}} src={logo} width="70" />
          </div>
        }
          </div>
        </div>
    </React.Fragment>
  );
};

export default Fiche;