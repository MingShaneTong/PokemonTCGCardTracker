import React from 'react';

import { auth } from "../../api/firebase";

import SignUpScreen from "./AccountScreen/SignUpScreen";
import LogOutScreen from "./AccountScreen/LogOutScreen";

export default function AccountScreen() {
	const user = auth.currentUser;
	if (user) {
		return <LogOutScreen />;
	} else {
		return <SignUpScreen />
	}
}
