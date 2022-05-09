import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { CharacterAction } from '../action/CharacterAction'

const EditNameCard = () => {
    //Get the whole state from characterReducer
    const person = useSelector(state => state.characters);

    const { handleCharacter } = CharacterAction()

    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s4">
                    <input
                        value={person.name}
                        id="name"
                        type="text"
                        onChange={e => handleCharacter('CHANGE_NAME', e.target.value)}/>

                    <label htmlFor="name" className="active">Name</label>
                </div>
                <div className="input-field col s4">
                    <input
                        value={person.occupation}
                        id="occupation"
                        type="text"
                        onChange={e => handleCharacter('CHANGE_OCCUPATION', e.target.value)}/>
                    <label htmlFor="occupation" className="active">Occupation</label>
                </div>
                <div className="input-field col s4">
                    <input
                        value={person.age}
                        id="age"
                        type="number"
                        onChange={e => handleCharacter('CHANGE_AGE', e.target.value)}/>
                    <label htmlFor="age" className="active">Age</label>
                </div>
            </div>
        </div>
    );
}

export default EditNameCard;