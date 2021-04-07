import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	makeStyles,
	Grid,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#00539CFF6",
		transform: "translateZ(0)",
		height: "60px",
	},
	toolBar: {
		minHeight: "32px",
	},


	gridItem: {
		display: "flex",
		alignItems: "baseline",
	},
	itemEnd: {
		margin: theme.spacing(1),
	},

	links: {
		color: "#fff",
		textDecoration: "none",
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar className={classes.toolBar}>
				<Grid container alignItems="center">
					<Grid sm={4} item>
						<Typography variant="h6">Mern Stack Application</Typography>
					</Grid>
					<Grid sm={4} item className={classes.gridItem} alignItems="baseline">
						<IconButton>
							<Link to="/" className={classes.links}>
								<HomeIcon />
							</Link>
						</IconButton>
						<Typography variant="h6" className={classes.itemEnd}>
							<Link to="/" className={classes.links}>
								Users
							</Link>
						</Typography>
					</Grid>

					<Grid item className={classes.gridItem}>
						<Typography variant="h6" component="div">
							<Link to="/sign-up" className={classes.links} style={{color:"red"}}>
								SIGN-UP
							</Link>
						</Typography>
						<Typography
							className={classes.itemEnd}
							variant="h6"
							component="div">
							SIGN-IN
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
