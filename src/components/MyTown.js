import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";

function MyTown() {
    const [temp, setTemp] = useState('-')
    const [city, setCity] = useState('1259229')
    const [isCelcius, setCelcius] = useState(true)

    const cities = {
        1259229: 'Pune'
    }

    var imgSrc = temp==="-" ? "assets/notavailable.png" : 
                temp<=10 ? "assets/cold.png" :
                    temp<=20 ? "assets/mild.png" :
                        "assets/sunny.png"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=3eb8900663ea377b4baf633e7d885a34&units=Metric`)
          .then(res => res.json())
          .then(
            (result) => {
                if(result.cod===200){
                    setTemp(Math.round(result.main.temp))
                }
                else 
                {
                    setTemp('-')
                }
            },
            (error) => {
              console.log('Falied to fetch Weather Data')
              setTemp('-')
            }
          )
    })

    
    
    return (
        <div className='Font-Style'>
            <br></br>
            <Row>
                <Col sm={6}>
                <Image src="assets/PuneCity.png" fluid roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col sm={6} style={{textAlign:'left'}}>
                    <br />
                    <h1 >I live in Pune, India. It is a cultural capital of Maharashtra state.</h1>
                    <br />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={1}>
                    <Image alt="Weather Unavailable" src={imgSrc} fluid/>
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'left', verticalAlign: 'middle', fontSize: temp==='-'? '2vw' : '3vw', color:'#AF2305'}}>
                    {isCelcius ? temp==='-'? 'Not Available' : temp : temp==='-'? 'Not Available' : (((temp*9)/5) + 32) }
                </Col>
                <Col xs={6} md={1} style={{textAlign: 'left', fontSize: '1.3vw', verticalAlign: 'middle'}}>
                   
                    
                    <Row style={{color: isCelcius?'#AF2305':'', cursor: 'pointer'}} 
                        onClick={() => setCelcius(true)}>
                        <span>&#176;Celcius</span>
                    </Row>
                    <Row style={{color: !isCelcius?'#AF2305':'', cursor: 'pointer'}} 
                    onClick={() => setCelcius(false)}>
                        <span>&#176;Fahrenheit</span>
                    </Row>
                </Col>
               
               
            </Row>
        </div>
    );
  }

export default MyTown;