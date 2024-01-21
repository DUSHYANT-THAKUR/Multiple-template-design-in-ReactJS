import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from "../Image/homes4.avif";
import email from "../Image/email.png";
import phone from "../Image/phone.png";
import location from "../Image/location.png";
import card1 from "../Image/card1.jpg";
import man_image from "../Image/man-image-2.png";
import ReactCardSlider from 'react-card-slider-component';

import "./Home.css";

function About() {
  let slides = [
    {
      image: `${process.env.PUBLIC}/Image/card1.jpg`,
      title: "my card 1",
      description: "If you want to apply validation on submit and display the red text box (indicating an error) only after the user attempts to submit the form, you can modify your code to conditionally apply"
    },
    {
      image: `${process.env.PUBLIC}/Image/man-image-2.png`,
      title: "my card 2",
      description: "If you want to apply validation on submit and display the red text box (indicating an error) only after the user attempts to submit the form, you can modify your code to conditionally apply"
    }
  ];
  
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row bg-dark p-3" id="section-4">
        <div
          className="col-sm-12 col-md-6 col-lg-6 text-white"
          style={{ paddingLeft: "3%" }}
        >
          +91-9876542312
        </div>
        <div
          className="col-sm-12 col-md-6  col-lg-6 text-white"
          style={{ paddingLeft: "30%" }}
        >
          Email :- prashunthakur0804@gmail.com
        </div>
      </div>
      <div className="Nav-section-img">
        <div className="image-section">
          <img src={img} alt="image" />
        </div>

        <div className="row nav-bar ">
          <Navbar expand="lg">
            <Container>
              <div className="col-md-4">
                <Navbar.Brand href="#section-4">Logo</Navbar.Brand>
              </div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-link text-center ">
                  <div className="col-md-3 m-1 m-md-0">
                    <Navbar.Brand href="#">Home</Navbar.Brand>
                  </div>
                  <div className="col-md-3 m-1 m-md-0">
                    <Navbar.Brand href="#section-1">About</Navbar.Brand>
                  </div>
                  <div className="col-md-3 m-1 m-md-0">
                    <Navbar.Brand href="#section-3">Contact</Navbar.Brand>
                  </div>
                  <div className="col-md-3 m-1 m-md-0">
                    <Navbar.Brand href="#section-2">Services</Navbar.Brand>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="text-on-image">
          <div className="heading-on-image" style={{ color: "blue" }}>
            <h2>Repair and Maintenance Services</h2>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
              voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
              tempora iusto, ad possimus soluta hic praesentium mollitia
              consequatur beatae, aspernatur culpa.
            </p>
          </div>
        </div>
      </div>
      <div className="box d-flex justify-content-center gap-2 m-2">
        <div className="card b-card text-center justify-content-center h4">
          Repair
        </div>
        <div
          className="card b-card text-center justify-content-center h4"
          style={{ backgroundColor: "orange" }}
        >
          Improve
        </div>
        <div className="card b-card text-center justify-content-center h4">
          Maintain
        </div>
      </div>
      <div className="card1 d-flex gap-5 pt-5" id="section-1">
        <div className="card card-cotent justify-content-center p-4 h6">
          <h2 className="text-start p-1">About Us</h2>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomisedThere are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised
          <div className="my-btn  pt-3">
            <Button variant="primary">READ MORE</Button>
          </div>
        </div>
        <div className="card-img p-0">
          <img src={card1} alt="image" />
        </div>
      </div>
      <div className="man-content-section d-flex mt-5 gap-5" >
        <div className="man-img-section" style={{ backgroundColor: "#b3b3ff" }}>
          <img src={man_image} alt="image" />
        </div>
        <div className="content-section h6 p-5" style={{ alignSelf: "center",backgroundColor: "#b3b3ff" }}>
          <h3>WE PROVIDE PROFESSIONAL HOME SERVICES.</h3>
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All randomised
          words which don't look even slightly<br></br>
          <Button variant="warning" className="mt-4">
            READ MORE
          </Button>
        </div>
      </div>
      <div className="work-section" id="section-2">
        <h2>Our Services</h2>
        <div className="work-card d-flex gap-4 mt-5 p-3">
          <div className="work-card1 card p-5">
            <h1 className="mb-4">Maintenance</h1>
            when looking at its layout. The point of using Lorem Ipsum isthat it
            has a more-or-less normal
          </div>
          <div className="work-card2 card p-5">
            <h1 className="mb-4">Electrical</h1>
            when looking at its layout. The point of using Lorem Ipsum isthat it
            has a more-or-less normal
          </div>
          <div className="work-card3 card p-5">
            <h1 className="mb-4">Plumbing</h1>
            when looking at its layout. The point of using Lorem Ipsum isthat it
            has a more-or-less normal
          </div>
        </div>
        <div className="work-button text-center mt-3">
          <Button variant="warning">READ MORE</Button>
        </div>
      </div>
      <div className="client-section">
        <div className="client-card-section justify-content-center d-flex gap-5 mt-5">
          <div className="client-card1  card p-5">
            If you want to apply validation on submit and display the red text
            box (indicating an error) only after the user attempts to submit the
            form, you can modify your code to conditionally apply
          </div>
          <div className="client-card2 card p-5">
            If you want to apply validation on submit and display the red text
            box (indicating an error) only after the user attempts to submit the
            form, you can modify your code to conditionally apply
          </div>
         
        </div>
        <div className="row client-button mt-5">
          <div className="col-md-6 text-end">
            <Button variant="primary">pre</Button>
          </div>
          <div className="col-md-6">
            <Button variant="primary">for</Button>
          </div>
        </div>
      </div>
      <div className="form-map-section mt-5 p-5" id="section-3">
        <h2>Contact Us</h2>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <Form>
              <Form.Group>
                <div className="row card p-5 gap-3">
                  <div className="col-sm-12 form-field">
                    <Form.Control type="text" placeholder="name" />
                  </div>
                  <div className="col-sm-12 form-field">
                    <Form.Control type="text" placeholder="email" />
                  </div>
                  <div className="col-sm-12 form-field">
                    <Form.Control type="text" placeholder="phone" />
                  </div>
                  <div className="col-sm-12 form-field">
                    <Form.Control as="textarea" placeholder="message" />
                  </div>
                  <Button variant="primary" className="mt-3">
                    send
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.990538240945!2d77.37635177541426!3d28.630045675666196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff8864e0cf1%3A0xa20290bf75099ebd!2sBSI%20Business%20Park%20H15!5e0!3m2!1sen!2sin!4v1702644213740!5m2!1sen!2sin"
              width="100%"
              height="390"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: "1px solid black" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-part mt-5 p-0 pb-5">
        <div className="row pt-5">
          <div className="col-md-12">
            <h1 className="text-center text-white">Get in Touch</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 call-loc-phone text-center">
            <img src={location} alt="image" />

            <div className="divider"></div>
            <img src={phone} alt="image" />

            <div className="divider"></div>
            <img src={email} alt="image" />
          </div>
        </div>
        <div className="row text-white text-center mt-2">
          <div className="col-4">Noida</div>
          <div className="col-4">+91-6396222616</div>
          <div className="col-4">prashunthakur0804@gmail.com</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center text-white ">
            <h3>FOLLOW US</h3>
          </div>
        </div>
        <div className="row offset-4 mt-5">
          <div className="col-6 social-link">
            <Nav className="justify-content-center">
              <Nav.Link href="https://www.facebook.com/prashun.thakur.5">
                <FacebookIcon />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/">
                <InstagramIcon />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/">
                <YouTubeIcon />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/PrashunTha59496">
                <TwitterIcon />
              </Nav.Link>
            </Nav>
          </div>
        </div>
        <div className="footer-text text-center text-white mt-5">
          <h6>© 2023 All Rights Reserved. By React Design</h6>
        </div>
      </div>
    </div>
  );
}

export default About;
