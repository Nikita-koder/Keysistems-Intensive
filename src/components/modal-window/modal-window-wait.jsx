/*eslist-disable*/
import React, { Component } from "react";
import { Modal, Button } from "bootstrap";


export default class ModalWindow extends Modal{
    constructor(props){
        super(props);
        this.state={
            show: false,
            setShow: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose (){
        this.setState(()=>{
            return{
                setShow: false
            }
        });
    }
    handleShow (){
        this.setState(()=>{
            return{
                setShow: true
            }
        });
    }

    render(){
        return(
            <>
                <Modal show={this.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}