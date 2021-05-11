import React from 'react';

import Card from '../../shared/components/UIElements/Card'

import './PlaceList.css'

const PlaceList = (pros) => {

    if (pros.items.length === 0) {
        return <div className='place-list  center'>
            <Card>
                <h2>No places found. Maybe create new!</h2>
            </Card>

        </div>
    }

}

export default PlaceList;