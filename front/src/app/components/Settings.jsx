'use client'

import { Form, Button } from 'react-bootstrap'
import { React } from 'react'
import { useStore } from '../../store/app-store'

export const Settings = () => {

    const store = useStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        store.setSettings({ ...store.settings, [e.target.name]: e.target.value })
    }

    const handleInput = (e) => {
        store.setSettings({ ...store.settings, [e.target.name]: e.target.value })
    }

    const handleClose = () => {
        setTimeout(() => {
            store.setIsSet(false)
        }, 1000)

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Label><h2>Settings</h2></Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter AppId</Form.Label>
                    <Form.Control type="number" placeholder="1234566" onInput={handleInput} name='appid' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ewfcbwu5y834hwoyr89q34r8ur989aweuf">
                    <Form.Label>Enter ApiHash</Form.Label>
                    <Form.Control type="text" rows={40} onInput={handleInput} name='apihash' />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClose}>Сохранить</Button>
            </Form>
        </>
    )
}
