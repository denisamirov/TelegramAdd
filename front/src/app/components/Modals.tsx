'use client'

import React from 'react'
import { Settings } from './Settings'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useStore } from '../../store/app-store'

export const Modals = () => {

  const store = useStore()
  const handleClose = () => store.setIsSet(false);

  return (
    <>
      <Modal show={store.isSet} onHide={handleClose} animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Settings />
        </Modal.Body>
      </Modal>
    </>
  )
}
