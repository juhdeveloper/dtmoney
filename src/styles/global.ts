import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {
       /* // --background: #f0f2f5; */
        --background: #1c1c1c;
        --text-body:#969CB2 ;
        --text-title: #363f5f;
        --red: #e52e4d;
        /* --blue: #5429CC; */
        --blue: #1c1c1c;
        --blue-light: #6933ff;  //COR DO BTN
         --shape:#FFFFFF;

        --green:#33CC95;
    }


 *{
     padding:0;
     margin: 0;
     box-sizing:border-box;
    }

//font-size: 16px; (Desktop)
html{
    @media (max-width: 1080px){
        font-size: 93.75%  //15px
    }
    @media (max-width: 720px){
        font-size: 87.75%   //14px
    }

}

   //REM = 1rem = font-size 
body{

    background: var(--background);
    -webkit-font-smoothing: antialiased;
}   

h1, h2, h3, h4, h5, h6, strong{
 font-weight: 600;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}


button{

    cursor:pointer;
}

[disabled] {
    opacity: 0.6;
    cursor:not-allowed;
}
.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

}
.react-modal-content{
width: 100%;
max-width: 576px;
padding: 3rem;
position: relative;
background: var(--background);
border-radius: 0.25rem;

}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border:0;
    background: transparent;

    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.8)
    }
}
`;

