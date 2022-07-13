import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/montserrat-v24-latin-regular.woff2') format('woff2'), /* Modern Browsers */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../fonts/montserrat-v24-latin-600.woff2') format('woff2'), /* Modern Browsers */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/montserrat-v24-latin-700.woff2') format('woff2'), /* Modern Browsers */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: local(''),
        url('../fonts/montserrat-v24-latin-italic.woff2') format('woff2'), /* Modern Browsers */
  }
  /* montserrat-600italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: local(''),
        url('../fonts/montserrat-v24-latin-600italic.woff2') format('woff2'), /* Modern Browsers */
  }
  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url('../fonts/montserrat-v24-latin-700italic.woff2') format('woff2'), /* Modern Browsers */
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
