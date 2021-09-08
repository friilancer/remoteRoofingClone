import React, {Fragment, useRef, useState} from  'react';
import LocationInput from './input.js';
import LocationIcon from '../../img/location.svg';
import './locationInput.css';

const CurrentLocation = () => {
	const userLocationRef = useRef(null);
	const [userAddress, setUserAddress] = useState({
		name : '',
		place_id:'',
		formatted_address:''
	});

	const handleAddressChange = (name, place_id ='', formatted_address='') => {
		setUserAddress({
			name,
			place_id,
			formatted_address
		})
	}

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log('clicked')
    }

	return (
		<>
			<div className="input-group p-5">
                <img className="input-group-icon" src={LocationIcon} alt="" />
				<LocationInput
				 id="user_currentLocation" 
				 name="user_currentLocation"
				 placeholder="Enter Your Address"
				 currentAddress={userAddress.name}
				 handleAddressChange={handleAddressChange} 
				 assignedRef = {userLocationRef}
				/>
                <button
                 onClick={handleButtonClick}
                 className="btn bg-blue-300 text-white input-group-button"
                >
                    Get Inspection
                </button>
			</div>					
		</>
	)
}

export default CurrentLocation;