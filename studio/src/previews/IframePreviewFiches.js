/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import styles from "./IframePreview.module.css";

/**
 * Explore more examples of previews:
 * https://www.sanity.io/blog/evolve-authoring-experiences-with-views-and-split-panes
 */

const assemblePostUrl = ({ displayed, options }) => {
  const { slug } = displayed;
  const { previewURL } = options;
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }
  const path = `/${slug.current}/`;
  return `https://evrpronl.gatsbyjs.io/fichesdeposte${path}`;
};

const IframePreview = (props) => {
  const { options } = props;
  const { displayed } = props.document;

  if (!displayed) {
    return (
      <div className={styles.componentWrapper}>
        <p>There is no document to preview</p>
      </div>
    );
  }

  const url = assemblePostUrl({ displayed, options });

  if (!url) {
    return (
      <div className={styles.componentWrapper}>
        <p>Hmm. Having problems constructing the web front-end URL.</p>
      </div>
    );
  }

  return (
    <div className={styles.componentWrapper}>
      <object data={url} width="793.70" height="1122.51" type="text/html">
        Aperçu non disponible : tous les champs ne sont pas remplis.
        Code erreur : 166-2000
      </object>
    </div>
  );
};

IframePreview.propTypes = {
  document: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  options: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

IframePreview.defaultProps = {
  document: null,
};

export default IframePreview;
