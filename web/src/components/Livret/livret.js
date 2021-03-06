import React, {useEffect} from 'react';
import logo from "../../assets/logoL.png";
import logoN from "../../assets/logoLN.png";
import PortableText from "../portableText";
import mascotteM from "../../assets/mascotteM.png"
import risqueC from "../../assets/risqueC.png"
import mascotteG from "../../assets/mascotteG.png"
import risqueCC from "../../assets/risqueCC.png"
import diplomeN from "../../assets/diplomeN.png"
import diplomeB from "../../assets/diplomeB.png"
import manger from "../../assets/manger.png"
import alcool from "../../assets/alcool.png"
import drogue from "../../assets/drogue.png"
import ivresse from "../../assets/ivresse.png"
import mSecours from "../../assets/mSecours.png"
import phoneA from "../../assets/phoneA.png"
import feu from "../../assets/feu.png"
import proteger from "../../assets/proteger.png"
import secoursA from "../../assets/secoursA.png"
import secourisme from "../../assets/secourisme.png";
import evacuation from "../../assets/evacuation.png";
import feuM from "../../assets/feuM.png";


import * as styles from './livret.module.css';

const Livret = (props) => {
  const {title, livret, wRisques} = props;
  var total = livret.childElementCount;

  useEffect(() => {
    var livret = document.getElementById('main')
    var total = livret.childElementCount - 1;
    var tRisques = wRisques.length
    livret.childNodes.forEach((item, i) => {
      if( i != 0 && i != 1 && i != total - 1) {
        let myElm = document.createElement("p");	// Create a new element
        myElm.innerText = i;
        myElm.style.fontSize = '15px';
        myElm.style.fontWeight = 'bold';
        item.childNodes[item.childNodes.length - 1].appendChild(myElm);
      } else if (i == 1) {
        item.childNodes.forEach((sitem, i) => {
          if(i == 2){
            sitem.childNodes.forEach((Sitem, i) => {
              Sitem.childNodes.forEach((som, i) => {
                som.childNodes.forEach((item, i) => {
                  let ind = document.createElement("p");	// Create a new element
                  ind.innerText = "P.0" + (i + 2);
                  if(i == 6) {
                    ind.innerText = "P." + (i + tRisques + 1);
                  } else if (i > 6) {
                    ind.innerText = "P." + (i + tRisques + 1);
                  }
                  ind.style.fontSize = '15px';
                  ind.style.fontWeight = 'bold';
                  item.appendChild(ind)
                });
              });
            });
          }
        });
      }
    });
    var notesDiv = document.createElement('div');
    var headerDiv = document.createElement('div');
    var somDiv = document.createElement('div');
    var contentDiv = document.createElement('div');
    var footerDiv = document.createElement('div');
    var title = document.createElement('h2');
    title.innerHTML = "Notes"
    notesDiv.setAttribute('data-notes', 'true');
    notesDiv.appendChild(headerDiv);
    notesDiv.appendChild(somDiv);
    notesDiv.appendChild(contentDiv);
    notesDiv.appendChild(footerDiv);
    headerDiv.setAttribute('data-headsommaire', 'true');
    somDiv.setAttribute('data-som', 'true');
    somDiv.appendChild(title);
    contentDiv.setAttribute('data-content', 'true');
    for (var i = 0; i <= 15; i++) {
      var trayDiv = document.createElement('div');
      trayDiv.setAttribute('data-tray', 'true');
      contentDiv.appendChild(trayDiv);
    }
    footerDiv.setAttribute('data-footerres', 'true');
    if ((total + 1) % 4 != 0) {
      livret.insertBefore(notesDiv, livret.children[total-3]);
      if ((total + 1) % 4 != 0) {
        livret.insertBefore(notesDiv, livret.children[total-3]);
        if ((total + 1) % 4 != 0) {
          livret.insertBefore(notesDiv, livret.children[total-3]);
          if ((total + 1) % 4 != 0) {
            livret.insertBefore(notesDiv, livret.children[total-3]);
            if ((total + 1) % 4 != 0) {
              livret.insertBefore(notesDiv, livret.children[total-3]);
              if ((total + 1) % 4 != 0) {
                livret.insertBefore(notesDiv, livret.children[total-3]);
              }
            }
          }
        }
      }
    }
  });

  const monthNames = {0 : "Janvier", 1 : "F??vrier", 2 : "Mars" , 3 : "Avril", 4 : "Mai", 5 : "Juin",
  6 : "Juillet", 7  : "Ao??t", 8 : "Septembre", 9 : "Octobre", 10 : "Novembre", 11 : "D??cembre"
};

  const d = new Date();

  return(
    <>
    <input
      type="button"
      value="T??l??charger le pdf"
      onClick={() => window.print()}
      className={styles.button1}
    />
    <div id={styles.capture} >
    <div data-livret id="main">
      <div data-containerCouverture>
        <div data-livretH>
          <div data-imgLogo>
            <img src={logo} alt="" width="155"/>
          </div>
          <h1 style={{margin: '0'}}> Livret Accueil S??curit?? </h1>
          <h2 style={{margin: '0', color: 'white'}}> {livret[0].precision} </h2>
        </div>
        <div data-height>
        <div data-lgray>
        </div>
        <div data-square>
          <img src={livret[0].image.asset.url} alt="" height="129" height="136" />
          <PortableText blocks={livret[0]._rawTexte} />
          <p data-ps> LAS Version n??{livret[0].version} - {monthNames[d.getMonth()]} {d.getFullYear()}</p>
        </div>
      </div>
        <footer data-lfooter>
          <div data-contact>
            <h2> Contact </h2>
          </div>
            <p style={{marginTop: '1rem'}}> {livret[0].adresse} </p>
            <p> {livret[0].numero} </p>
            <p> {livret[0].mail} </p>
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
              <div data-leftC> <p> Renseignement sur l???entreprise </p> </div>
              <div data-leftC> <p> Responsabilit?? de chacun</p></div>
              <div data-leftC> <p> R??gles g??n??rales de s??curit?? </p></div>
              <div data-leftC> <p> Restauration et repos </p></div>
              <div data-leftC> <p> Equipement de protection individuelle </p></div>
              <div data-leftC> <p> Risques g??n??raux de l'entreprise </p></div>
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
            <div data-leftC> <p> G??rant </p></div>
            <div data-leftC> <p> Activite </p> </div>
            <div data-leftC> <p> Nb de salaries </p></div>
            <div data-leftC> <p> Code Risque </p></div>
            <div data-leftC> <p> Taux AT/MP </p></div>
            <div data-leftC> <p> Document Unique </p></div>
            <div data-leftC> <p> Affichage obligatoire </p></div>
            <div data-leftC> <p> Affichage prevention </p></div>
            <div data-leftC> <p> Affichage COVID </p></div>
            <div data-leftC> <p> Unit?? de Travail </p></div>
          </div>
          <div data-rightGray>
            <p> {livret[1].gerant} </p>
            <p> {livret[1].activite} </p>
            <p> {livret[1].nbSalaries} </p>
            <p> {livret[1].codeRisque} </p>
            <p> {livret[1].taux} </p>
            <p style={{width: '90%'}}> {livret[1].documentUnique} </p>
            <p> {livret[1].affObligatoire} </p>
            <p> {livret[1].affPrevention} </p>
            <p> {livret[1].affCovid} </p>
            <p> {livret[1].unite} </p>
          </div>
        </div>
        <div data-som>
          <h2> Plan d'acc??s </h2>
        </div>
        <div data-rsfooter>
        {livret[1].image != null ?
          <img src={livret[1].image.asset.url} alt="" height="100px" />
          :
          <>
          </>
        }
        </div>
      </div>
      <div data-responsabilite>
        <div data-headSommaire />
        <div data-som>
          <h2> Responsabilit?? de chacun </h2>
        </div>
        <div data-wrapResp>
          <div data-grayR>
            <div data-respE>
              <h5> Les responsabilit??s de l'employeur (C.T.) </h5>
            </div>
            <div data-articles>
              <div data-artic1>
                <div data-bouble>
                  <img src={diplomeB} height="38"/>
                </div>
                <span> Article 4121-1 </span>
                <p> " l'employeur est tenu envers le salari?? d'une obligation de s??curit?? qui est une obligation de r??sultat ". </p>
              </div>
              <div data-artic2>
                <div data-bouble>
                  <img src={diplomeB} height="38"/>
                </div>
                <span> Article 4121-2 </span>
                <p> " l'employeur met en ??uvre les mesures pr??vues ?? l'Article 4121-1 sur le fondement des principes g??n??raux de pr??vention ", qui sont au nombre de 9. </p>
              </div>
              <div data-artic3>
                <div data-bouble>
                  <img src={diplomeB} height="38"/>
                </div>
                <span> Article 4121-3 </span>
                <p>" l'employeur, compte tenu de la nature des activit??s de l'??tablissement, doit proc??der ?? l'??valuation des risques pour assurer la sant?? physique et mentale de ses salari??s ". </p>
              </div>
            </div>
          </div>
          <div data-tray>
            <div data-respS>
              <h5> Les responsabilit??s du salari?? (C.T.) </h5>
            </div>
            <div data-sTxt>
              <p> Tout salari?? a une obligation de s??curit?? pour lui et pour les autres. Un manquement ?? cette obligation peut ??tre consid??r?? comme une faute et entra??ner des poursuites en cas d'accident. </p>
            </div>
            <div data-lastArtc>
              <div data-bouble>
                <img src={diplomeN} height="38"/>
              </div>
              <span> Article 4122-1 </span>
              <p> Conform??ment aux instructions qui lui sont donn??es par l'employeur, dans les conditions pr??vues au r??glement int??rieur (???), <strong> il incombe ?? chaque travailleur de prendre soin </strong>, en fonction de sa formation et selon ses possibilit??s, <strong> de sa sant?? et de sa s??curit?? </strong> ainsi que de celles des <strong> autres personnes </strong> concern??es par ses actes ou ses omissions au travail. </p>
            </div>
          </div>
        </div>
        <div data-rfooter />
      </div>
      <div data-regles>
        <div data-headSommaire />
        <div data-som>
          <h2> R??gles g??n??rales de s??curit?? </h2>
        </div>
        <div data-wrapRegl>
          <div data-noirR>
            <ul>
              <li>
                Respecter les consignes de s??curit??
              </li>
              <li>
                Respecter les dispositifs de protection collective
              </li>
              <li>
                Utiliser les ??quipements de protection individuelle
              </li>
              <li>
                Respecter le r??glement de l???entreprise
              </li>
              <li>
                Respecter les interdictions de fumer
              </li>
              <li>
                Respecter les interdictions de consommer des boissons alcoolis??es sur le lieu de travail
              </li>
              <li>
                Signaler toute situation dangereuse ?? votre responsable
              </li>
              <li>
                Utiliser le mat??riel uniquement pour l???usage auquel il est destin??
              </li>
            </ul>
          </div>
          <div data-contS>
            <div data-titCont>
              <p> Contacts </p>
            </div>
            <div data-gridContact>
              {livret[2].infos.map((item) =>
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
        <div data-som> <h2> Restauration et repos </h2> </div>
        <div data-contain>
          <div data-leftR> <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem' }}> <img src={manger} height="100" /> <img src={drogue} height="100" /> <img src={alcool} height="100" /> <img src={ivresse} height="100" /></div> </div>
            <div data-rightR>
              <div data-elem1>
                <p> En application de l???article R.4228-21 du CTl, il est interdit au personnel de prendre ses repas dans les locaux affect??s au travail. </p>
              </div>
              <div data-elem2>
                <p> L???introduction de drogue ou boissons alcoolis??es sur les chantiers est interdite. S???agissant des boissons alcoolis??es, des autorisations particuli??res et exceptionnelles peuvent ??tre d??livr??es. </p>
              </div>
              <div data-elem3>
                <p> Il est interdit de p??n??trer ou de demeurer dans l?????tablissement en ??tat d???ivresse ou sous l???emprise de la drogue. </p>
              </div>
              <div data-elem4>
                <p> En cas de doute sur l?????tat d???impr??gnation alcoolique d???un salari?? occup?? ?? un poste dangereux pour lui-m??me, ses coll??gues, les usagers ou le public, et s???il l???on consid??re qu???il n???est plus ?? m??me d???assurer ses missions, celui-ci pourra ??tre soumis ?? un contr??le ??thylotest. </p>
              </div>
              <div data-elem5>
                <p> Le contr??le sera effectu?? par un ou des agents habilit??s, d??sign??s par la direction de l?????tablissement. Le salari?? pourra exiger que le contr??le s???effectue en pr??sence d???un membre du personnel de son choix et qu???une contre-expertise sur son ??tat soit r??alis??e. </p>
              </div>
            </div>
        </div>
        <div data-footerRes/>
      </div>
      {/*EPI'S*/}
      {livret[3].epi.length < 6 ?
      <div data-equip>
        <div data-headSommaire/>
        <div data-som>
          <h2> Equipement de protection individuelle </h2>
         </div>
          <div data-contentE>
            <div data-titleE>
              <p> Lors des diff??rentes activit??s pour l'entreprise, le port des EPI suivants est obligatoire. </p>
            </div>
            <div data-gridEquip>
              {livret[3].epi.map((item) =>
                <div data-card>
                  <img src={item.image.asset.url} width="95" alt="" />
                  <h4> {item.title} </h4>
                  <PortableText blocks={item._rawDescription} />
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
              <p style={{textAlign: 'center'}}> Lors des diff??rentes activit??s pour l'entreprise, le port des EPI suivants est obligatoire. </p>
            </div>
            <div data-gridEquip>
              {livret[3].epi.map((item) =>
                <div data-card>
                  <img src={item.image.asset.url} width="75" height="75" alt="" />
                  <h4> {item.title} </h4>
                  <PortableText blocks={item._rawDescription} />
                </div>
              )}
            </div>
          </div>
          <div data-footerRes />
      </div>
      </>
      }
      {/* RISQUES ICI */}
      {wRisques.map((item) =>
      <div data-risques>
      <div data-headSommaire/>
      <div data-som> <h2> Risques g??n??raux de l'entreprise </h2> </div>
      <div data-contentR>
        <div data-noirC>
          {item.picto != null ?
          <img src={item.picto.asset.url} alt="" />
          :
          <>
          </>
          }
        </div>
        <div data-danger>
        {item.warn != null ?
          <img src={item.warn.asset.url} alt="" height="47" />
          :
          <div style={{height: '47px'}}>
          </div>
          }
        </div>
        <div data-title>
          <h5> {item.title} </h5>
        </div>
        <div data-contentRisque>
          <div style={{background: '#ececec', borderBottom: '1px solid black', margin: '0', paddingTop: '.5rem'}}> <PortableText blocks={item._rawP1}/> </div>
          <div style={{margin: '0'}}> <PortableText blocks={item._rawP2}/> </div>
          <div style={{background: '#ececec', margin: '0', borderTop: '1px solid black'}}> <PortableText blocks={item._rawP3}/> </div>
          <div> <PortableText blocks={item._rawP4}/> </div>
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
        <div data-som> <h2> En cas d'accident </h2> </div>
        <div data-wrapAcc>
          <div data-flexA>
            <div data-left>
              <div data-firstItem>
                <div data-num> <h2> 1 </h2> </div>
                <h4> Analyser et prot??ger </h4>
                <p> C???est reconna??tre, sans s???exposer soi-m??me, les dangers persistants qui menacent la victime de l???accident et les autres personnes expos??es. </p>
              </div>
              <div data-thirdItem>
                <div data-num> <h2> 3 </h2> </div>
                <h4> Alerter ou faire alerter </h4>
                <p> C???est transmettre aux moyens et aux personnes pr??vus dans l???organisation des secours de l???entreprise, les informations n??cessaires et suffisantes pour qu???ils puissent organiser leur intervention. L???alerte doit ??tre la plus pr??coce possible. </p>
              </div>
            </div>
            <div data-right>
              <div data-SecondItem>
                <div data-num> <h2> 2 </h2> </div>
                <h4> Examiner </h4>
                <p> C???est rechercher les signes qui indiquent que la vie de la victime est menac??e </p>
              </div>
              <div data-fourthItem>
                <div data-num> <h2> 4 </h2> </div>
                <h4> Secourir : porter assistance ?? la victime </h4>
                <p style={{margin: 0}}> Couvrir le bless?? (ne pas bouger la victime </p>
                <p style={{margin: 0}}> Ne pas donner ?? boire </p>
                <p style={{margin: 0}}> ??loigner les curieux </p>
              </div>
              <div data-telA>
                <p> T??l??phonez au : </p>
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
          <p> L'employeur doit ??tre tenu inform?? syst??matiquement en cas d'incident ou d'accident </p>
          </div>
        </div>
        <div data-footerRes>
          <div data-sauv>
            <div data-text>
              <h5> Sauveteur Secouriste du Travail : </h5>
              <p> Son r??le est de porter les premiers secours ?? toute victime d'un accident du travail ou d'un malaise, mais aussi d?????tre acteur de la pr??vention dans son entreprise. Liste du personnel form?? sur affichage s??par??. </p>
            </div>
            <img src={secourisme} width="210" height="210" alt="" />
          </div>
        </div>
      </div>
      <div data-incendie>
        <div data-headSommaire />
        <div data-som> <h2> En cas d'incendie </h2> </div>
        <div data-wrapInc>
          <div data-wrapF>
            <div data-first>
              <div data-num1> <h2> 1 </h2> </div>
              <img src={phoneA} height="41" />
              <p> Alerter</p>
              <p> Pr??venir les Urgences ad??quates : </p>
              <div data-contat>
                <p> 18 ou 112 </p>
              </div>
              <p> Pr??venir l'employeur (si possible) </p>
            </div>
            <div data-second>
              <div data-num1> <h2> 2 </h2> </div>
              <img src={feu} height="41" />
              <p> Lutter (si possible) </p>
              <p> Utiliser les moyens de secours Extincteurs </p>
              <p> Sans mettre votre vie en danger </p>
            </div>
          </div>
          <div data-line>
            <img src={evacuation} height="217" alt="" data-imgL/>
             <div data-num1> <h2> 3 </h2> </div>
             <div data-txtL>
               <span> Evacuer </span>
               <PortableText blocks={livret[4]._rawEvacuer} />
             </div>
          </div>
          <div data-line2>
             <div data-txtL>
               <span> Conseils : </span>
               <ul>
                <li>
                  R??aliser une installation conforme ;
                </li>
                <li>
                  Maintenir le libre acc??s aux issues de secours ;
                </li>
                <li>
                  Rappeler l???interdiction de fumer ;
                </li>
                <li>
                  Etablir des consignes d???incendie / Plan d?????vacuation ;
                </li>
                <li>
                  Faire v??rifier les extincteurs, alarmes, d??senfumages, ???
                </li>
                <li>
                  Sensibiliser et former les salari??s.
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
            {livret[4].logo != null ?
            <img src={livret[4].logo.asset.url} alt="" height="60" />
            :
            <>
            </>
            }
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
        <div data-som> <h2> Certificat de Formation ?? la S??curit?? G??n??rale </h2> </div>
        <div data-content>
          <div data-imgContain>
            <img style={{marginTop: '1rem'}} src={logoN} alt="" width="180"/>
          </div>
          <p style={{lineHeight: '2'}}> Je soussign??(e) ??????????????????????????????????????????????????????????????????????????????.. avoir re??u l'information et la formation en interne ?? la s??curit?? g??n??rale sp??cifique au lieu de travail de la soci??t?? <strong> {title} </strong> ainsi que le livret d'accueil s??curit??. </p>
          <p> Je reconnais ??galement avoir re??u ou avoir ?? disposition le kit Equipement de Protection Individuelle (EPI) </p>
          <div style={{display: 'flex', gap: '1rem'}}>
          {livret[3].epi.map((item) =>
            <img src={item.image.asset.url} width="66" height="66" alt="" />
          )}
          </div>
          <div data-line>
          <p> Fait le ???????????????............ </p>
          <p> Signature </p>
          </div>
          <p> ?? ??????????????????????????? </p>
          <p data-ps> LAS Version n??1 - {monthNames[d.getMonth()]} {d.getFullYear()}</p>
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
            <p> Z.I de Bal??one - Lot Michel Ange </p>
            <p> 20167 AFA </p>
            <p> 04 95 23 18 92 </p>
            <p> secretariat@evr-pro.com </p>
          </div>
        </div>
        <div data-footerF />
      </div>
    </div>
    </div>
    </>
  )
}

export default Livret;


// <div data-fourth>
//   <span> Conseils : </span>
//     <div data-line1>
//       <div data-wrpT>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//       <p> - Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//         <h6> Chaque seconde compte, Agissez ! </h6>
//       </div>
//       <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
//       <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="25" height="25" alt="" />
//     </div>
//   <img src="https://cdn.sanity.io/images/zpdf06rn/production/45f726c6482c2e8c9a49bbe55e1456e1c94da91d-1563x1680.png" width="110" height="110" alt="" data-imgR/>
// </div>
