  import {Row,Col, ButtonPurple, ButtonWhite} from '../components/common'
  import Landing from './Landing'
  import styled from 'styled-components';
  const Heading  = styled.h1`
  font-size:18px;
  color:white
  `
  
  const Index = () => (
    <div style={{backgroundColor:"white"}}>
    <Row style={{padding:"2.5%",border:"1px solid #f4f4f4",boxShadow:"0 2px 5px 2px black",justifyContent:"space-between"}}>
        <Heading style={{color:"black",cursor:"pointer"}}>Dashboard</Heading>
        <Heading style={{color:"black",cursor:"pointer"}}>Setting</Heading>
        <Heading style={{color:"black",cursor:"pointer"}}>Funnel</Heading>
        <Heading style={{color:"black",cursor:"pointer"}}>Google Sheet</Heading>

      </Row>
      <Landing />
      </div>
  );



  export default Index;
