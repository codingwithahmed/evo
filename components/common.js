import styled from 'styled-components'

export const Row = styled.div`
display : flex;
flex-direction:row;
align-items:center;
::-webkit-scrollbar {
    display: none;
  }
  ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export const Col = styled.div`
display : flex;
flex-direction:column;    
`

export const ButtonWhite = styled.button`
padding:2.5% 5% ;
background-color:white;
color : #171650;
outline:none;
border : none;
border-radius:5px;
cursor:pointer;
`

export const ButtonPurple = styled.button`
padding:2.5% 5% ;
background-color:#171650;
color : white;
outline:none;
border : none;
border-radius:5px;
cursor:pointer;

`