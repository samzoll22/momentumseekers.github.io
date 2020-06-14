import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Donate = (props) => (
    
    <Container>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h2 style={{fontFamily: 'Permanent Marker, cursive', textAlign: "center", color: "#fff"}}>Donate 💸</h2>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Black Lives Matter</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Black Lives Matter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. BLM is a global organization whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes.</p>
                <Button href="https://secure.actblue.com/donate/ms_blm_homepage_2019" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>NAACP</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The vision of the National Association for the Advancement of Colored People is to ensure a society in which all individuals have equal rights without discrimination based on race.</p>
                <Button href="https://secure.actblue.com/donate/naacp-1" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Black Futures Lab</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Black Futures Lab’s mission is to engage Black voters year-round, use their political strength to stop corporate influences from creeping into progressive policies, and plan to combine technology and traditional organizing methods to reach Black people anywhere and everywhere.</p>
                <Button href="https://cpasf.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=45" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The Okra Project</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Help The Okra Project support Black Trans people experiencing food insecurity by bringing healthy, home cooked meals to Black Trans people wherever.</p>
                <Button href="https://www.theokraproject.com/" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Protect Black Votes</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The coronavirus pandemic has devastated voter registration numbers nationwide, and we know that Black voters are some of the most at risk.</p>
                <Button href="https://secure.actblue.com/donate/blackvoterregistration?akid=42979.9230500.GUBXy1&rd=1&refcode=dm_fullbase_link1_nondonors&refcode2=42979_9230500_GUBXy1&t=1" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'} } variant="outline-warning" >Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>End Police Violence</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Power the movement to end police violence against black people!</p>
                <Button href="https://secure.actblue.com/contribute/page/support-us/?akid=42983.9230500.GMgxRM&amount=20&rd=1&refcode=c3c4emailfooter&refcode2=42983_9230500_GMgxRM&t=2" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-warning">Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The Equal Justice Initiative</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>Donate to to end mass incarceration and excessive punishment in the United States, challenge racial and economic injustice, and protect the basic human rights!</p>
                <Button href="https://support.eji.org/give/153413/#!/donation/checkout" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-warning">Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px"}}>
            <Col>
                <h5 style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The National Bail Fund</h5>
                <p style={{fontFamily: 'Coustard, serif', color: "#fff"}}>The National Bail Fund Network is made up of over sixty community bail and bond funds across the country. Donate to your local or national fund.</p>
                <Button href="https://www.communityjusticeexchange.org/nbfn-directory" block size="lg" style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-warning">Donate Now</Button>
            </Col>
        </Row>
        <Row style={{marginTop: "30px", marginBottom: "40px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
            <Col>
                <Button value="takeAction" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Take Action ✊🏿</Button>
            </Col>
        </Row>
    </Container>
)

export default Donate;