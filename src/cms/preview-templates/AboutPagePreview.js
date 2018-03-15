import React from 'react'
import { AboutPageTemplate } from 'templates/about-page'

/*
 If you used styled-components in the page you want to preview
 you have to wrap the Page Template with the PreviewStyleManager
 in order to preserve the styling inside the preview iframe.
 */
import StyleManager from './../PreviewStyleManager'

const ContentPagePreview = ({ entry, widgetFor }) => (
  <StyleManager>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
    />
  </StyleManager>
)

export default ContentPagePreview
