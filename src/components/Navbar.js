import WineLogo from '../Pictures/FoodWine.jpeg'
import { NavLink } from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';

export default function NavigationBar ({ recipes }) {
  //console.log(recipes)
  return (
      <header>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <div className='container d-flex flex-row justify-content-space'>
                  <Navbar.Brand href="#">
                    <img
                            alt=""
                            src= {WineLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                          />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <div className="container d-flex flex-row justify-content-space" >
                      <div>
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href='/' className="">About</Nav.Link>
                              <NavDropdown title="Recipe" id="navbarScrollingDropdownRecipe">
                                <NavDropdown.Item href="#action3">Cauliflower Rice Burrito</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Zesty Asparagus</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Lemon Drizzle Cake</NavDropdown.Item>
                                <NavDropdown.Divider />
                              </NavDropdown>
                              <NavDropdown title="Wine" id="navbarScrollingDropdownWine">
                                <NavDropdown.Item href="#action6">Red Wine</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">White Wine</NavDropdown.Item>
                                <NavDropdown.Item href="#action8">Rose Wine</NavDropdown.Item>
                                <NavDropdown.Divider />
                              </NavDropdown>
                          </Nav>
                      </div>
                      <div className='form-align'>
                        <Form className="container d-flex flex-row justify-content-space">
                          <div>
                            <FormControl type="search" placeholder="Type here" className="me-2" aria-label="Search" />
                          </div>
                          <div>
                            <Button variant="outline-dark">Search</Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Navbar.Collapse>
                </div>
              </Container>
            </Navbar>
      </header>
  )
}