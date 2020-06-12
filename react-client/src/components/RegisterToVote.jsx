import React from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';

const RegisterToVote = (props) => (
    
    <Container>
        <Row>
            <Col>
                <Table responsive style={{color: "#fff", marginTop: "20px", fontFamily: 'Coustard, serif'}}>
                    <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>State</th>
                            <th>Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >AK</td>
                            <td><Button variant="outline-warning" href="https://voterregistration.alaska.gov">Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >AL</td>
                            <td><Button variant="outline-warning" href="https://www.alabamavotes.gov/olvr/default.aspx">Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >AZ</td>
                            <td><Button variant="outline-warning" href="https://servicearizona.com/VoterRegistration/selectLanguage" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >CA</td>
                            <td><Button variant="outline-warning" href="http://registertovote.ca.gov" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >CO</td>
                            <td><Button variant="outline-warning" href="https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >CT</td>
                            <td><Button variant="outline-warning" href="https://voterregistration.ct.gov/OLVR/" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >DC</td>
                            <td><Button variant="outline-warning" href="https://www.vote4dc.com/ApplyInstructions/Register" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >DE</td>
                            <td><Button variant="outline-warning" href="https://ivote.de.gov/voterlogin.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >FL</td>
                            <td><Button variant="outline-warning" href="https://registertovoteflorida.gov/en/Registration/Index" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >GA</td>
                            <td><Button variant="outline-warning" href="https://registertovote.sos.ga.gov/GAOLVR/#no-back-button" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >HI</td>
                            <td><Button variant="outline-warning" href="https://olvr.hawaii.gov/register.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >IA</td>
                            <td><Button variant="outline-warning" href="https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >ID</td>
                            <td><Button variant="outline-warning" href="https://apps.idahovotes.gov/OnlineVoterRegistration" >Register</Button></td>
                            <td>⛔️ Inactive</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >IL</td>
                            <td><Button variant="outline-warning" href="https://ova.elections.il.gov" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >IN</td>
                            <td><Button variant="outline-warning" href="https://indianavoters.in.gov/" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >KS</td>
                            <td><Button variant="outline-warning" href="https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >KY</td>
                            <td><Button variant="outline-warning" href="https://vrsws.sos.ky.gov/ovrweb/" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >LA</td>
                            <td><Button variant="outline-warning" href="http://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >MA</td>
                            <td><Button variant="outline-warning" href="https://www.sec.state.ma.us/OVR/Pages/MinRequirements.aspx?RMVId=True" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >MD</td>
                            <td><Button variant="outline-warning" href="https://voterservices.elections.maryland.gov/OnlineVoterRegistration/VoterType" >Register</Button></td>
                            <td>🟡 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >MI</td>
                            <td><Button variant="outline-warning" href="https://mvic.sos.state.mi.us/RegisterVoter" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >MN</td>
                            <td><Button variant="outline-warning" href="https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationStep1.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >MO</td>
                            <td><Button variant="outline-warning" href="http://www.sos.mo.gov/elections/goVoteMissouri/register.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >NC</td>
                            <td><Button variant="outline-warning" href="https://www.ncdot.gov/dmv/offices-services/online/Pages/voter-registration-application.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >NE</td>
                            <td><Button variant="outline-warning" href="https://www.nebraska.gov/apps-sos-voter-registration/eligibility/citizen" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >NM</td>
                            <td><Button variant="outline-warning" href="https://portal.sos.state.nm.us/OVR/(S(od4445h5uj2f5tyucvvhszdf))/WebPages/InstructionsStep1.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >NV</td>
                            <td><Button variant="outline-warning" href="http://www.registertovotenv.gov" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >NY</td>
                            <td><Button variant="outline-warning" href="http://dmv.ny.gov/org/more-info/electronic-voter-registration-application" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >OH</td>
                            <td><Button variant="outline-warning" href="https://olvr.sos.state.oh.us/ovru/Modify.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >OR</td>
                            <td><Button variant="outline-warning" href="https://secure.sos.state.or.us/orestar/vr/register.do?lang=eng&source=RTV" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >PA</td>
                            <td><Button variant="outline-warning" href="https://www.pavoterservices.state.pa.us/Pages/VoterRegistrationApplication.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >RI</td>
                            <td><Button variant="outline-warning" href="https://vote.sos.ri.gov/ovr/register" >Register</Button></td>
                            <td>⛔️ Inactive</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >SC</td>
                            <td><Button variant="outline-warning" href="https://info.scvotes.sc.gov/eng/ovr/start.aspx" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >TN</td>
                            <td><Button variant="outline-warning" href="https://ovr.govote.tn.gov/" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >UT</td>
                            <td><Button variant="outline-warning" href="https://secure.utah.gov/voterreg/login.html?selection=REGISTER" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >VA</td>
                            <td><Button variant="outline-warning" href="https://vote.elections.virginia.gov/VoterInformation" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >VT</td>
                            <td><Button variant="outline-warning" href="https://olvr.sec.state.vt.us/Registration/" >Register</Button></td>
                            <td>⛔️ Inactive</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >WA</td>
                            <td><Button variant="outline-warning" href="http://www.sos.wa.gov/elections/myvote/" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >WI</td>
                            <td><Button variant="outline-warning" href="https://myvote.wi.gov/en-us/RegisterToVote" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                        <tr style={{textAlign:"center"}}>
                            <td style={{fontSize:"1.4rem"}} >WV</td>
                            <td><Button variant="outline-warning" href="https://ovr.sos.wv.gov/Register#Qualifications" >Register</Button></td>
                            <td>🟢 Active</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row style={{marginBottom: "40px"}}>
            <Col>
                <Button value="homePage" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="outline-light" >Home 🏡</Button>
            </Col>
            <Col>
                <Button value="takeAction" onClick={props.handleStateChange} block style={{height: "5vh", fontFamily: 'Coustard, serif'}} variant="warning" >Take Action ✊🏿</Button>
            </Col>
        </Row>
    </Container>
)

export default RegisterToVote;