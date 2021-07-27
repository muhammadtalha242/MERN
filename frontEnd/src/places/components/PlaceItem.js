import React, { useState, useContext } from 'react';

import Card from "../../shared/components/UIElements/Card"
import Button from "../../shared/components/FormElements/Button"
import Modal from "../../shared/components/UIElements/Modal"
import Map from "../../shared/components/UIElements/Map"
import { AuthContext } from '../../shared/context/Auth-context'

import "./PlaceItem.css"

const PlaceItem = (props) => {
    const auth = useContext(AuthContext)
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => setShowConfirmModal(true);

    const cancleDeleteHanlder = () => setShowConfirmModal(false);
    const confirmDeleteHanlder = () => {
        console.log("Deleting....!!")
        setShowConfirmModal(false)
    };


    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancle={closeMapHandler}
                header={props.address}
                contentClass="place_item__modal-content"
                footerClass="place_item__modal-action"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-contanier">
                    <Map center={props.center} zoom={4} />
                </div>
            </Modal>

            <Modal
                show={showConfirmModal}
                onCancle={cancleDeleteHanlder}
                header="Are you sure?"
                contentClass="place_item__modal-content"
                footerClass="place_item__modal-action"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancleDeleteHanlder}>CANCLE</Button>
                        <Button danger onClick={confirmDeleteHanlder}>PROCEED</Button>
                    </React.Fragment>
                }>
                <p>Do you want to delete it?</p>
            </Modal>

            <li className="place-item">
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler} >VIEW ON MAP</Button>
                        {auth.isLoggedIn && <React.Fragment>

                            <Button to={`/places/${props.id}`}>EDIT</Button>
                            <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>

                        </React.Fragment>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )


}

export default PlaceItem;