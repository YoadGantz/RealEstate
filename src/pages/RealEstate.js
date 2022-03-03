import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    CardActionArea,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Slider
} from '@mui/material';

import imgProp1 from '../Images/prop1.jpg'
import imgProp2 from '../Images/prop2.jpg'
import imgProp3 from '../Images/prop3.jpg'
import imgProp4 from '../Images/prop4.jpg'
import imgProp5 from '../Images/prop5.jpg'
import json from '../transactions/transactions.json'

const RealEstate = () => {
    const imgs = [imgProp1, imgProp2, imgProp3, imgProp4, imgProp5]

    const [properties, setProperties] = useState(json.properties)
    const [isAsc, setIsAsc] = useState(true)
    const [minNumOfRoom, setMinNumOfRoom] = useState(2)
    const [filterBy, setFilterBy] = useState('')

    const handleFilterBy = (event) => {
        setFilterBy(event.target.value)
    }
    const marks = [
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 3.5,
            label: '3.5',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 4.5,
            label: '4.5',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 5.5,
            label: '5.5',
        },
        {
            value: 6,
            label: '6',
        },
    ];

    const valuetext = (value) => {
        return `${value}`;
    }


    const handleSort = () => {
        setIsAsc(!isAsc)
    }

    const getSortedProperties = () => {

        const sortedProperties = [...properties]
        sortedProperties.sort((property1, property2) => {
            return isAsc ? property1.price - property2.price : property2.price - property1.price
        })
        return sortedProperties
    }

    return (
        <div className='flex column main-container' >
            <div className='inputs'>
                <FormControl >
                    <InputLabel htmlFor="component-outlined">Address</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={filterBy}
                        onChange={handleFilterBy}
                        label="address"
                    />
                </FormControl>
                <FormControl sx={{ m: 2, width: 300 }}>
                    <Slider
                        onChange={(event) => setMinNumOfRoom(event.target.value)}
                        aria-label="Custom marks"
                        defaultValue={2}
                        getAriaValueText={valuetext}
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                        min={2}
                        max={6}
                    />
                    <InputLabel id="demo-multiple-checkbox-label">Rooms</InputLabel>
                </FormControl>

                <Button sx={{ height: '55px' }} variant="contained" onClick={handleSort}>Price <span className='arrow'>{isAsc ? '\u21D1' : '\u21D3'}</span></Button>
            </div>
            <div className='flex'>
                {getSortedProperties().filter(property => {
                    return property.address.includes(filterBy) && property.num_rooms >= minNumOfRoom
                })
                    .map(({ price, address, sqm, num_floors, num_rooms, floor, elevator, parking, id }, idx) => {
                        return < Card sx={{ width: '200px' }} key={id} className="card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={imgs[idx % imgs.length]}
                                    alt="real-estate"
                                />
                                <CardContent className='flex column space-between'>
                                    <div>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {address}
                                        </Typography>
                                        <Typography gutterBottom component="div">
                                            {String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body2" color="text.secondary">
                                            {num_rooms} rooms, {floor} out of {num_floors} floor(s),  {(elevator === 1) ? 'with elevator' : 'without elevator'}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {parking} parking, {sqm} sqm
                                        </Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })}
            </div>
        </div >
    );
}


export default RealEstate