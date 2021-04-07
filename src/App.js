// import {Link} from "re"
import { createMuiTheme,   ThemeProvider} from "@material-ui/core";
import { Switch,Route} from "react-router-dom"
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserForm from "./pages/UserForm"

const theme = createMuiTheme({
  	props: {
		MuiIconButton:{
      disableRipple:true,
    }},
});

function App() {
  return (
		<ThemeProvider theme={theme}>
			<Header />
			<Switch>
				<Route exact path="/">
					<UsersList />
				</Route>
				<Route path="/sign-up">
					<UserForm />
				</Route>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
