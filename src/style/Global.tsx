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
    @media (max-width: 500px) {
      height:auto;
      .menutopdeskinner{
        flex-direction:column;
        margin-top:10px;
        margin-bottom:10px;
      }
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
    max-height:450px;
    @media (max-width: 968px) {
      max-height:300px;
      margin-top:0;
    } 
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
    @media (max-width: 968px) {
      bottom: -15px;
    } 
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


  .claimmodelouter{
    padding:20px;
    border: 2px solid #ededed;
    border-radius:20px;
    background:#fff;
    h2{
      font-size:22px;
      font-weight:700;
    }
    h3{
      font-size:18px;
      font-weight:600;
    }
    .mozarrthead{
      position:absolute;
      height:90px;
      width:auto;
      top:0;
      left:50%;
      transform:translate(-50%,-50%);
    }
    .modalouter{
      margin-top:40px;
      color:#000;
      .type{
        text-decoration:underline;
      }
      .gbg{
        border-radius: 15px;
        background-color: rgba(246,246,246,1);
        padding:16px;
        line-height:1.5;
      }
    }
    
  }
  .claimairdrop{
    padding:60px 20px;
    text-align:center;
    margin-top:14px;
  }

  //responsive
  @media (max-width: 968px) {
    // .framelgbg {
    // 	background: url("images/hyrule/frame402.png");
    // 	background-size: 100% 100%;
    // }
    .homecardouter .bgbxl{
      // background: url("images/hyrule/framebxl400bg.png");
      // background-size: 100% 100%;
      min-height: 254px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export default GlobalStyle
