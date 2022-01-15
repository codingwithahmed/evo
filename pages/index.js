import styled from "styled-components";
import {Row,Col, ButtonPurple, ButtonWhite} from '../components/common'


const data = [1,2,3,4,5,6,1,2]


const CustomInputCheckBox = () => {
  
}


const ItemFeild = ({itemName}) => {
  return (
    <Row style={{justifyContent:"space-between",margin:"2.5% 0"}}>
      <div>
      <input type={'checkbox'} style={{border:"none",outline:"none"}}/> 
      </div>
      <h1>{itemName}</h1>
    </Row>
  )
}

const ContainerSide = styled.div`
flex:1.2;
background-color:#171650;
width:100%;
height:100vh;
`

const Container = styled.div`
flex:4;
padding:2.5% 5%;
background-color:white;
`

const Heading  = styled.h1`
font-size:18px;
color:white
`

const Index = () => (
    <Row style={{justifyContent:"space-between"}}>
     
      <ContainerSide>
      <Col style={{
        height:"100%"
      }}>
        
        <div style={{padding:"2.5% 5%",flex:1,boxShadow:"0 2px 5px 1px #171650",zIndex:2}}>
          <Col  style={{
        height:"100%",
        justifyContent:"center"
      }}>
        <Row style={{justifyContent:"space-between"}}>
        <Heading>Add a Feild</Heading>
        <ButtonWhite style={{paddingRight:"15%",paddingLeft:"15%"}}>+</ButtonWhite>

        </Row>
          </Col>
        </div>

        <div style={{padding:"2.5% 5%",flex:6,backgroundColor:"#f4f4f4"}}>
          <Heading style={{color:"black",margin:"5% 0"}}>
            Baisc Feild
          </Heading>
        {data.map(e => <ItemFeild itemName={"Cart Content"} />)}
        <Heading style={{color:"black",margin:"5% 0"}}>
            Custom Feild
          </Heading>
        {data.map(e => <ItemFeild itemName={"Cart Content"} />)}
        </div>
        
         </Col>
      </ContainerSide>
     
      <Container>

      </Container>
      
      <ContainerSide>

      </ContainerSide>
    </Row>
);



export default Index;
