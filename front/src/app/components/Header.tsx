'use client'

import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useStore } from '../../store/app-store';


export const Header = () => {
    const store = useStore()

    const hanldeSet = () => {
        store.setIsSet(true)
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TelegramAdd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={hanldeSet}>Настройки</Nav.Link>
            <Nav.Link href="#link">Сообщение</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


