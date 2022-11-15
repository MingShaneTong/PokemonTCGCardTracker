import React, { useContext } from 'react';

import SignUpScreen from "./AccountScreen/SignUpScreen";
import LogOutScreen from "./AccountScreen/LogOutScreen";

import { AuthContext } from "../../context/auth";

export default function AccountScreen() {
	const { user } = useContext(AuthContext);

	if (user) {
		return <LogOutScreen />;
	} else {
		return <SignUpScreen />
	}
}
