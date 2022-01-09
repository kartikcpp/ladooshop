import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
function Checkoutproduct({name,price,id,imgg}) {
      const dispatch=useDispatch();
    function removeitem(){
      console.log("remove")
          dispatch({type:'remove',payload:id})
    }

    return (
        <div style={{margin:'20px'}}>
            
            <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgg}
          alt="ladoo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={removeitem} size="small" color="primary">
          Remove from Cart
        </Button>
      </CardActions>
    </Card>

        </div>
    )
}

export default Checkoutproduct
