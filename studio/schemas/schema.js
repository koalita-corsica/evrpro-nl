// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas

import siteSettings from "./documents/siteSettings";
import newsletter from "./documents/newsletter";
import newsletterAPI from "./documents/newsletterAPI";
import livretAPI from "./documents/livretAPI";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import articleNoImage from "./objects/articleNoImage";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import iconImage from "./objects/iconImage";
import icon from "./documents/icon";
import fichepost from "./documents/fichepost";
import entreprise from "./documents/entreprise";
import epis from "./documents/epis";
import tache from "./objects/tache";
import tacheAPI from "./objects/tacheAPI";
import livret from "./documents/livret.js";
import couverture from './objects/couverture.js'
import couvertureAPI from './objects/couvertureAPI.js'
import renseignement from './objects/renseignement.js'
import regles from './objects/regles.js'
import equipement from './objects/equipement.js'
import incendie from './objects/incendie.js';
import incendieAPI from './objects/incendieAPI.js';
import info from "./objects/info.js"
import fichechimique from "./documents/fichechimque";
import risques from "./documents/risques.js";
import pictosD from "./documents/pictosDanger";
import pictosI from "./documents/pictosInterdiction";
import pictosO from "./documents/pictosObligation";
import company from "./documents/company";
import adress from './objects/adress';
import contact from './objects/contact';
import activite from "./objects/activite";
import fichepostApi from "./documents/fichepostAPI";
import fichechimqueApi from "./documents/fichechimqueAPI";
import enginsAPI from "./documents/enginsAPI";
import VGP from "./documents/vgp";
import vgpchantier from "./documents/vgpchantier";
import vgpcompacteur from "./documents/vgpcompacteur";
import vgplevage from "./documents/vgplevage";
import pictosEngins from "./documents/pictosEngins";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    newsletter,
    mainImage,
    iconImage,
    bodyPortableText,
    articleNoImage,
    bioPortableText,
    excerptPortableText,
    icon,
    fichepost,
    entreprise,
    epis,
    pictosD,
    pictosI,
    pictosO,
    tache,
    livret,
    couverture,
    renseignement,
    regles,
    equipement,
    incendie,
    info,
    fichechimique,
    risques,
    company,
    adress,
    contact,
    activite,
    fichepostApi,
    livretAPI,
    fichechimqueApi,
    tacheAPI,
    couvertureAPI,
    incendieAPI,
    newsletterAPI,
    enginsAPI,
    VGP,
    vgpchantier,
    vgpcompacteur,
    vgplevage,
    pictosEngins
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
