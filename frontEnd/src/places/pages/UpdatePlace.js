import React from 'react'
import {useParams} from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validator'

import "./PlaceForm.css"


const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      center:[40.7484405,-73.9878584],
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      center:[40.7484405,-73.9878584],
      creator: 'u2'
    }
  ];

const UpdatePlace = (props) => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    
    if(!identifiedPlace){
        return (
            <div className="center">
                <p>No Place Found</p>
            </div>
        )
    }

    return (
        <form className='place-form'>
            <Input
                id="title"
                element="input"
                label="Title"
                type="text"
                errorText="Please Enter Valid Label"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={()=>{}}
                value = {identifiedPlace.title} 
                valid = {true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                errorText="Please Enter Valid description atleast 5 characters"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={()=>{}}
                value = {identifiedPlace.description}
                valid = {true}
            /> 
            <Button type="submit" disabled={true}> Update PLACE </Button>

        </form>
    )

}

export default UpdatePlace
