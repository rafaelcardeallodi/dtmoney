import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    
    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (desktop)
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }
  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`