import {
	Button,
	Grid,
	TextField,
} from "@material-ui/core";
import axios from "axios";
import { useForm, Form } from "../components/userForm";

const initialFValues = {
	name: "",
	email: "",
	password:""
};

function UserForm() {
	const { values, setValues, handleInputChange } = useForm(initialFValues);

 const handleFormSubmit = (e) => {
	 e.preventDefault();
	 axios({
			method: "post",
			url: "http://localhost:5000",
			data: values
		})
		.then(res => {
			setValues({ name: "", email: "", password: "" });
		})
		.catch(err => {
			console.log(err);
		})
 }

	return (
		<Form handleSubmit={handleFormSubmit}>
			<Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						label="Full Name"
						name="name"
						value={values.name}
						onChange={handleInputChange}
					/>

					<TextField
						variant="outlined"
						label="Email"
						name="email"
						value={values.email}
						onChange={handleInputChange}
					/>

					<TextField
						variant="outlined"
						label="Password"
						name="password"
						value={values.password}
						onChange={handleInputChange}
					/>
					<br />
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</Grid>
			</Grid>
		</Form>
	);
}

export default UserForm;
