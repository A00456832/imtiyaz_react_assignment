import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import AboutMe from './components/AboutMe'
import MyTown from './components/MyTown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

function App() {
  const [menuItem, setMenuItem] = useState('AboutMe')

  return (


    <div>
  
<Container>

   <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="AboutMe" style={{color: menuItem==="AboutMe"?'#3465eb':'black' }} active={menuItem==="AboutMe" ? true : false} onClick={() => setMenuItem("AboutMe")}>About me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="MyTown" style={{color: menuItem==="MyTown"?'#3465eb':'black'}} active={menuItem==="MyTown" ? true : false} onClick={() => setMenuItem("MyTown")}>My town</Nav.Link>
          </Nav.Item>
        </Nav>
        {
          menuItem==="AboutMe" ? <AboutMe /> : <MyTown />
        }

  

        </Container>
     
    </div>

          
  );
}

export default App;
