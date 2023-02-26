import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestoreIcon from '@mui/icons-material/Restore';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

function HookCounter() {

    const [count, setCount] = useState(0);

    return (


        <div>
            <Card sx={{ maxWidth: 275 }} id="mycard">
                <CardContent>
                    <Chip label={count} sx={{
                        backgroundColor: "brown",
                        color: "white",
                        fontSize: "33px"
                    }}> </Chip>
                </CardContent>


                <CardActions sx={{
                    display: "flex",
                    justifyContent: "center"

                }}>


                    <Fab color="primary" aria-label="up" onClick={()=> setCount(count+1)}>
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="down" onClick={ () => setCount(count -1)}>
                        <RemoveIcon />
                    </Fab>
                    <Fab  aria-label="like" onClick={ () => setCount(0)}>
                        <RestoreIcon />
                    </Fab>



                </CardActions>

            </Card>

        </div>
    );
}

export default HookCounter;
