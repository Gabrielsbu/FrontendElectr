import { createGlobalStyle } from 'styled-components'
    
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    *, button, input {
        font-family: Roboto, sans-serif;
    }

    :root {
        --color-primary: #EDECE5;
        --color-secondary: #E3AC1B;
        --color-tertiary: #F2D022;
        --color-quaternary: #2E3444;
        --color-blue: #0061ff;
        --color-border: #bdc4c9;
    }
`