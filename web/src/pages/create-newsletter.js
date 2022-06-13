import React, {useState} from 'react';
import Layout from "../components/layout";
import logo from "../assets/logo.png";
import email from "../assets/email.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import * as styles from "../components/LettrePro/newsletter.module.css";
import {graphql} from "gatsby";
// import 'react-quill/dist/quill.snow.css';
// const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'zpdf06rn',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skflP6VREyww0KCEsp6XZK8USpHNIFroYmGqvcri4wLr5JCMnTCU96fJgSVoesY18AcM2QTijCTmmXJefiChEobCy9PMIf7iUhLuEg2mA2XnlygVrJcjsCSf1hfuUFlV13HZDlZi7tZ1XuwiAALB5kn5ITWpRsdBAyiYiNWxkVDTAMHARMEI',
})

export const query = graphql`
query Icons {
    allSanityIcon {
      edges {
        node {
          _id
          title
          iconsGallery {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

const CreateNewsletter = (props) => {
    let log = console.log;

    let data = props.data.allSanityIcon.edges;

    const [title, setTitle] = useState("")
    const [titleArticle1, setTitleArticle1] = useState("")
    const [article1, setArticle1] = useState("")
    const [titleArticle2, setTitleArticle2] = useState("")
    const [article2, setArticle2] = useState("")
    const [mascotte, setMascotte] = useState()
    const [mascottePreview, setMascottePreview] = useState("")
    const [edito, setEdito] = useState("")
    const [articleEdito, setArticleEdito] = useState("")
    const [titleArticle3, setTitleArticle3] = useState("")
    const [article31, setArticle31] = useState("")
    const [article32, setArticle32] = useState("")
    const [titleArticle4, setTitleArticle4] = useState("")
    const [article4, setArticle4] = useState("")
    const [titleArticle5, setTitleArticle5] = useState("")
    const [article5, setArticle5] = useState("")
    const [titleArticle6, setTitleArticle6] = useState("")
    const [article6, setArticle6] = useState("")


    function actionIcon(item) {
        setMascottePreview(item.node.iconsGallery.asset.url)
        setMascotte({
            _type: "reference",
            _ref: item.node._id,
        })
    }

    function handleImage1(event){
        var canvas = document.getElementById('image1');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.height = 189;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function handleImage4(event){
        var canvas = document.getElementById('image4');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.width = 189;
                canvas.height = 113;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function handleImage5(event){
        var canvas = document.getElementById('image5');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.height = 265;
                canvas.width = 254;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function handleImage6(event){
        var canvas = document.getElementById('image6');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.height = 226;
                canvas.width = 226;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);     
    }

    function submit() {

        const doc = {
            _type: "newsletterAPI",
            titleNewsLetter: title,
            slug: title,
            titleArt1: titleArticle1,
            titleArt2: titleArticle2,
            titleArt3: titleArticle3,
            titleArt4: titleArticle4,
            titleArt5: titleArticle5,
            titleArt6: titleArticle6,
            article1: article1,
            article2: article2,
            article3p1: article31,
            article3p2: article32,
            article4: article4,
            article5: article5,
            article6: article6,
            iconEdito: mascotte,
            titleEdito: edito,
            articleEdito: articleEdito,
        }

        client.create(doc).then((res) => {
            log(`Doc is is ${res._id}`)

            document.getElementById("image1").toBlob(uploadImage1, 'image/png')

            function uploadImage1(blob) {
                client.assets
                  .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                  .then((imageAsset) => {
                    console.log('The image was uploaded!', document)
                    return client.patch(res._id)
                    .set({
                        imgArt1: {
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

              document.getElementById("image4").toBlob(uploadImage2, 'image/png')

              function uploadImage2(blob) {
                  client.assets
                    .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                    .then((imageAsset) => {
                      console.log('The image was uploaded!', document)
                      return client.patch(res._id)
                      .set({
                          imgArt4: {
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

                document.getElementById("image5").toBlob(uploadImage3, 'image/png')

                function uploadImage3(blob) {
                    client.assets
                      .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                      .then((imageAsset) => {
                        console.log('The image was uploaded!', document)
                        return client.patch(res._id)
                        .set({
                            imgArt5: {
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

                  document.getElementById("image6").toBlob(uploadImage4, 'image/png')

                  function uploadImage4(blob) {
                      client.assets
                        .upload('image', blob, {contentType: 'image/png', filename: 'someText.png'})
                        .then((imageAsset) => {
                          console.log('The image was uploaded!', document)
                          return client.patch(res._id)
                          .set({
                              imgArt6: {
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

    return ( 
        <Layout>
            <div style={{display: 'flex', gap: '10rem'}}>
                <div data-form>
                    <label for="title"> Title de la LettrePro </label>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                    <details>
                        <summary> Edito </summary>
                        <label for="edito"> Title de l'edito </label>
                        <input type="text" name="edito" onChange={(e) => setEdito(e.target.value)} />
                        {data.map((item, i) => 
                        <>
                            <input type="checkbox" id={item.node.title} name={item.node.title} value={item.node.iconsGallery.asset.url} onClick={() => actionIcon(item)} />
                            <label for={item.node.title}> <img src={item.node.iconsGallery.asset.url} width="50" /> </label>
                        </>
                        )}
                        <label for="textEdito"> Texte de l'article </label>
                        <textarea name="textEdito" onChange={(e) => setArticleEdito(e.target.value)}/>
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column', width: '45rem'}}>
                        <summary> Article 1 </summary>
                        <label for="title1"> Title de l'article 1 </label>
                        <input type="text" name="title1" onChange={(e) => setTitleArticle1(e.target.value)} />
                        <input type="file" name="image" onChange={(e) => handleImage1(e)} />
                        <label for="textA1"> Texte de l'article </label>
                        {/* <ReactQuill theme="snow" value={article1} onChange={setArticle1}/> */}
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column'}}>
                        <summary> Article 2 </summary>
                        <label for="title2"> Title de l'article 2 </label>
                        <input type="text" name="title2" onChange={(e) => setTitleArticle2(e.target.value)} />
                        <label for="textA2"> Texte de l'article </label>
                        {/* <ReactQuill theme="snow" value={article2} onChange={setArticle2}/> */}
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column'}}>
                        <summary> Article 3 </summary>
                        <label for="title3"> Title de l'article 3 </label>
                        <input type="text" name="title3" onChange={(e) => setTitleArticle3(e.target.value)} />
                        <label for="textA31"> Texte de l'article 3 P1 </label>
                        {/* <ReactQuill theme="snow" value={article31} onChange={setArticle31}/> */}
                        <label for="textA32"> Texte de l'article 3 P2 </label>
                        {/* <ReactQuill theme="snow" value={article32} onChange={setArticle32}/> */}
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column'}}>
                        <summary> Article 4 </summary>
                        <label for="title4"> Title de l'article 4 </label>
                        <input type="text" name="title4" onChange={(e) => setTitleArticle4(e.target.value)} />
                        <input type="file" name="image" onChange={(e) => handleImage4(e)}/>
                        <label for="textA4"> Texte de l'article </label>
                        {/* <ReactQuill theme="snow" value={article4} onChange={setArticle4}/> */}
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column'}}>
                        <summary> Article 5 </summary>
                        <label for="title5"> Title de l'article 5 </label>
                        <input type="text" name="title5" onChange={(e) => setTitleArticle5(e.target.value)} />
                        <input type="file" name="image" onChange={(e) => handleImage5(e)} />
                        <label for="textA5"> Texte de l'article </label>
                        {/* <ReactQuill theme="snow" value={article5} onChange={setArticle5}/> */}
                    </details>
                    <details style={{display: 'flex', flexDirection: 'column'}}>
                        <summary> Article 6 </summary>
                        <label for="title6"> Title de l'article 6 </label>
                        <input type="text" name="title6" onChange={(e) => setTitleArticle6(e.target.value)} />
                        <input type="file" name="image" onChange={(e) => handleImage6(e)} />
                        <label for="textA6"> Texte de l'article </label>
                        {/* <ReactQuill theme="snow" value={article6} onChange={setArticle6}/> */}
                    </details>
                </div>
                <div data-preview>
                    <div id={styles.capture} className={styles.capture}>
                        <div className={styles.container} id={styles.container}>
                            <div className={styles.firstLeft}>
                                <div className={styles.logo}>
                                    <img src={logo} alt="" />
                                </div>
                                <div className={styles.icon}>
                                    <img src={mascottePreview} alt="" />
                                </div>
                                <div className={styles.article1}>
                                    <h1> {edito} </h1>
                                    <p> {articleEdito} </p>
                                </div>
                                <div className={styles.contact}>
                                    <h1> CONTACTEZ-NOUS </h1>
                                    <span>
                                    <img src={phone} alt="phone" width="25px" />{" "}
                                    <p> 04 95 23 18 92 </p>
                                    </span>
                                    <span>
                                    <img src={email} alt="phone" width="25px" />
                                    <p> secretariat@evr-pro.com </p>
                                    </span>
                                    <span>
                                    <img src={globe} alt="phone" width="25px" />{" "}
                                    <p> www.evrpro.com </p>
                                    </span>
                                    <span>
                                    <img src={location} alt="phone" width="25px" />{" "}
                                    <p> Lot Michel Ange, 20167 Afa </p>
                                    </span>
                                </div>
                            </div>
                            <div data-wrap>
                                <div className={styles.article2}>
                                    <h2> {title} </h2>
                                    <h1> {titleArticle1} </h1>
                                    <span className={styles.bar} />
                                    <div data-imag>
                                        <canvas id="image1" />
                                    </div>
                                    <div className={styles.desc1}>
                                        <div dangerouslySetInnerHTML={{__html: article1}} />
                                    </div>
                                </div>
                                <span className={styles.bar2} />
                                <div className={styles.article3}>
                                    <h1> {titleArticle2} </h1>
                                    <div className={styles.desc2}>
                                        <div dangerouslySetInnerHTML={{__html: article2}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={styles.containerSecond} className={styles.containerSecond}>
                        <div data-wrap1>
                            <div className={styles.secondLeft}>
                                <div data-imag4>
                                    <canvas id="image4" />
                                </div>
                                <h1> {titleArticle4} </h1>
                                <span data-bar3 />
                                <div className={styles.desc4}>
                                    <div dangerouslySetInnerHTML={{__html: article4}} />
                                </div>
                            </div>
                            <div className={styles.article4}>
                                <h1> {titleArticle3} </h1>
                                <span className={styles.bar4} />
                                <div className={styles.artic4desc}>
                                <div className={styles.txtLeft}>
                                    <div dangerouslySetInnerHTML={{__html: article31}} />
                                </div>
                                <div className={styles.txtRight}>
                                    <div dangerouslySetInnerHTML={{__html: article32}} />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondSection}>
                            <div data-imag5>
                                <canvas id="image5" />
                            </div>
                            <div className={styles.cont5}>
                            <h1> {titleArticle5} </h1>
                                <div dangerouslySetInnerHTML={{__html: article5}} />
                            </div>
                        </div>
                        <div className={styles.thirdSection}>
                            <div data-imag6>
                                <canvas id="image6" />
                            </div>
                            <div className={styles.cont6}>
                            <h1> {titleArticle6} </h1>
                                <div dangerouslySetInnerHTML={{__html: article6}} />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={submit}> Upload </button> 
            </div>
        </Layout>
     );
}

export default CreateNewsletter;