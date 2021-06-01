import React from "react";
import { CustomSignIn } from "../CustomSignIn";

export const InternalApp = ({ authState, updateUsername, onStateChange }) => {
	return (
		<div className="internal-app">
			<CustomSignIn authState={authState}
				updateUsername={updateUsername}
				onStateChange={onStateChange}/>
			<p> gilgil Internal Application behind Login</p>
		</div>
	);
};
