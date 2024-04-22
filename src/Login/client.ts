import axios from "axios";

export const USERS_API = process.env.REACT_APP_API_URL;

export interface User {
	_id: string;
	username: string;
	password: string;
	role: string;
	firstName: string;
	lastName: string;
}

export const signup = async (user: any) => {
	const response = await axios.post(`${USERS_API}/signup`, user);
	return response.data;
};

export const signin = async (credentials: User) => {
	const response = await axios.post(`${USERS_API}/signin`, credentials);
	return response.data;
};

export const signout = async () => {
	const response = await axios.post(`${USERS_API}/signout`);
	return response.data;
};

export const profile = async () => {
	const response = await axios.post(`${USERS_API}/profile`);
	return response.data;
};