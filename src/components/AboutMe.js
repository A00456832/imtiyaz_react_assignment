import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

function AboutMe() {
    return (
        <div>
            
            <br></br>
            <Row>
                <Col sm={6}>
                <Image src="assets/ImtiyazPhoto.jpg" fluid roundedCircle />
                </Col>
            </Row>
            <Row className='Font-Style'>
            <br></br><br></br>
                <Col sm={10} style={{textAlign:'left'}}>
                    
                    <h3>Hello there, I am Imtiyaz Shaikh</h3>
                    <br></br>
                    <p>I am an international student at Saint Mary's University - Halifax. I have enrolled for the course 'Master in Computing & Data Analytics' to grow professionally.
                    <br/>
                        I had started working as programmer and I was working as data engineer with the recent employer. Through out the career, I worked on MS SQL Server database, Report and ETL development.
                    </p>
                </Col>
            </Row>
            
        </div>
    );
  }

export default AboutMe;