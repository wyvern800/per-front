import React, { Component } from 'react';
import { DivMap } from './styles';
import imgmap from '../../../assets/map.png';

export default class Map extends Component {
    render() {
        return (
            <>
            <DivMap>
                BUCETA
            <img src={imgmap} />
            </DivMap>
            </>
        );
    }
}
