  import styled from "styled-components";
  import {Row,Col, ButtonPurple, ButtonWhite} from '../components/common'

  const data = [1,2,3,4,5,6,1,2]

  const MainInput = ({title}) => {
    return (
      <Row style={{alignItems:"center",justifyContent:"space-between",width:"100%"}}>
        <Heading style={{flex:1,fontSize:"18px"}} >{title}</Heading>
        <CustomInput  style={{flex:2}}>
        <div>
           <input />  </div>
        </CustomInput>
        <Row style={{flex:1,justifyContent:"center"}} >
          
        <img src="https://i.ibb.co/Jmgscn8/delete.png" style={{
          width:"30px",
          height:"30px",
          cursor:"pointer"
        }} alt=""/>
        
        </Row>
      </Row>
    )
  }


  const CustomInput = styled.div`
  div{
    padding:2.5% 5%;
    border-radius:5px;
    background:white;
    margin-bottom:5%;
  }
  input {
    border:none;
    outline:none;
    background:transparent;
    font-size:1.2rem;
    width:100%;
  }
  `

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
  min-height:100vh
  `

  const Heading  = styled.h1`
  font-size:18px;
  color:white
  `

  const Index = () => (
      <Row style={{justifyContent:"space-between",overflowY:"hidden"}}>
      
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

          <div style={{padding:"2.5% 5%",flex:6,backgroundColor:"#f7f1f1"}}>
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
          <Col style={{backgroundColor:"#171650",minHeight:"75vh",maxHeight:"95vh"}}>
            <Row style={{
              boxShadow:"0 2px 5px 2px rgb(8 7 37)",
        padding:"2.5% 5%",
        flex:1
            }}>
              <Heading>Pago Contraentrena + Eniva Gratis</Heading>
            </Row >
            <Row style={{
              flex:12,
              padding:"2.5% 5%",
              overflow:"hidden scroll",
              maxHeight:"80vh"
            }}>
              <Col style={{
              width:"100%",
              paddingTop:"10%"
              }}>
                {
                  data.map(e => <MainInput title={"Lorem Ipsum"} />)
                }
                <hr style={{width:"100%"}}/>
                <ButtonWhite>
               <h1>Paga Al Recibir</h1> 
                </ButtonWhite>
              </Col>
            </Row>
          </Col>
        </Container>
        
        <ContainerSide>

        </ContainerSide>
      </Row>
  );



  export default Index;
