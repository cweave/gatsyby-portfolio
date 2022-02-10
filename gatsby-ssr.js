/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

const HeadComponents = [<script defer data-domain="christa-burch.com" src="https://plausible.io/js/plausible.js" key="plausible"></script>]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}
