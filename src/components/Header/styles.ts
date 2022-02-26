import styled from 'styled-components'

export const Container = styled.header`
  
    background: var(--blue);
    width: 100%;
    height: 200px;

    
`;

export const Content = styled.div`
display: flex;
max-width:1120px;
margin: 0 auto;

padding: 0 1rem 12rem;
align-items: center;
justify-content: space-between;



`;


export const Button = styled.button`
    font-size:1rem;
    color: #fff;
    background: #696B6E;
    border: 0;
    padding: 0 1rem;
    border-radius: 0%.25rem;
    height: 3rem;

transition: filter 0.2s;

    &:hover{
        filter:brightness(0.9);
    }
`;
