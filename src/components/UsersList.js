import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios from 'axios';
import { useState,useEffect } from 'react';



function UsersList() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
		async function getUsers(){
         try {
              const request = await axios.get("http://localhost:5000");
          const respones = request.data.data;
          setUsers(respones)
         } catch (error) {
             console.log(error);
         }
            };

            getUsers()
		}, []);
    return (
			<Paper>
				<Typography variant="h6">All User</Typography>

				{users.map(item => {
                    return (
                        <Grid container key={item._id}>
                            <Grid md={3} item>
                                <IconButton>
                                    <AccountCircleIcon />
                                </IconButton>

                                <Typography variant="inherit">{item.name}</Typography>
                            </Grid>
                            <Grid sm item></Grid>
                            <Grid md={3} item>
                                <IconButton>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    );
                })}
			</Paper>
		);
}

export default UsersList
