import { graphql, Link } from "gatsby";
import React from "react";
import Previous from "../components/previous/previous";
import Layout from "../containers/layout";
import * as styles from "../styles/company.css"

export const query = graphql`
  query Company1($id: String!) {
    entreprise: sanityCompany(id: { eq: $id }) {
        _id
        title
        rue
        ville
        code_postal
        activite
        division
        email
        fax
        gerant
        statut
        telephone
    }
    fichedeposte: allSanityFichesApi(filter: {entreprise: {id: {eq: $id}}}) {
      edges {
        node {
          _id
          fichedeposte
          version
          slug 
          entreprise {
              title
            }
        }
      }
    }
    noticechimique: allSanityFichesChmiqueApi(filter: {entreprise: {id: {eq: $id}}}) {
      edges {
        node {
          _id
          fichedeposte
          version
          slug
          entreprise {
              title
            }
        }
      }
    }
    livrets: allSanityLivretsApi(filter: {title: {id: {eq: $id}}}) {
      edges {
        node {
          title {
            title
          }
          slug
        }
      }
    }
    vgp: allSanityVgp(filter: {entreprise: {id: {eq: $id}}}) {
      edges {
        node {
         id
       }
      }
    }
  }
`;

const CompanyTemplate = (props) => {
  let log = console.log;
  const { data, errors } = props;
  
  const fiches = data && data.fichedeposte;
  const notices = data && data.noticechimique;
  const livrets = data && data.livrets;
  const vgp = data && data.vpg;

  const entreprise = data && data.entreprise;

  const tomail = 'mailto:' + data.entreprise.email 
  const checknl = data.entreprise.title



  return (
    <Layout>
      <Previous />
      <h1>{entreprise.title} </h1>  
      <div data-companyWrapper>
        <div data-companyGrid>
          <div data-detailscompany>
            <h2>Fiche détaillée</h2>
            <span data-traitsepa>&nbsp;</span>
            <h3>{entreprise.title}</h3>
            <h4>Statut : <span data-infodyn>{entreprise.statut}</span></h4>
            <h4>Gérant : <span data-infodyn>{entreprise.gerant}</span></h4>
            <h4>Activité : <span data-infodyn>{entreprise.activite}</span></h4>
            <h4>Email : <span data-infodyn><a href={tomail}>{entreprise.email}</a></span></h4>
            <h4>Tel : <span data-infodyn>{entreprise.telephone}</span></h4>
            <h4>Division : <span data-infodyn>{entreprise.division}</span></h4>
            <h4>Adresse : <br />
            <span data-infodyn>
              {entreprise.rue}
              <br />
            {entreprise.code_postal} {entreprise.ville}</span></h4>
            
          </div>
          <div data-linktodocs>
            <Link to="/fsap"
              state={{fiches: fiches, entreprise: entreprise}}
            >
                <div data-item data-fsap>
                    <h3>Fiche sécurité au poste</h3>
                </div>
            </Link>
            <Link to="/notice"
              state={{notices: notices, entreprise: entreprise}}
            >
              <div data-item data-chem>
                  <h3>Notice de Poste Produit Chimique</h3>
              </div>
            </Link>
            <Link to="/livret"
              state={{livrets: livrets, entreprise: entreprise}}
            >
              <div data-item data-livret>
                  <h3>Livret D'Accueil </h3>
              </div>
            </Link>
            <Link to="/vgp"
              state={{vgp: vgp, entreprise: entreprise}}
            >
              <div data-item data-vgp>
                  <h3> VGP </h3>
              </div>
            </Link>
            {checknl=="BERISKO" && 
            <Link to="/newsletter">
            <div data-item data-nl>
                  <h3>Newsletter</h3>
              </div>
            </Link>
            }
          </div>  
        </div>
      </div>
    </Layout>
  );
};

export default CompanyTemplate;
