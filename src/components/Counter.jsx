import React, { Component } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestoreIcon from '@mui/icons-material/Restore';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

export class Counter extends Component{

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        }

        );

    }

    countDown() {
        this.setState({
            count: this.state.count - 1
        }

        );

    }


    countReset() {
        this.setState(
            {
                count:0
            }
        )
    }

    render() {
        return (
            <div>
                <Card sx={{ maxWidth: 275 }} id="mycard">
                    <CardContent>
                        <Chip label={this.state.count} sx={{
                            backgroundColor: "brown",
                            color: "white",
                            fontSize: "33px"
                        }}> </Chip>
                    </CardContent>


                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "center"

                    }}>


                        <Fab color="primary" aria-label="up" onClick={()=> this.countUp()}>
                            <AddIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="down" onClick={ () => this.countDown()}>
                            <RemoveIcon />
                        </Fab>
                        <Fab  aria-label="like" onClick={ () => this.countReset()}>
                            <RestoreIcon />
                        </Fab>



                    </CardActions>

                </Card>

            </div>
        );
    }
}