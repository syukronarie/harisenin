import Cookies from "js-cookie";

const Auth = {
	authenticated: () => {
		return Cookies.get("token");
	},
	logout: (navigate) => {
		Cookies.remove("token");
		navigate("/login");
	},
};

export default Auth;
