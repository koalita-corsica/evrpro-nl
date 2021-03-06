/* eslint-disable no-unused-vars */
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import { MdPerson, MdDescription, MdLocalOffer } from "react-icons/md";
import IframePreviewNews from "../previews/IframePreviewNews";
import IframePreviewFiche from "../previews/IframePreviewFiches";
import IframePreviewLivret from "../previews/IframePreviewLivret";
import IframePreviewFichesChimi from "../previews/IframePreviewFichesChimi";

// Web preview configuration
const remoteURL = "https://evrpro-nl.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "newsletter") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreviewNews)
        .title("Aperçu Web")
        .options({ previewURL }),
    ]);
  } else if (schemaType == "fiches") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreviewFiche)
        .title("Aperçu Web")
        .options({ previewURL }),
    ]);
  } else if (schemaType == "livrets") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreviewLivret)
        .title("Aperçu Web")
        .options({ previewURL }),
    ]);
  }
  else if (schemaType == "fichesChmique") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreviewFichesChimi)
        .title("Aperçu Web")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Newsletter")
        .icon(MdDescription)
        .schemaType("newsletter")
        .child(S.documentTypeList("newsletter").title("Newsletters")),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) => !["newsletter", "siteSettings"].includes(listItem.getId())
      ),
    ]);
