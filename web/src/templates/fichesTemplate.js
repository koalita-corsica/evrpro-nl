import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Fiche from "../components/fichePoste/fiche";

export const query = graphql`
  query FicheTemplateQuery($id: String!) {
    newsletter: sanityFiches(id: { eq: $id }) {
      slug {
        current
      }
      version
      fichedeposte
      entreprise {
        name
        logo {
          asset {
            url
          }
        }
      }
      machine
      qualifications
      formation
      marque
      caract
      miseenservice
      produits
      type
      ogImage {
        asset {
          url
        }
      }
      legend
      epi {
        image {
          asset {
            url
          }
        }
      }
      interdiction {
           picto {
             asset {
               url
             }
           }
         }
      risquesD {
        ... on SanityPictosD {
          picto {
            asset {
              url
            }
          }
        }
        ... on SanityPictosO {
          picto {
            asset {
              url
            }
          }
        }
      }
      tache {
        _rawMesures
        _key
        quand
        quelle
        qui
        risques {
        ... on SanityPictosD {
          id
          picto {
            asset {
              url
            }
          }
        }
        ... on SanityPictosI {
          id
          picto {
            asset {
              url
            }
          }
        }
        ... on SanityPictosO {
          id
          picto {
            asset {
              url
            }
          }
        }
      }
      }
    }
  }
`;

const FicheTemplate = (props) => {
  const { data, errors } = props;
  const news = data && data.newsletter;
  return (
    <>
      {news && <Fiche {...news} />}
    </>
  );
};

export default FicheTemplate;
