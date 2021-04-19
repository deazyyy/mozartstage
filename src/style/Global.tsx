import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Gilroy', sans-serif;
    font-weight:600 
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background:url("images/mozart/background.png");
    background-size: contain;
    background-position:top 3vh left;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .menutopdesk{
    margin:0 auto;
    
    left: 50%;
    transform: translateX(-50%);
    .menutopdeskinner{
      margin:auto;
      padding:0 24px;
      width: 100%;
      max-width:1200px;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
  }
  .innerbody{
    max-width:1200px;
    // div:first-child{max-width:unset}
  } 
  .styledpanelcss{display:none}
  .innerbody{}
  .tags{
    color: #4bb3dd;
    border: 2px solid #4bb3dd;
    border-radius:8px;
  }
  .pianoimg{
    margin-left:-12px;
    margin-top:-20px;
    height:100%;
    max-height:450px
  }
  .mozartstandingimg{
    height:100%;
    max-height:120px
  }
  .mozartstatsimg{
    position: relative;
    bottom: -35px;
    max-height: 260px;
    margin-left: auto;
    display: block;
    margin-right: 25px;
    margin-top: -100px;
  }
  .nav_link{
    color: #000000;
    display:block;
    cursor:pointer;
    margin-right:20px
  }
  .menufooter{
    position:relative;
    background:#fff;
    padding:8px 0;
  }
  .bgbxheading{font-size:28px}
`

export default GlobalStyle
