import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validator'
import useForm from '../../shared/hooks/form-hook'
import Card from "../../shared/components/UIElements/Card"
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
    center: [40.7484405, -73.9878584],
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empireg',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    center: [40.7484405, -73.9878584],
    creator: 'u2'
  }
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;
  const [isLoading, setLoading] = useState(false);

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false)

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);



  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      }, true)
    }
    setLoading(true);
  }, [identifiedPlace, setFormData])

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h3>No Place Found</h3>
        </Card>
      </div>
    )
  }

  if (!isLoading) {
    return (
      <div className="center">
        <Card>
          <p>Loading Data</p>
        </Card>
      </div>
    )
  }


  function updatePlaceSubmitHandler(event) {
    event.preventDefault()
    console.log(formState.inputs)
  }

  return (
    <form className='place-form' onSubmit={updatePlaceSubmitHandler}>
      <Input
        id="title"
        element="input"
        label="Title"
        type="text"
        errorText="Please Enter Valid Label"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}   //initialValid && initialValue prop names to avoid confusion
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please Enter Valid description atleast 5 characters"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}> Update PLACE </Button>

    </form>
  )

}

export default UpdatePlace
