import {
	Button,
	Grid,
	TextField,
} from "@material-ui/core";
import { useForm, Form } from "../components/userForm";

const initialFValues = {
	
	name: "",
	email: "",
	password:""
};

function UserForm() {
	const { values, setValues, handleInputChange } = useForm(initialFValues);

 const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await fetch("http://localhost:5000", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(values),
		});

		const result = await data.json();
		setValues({ name: "",email:"",password:""});
		return result;
 };


	return (
		<Form handleSubmit={handleSubmit}>
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
