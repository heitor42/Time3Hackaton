import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './styles.css'

import logo from '../../assets/images/logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/"><img className="logo" src={logo} alt="Logo da XP investimentos" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/courses">Nossos Cursos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/investiments" >Investimentos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ajuda
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Opção 1
                </DropdownItem>
                <DropdownItem>
                  Opção 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Contate-nos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link class="btn btn-success" tag={Link} to="/login" >Entrar</Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
