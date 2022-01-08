import React from 'react'
import img from '../images/image1.jfif'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Product.css'
import { useDispatch } from 'react-redux';
function Product({name,price,id}) {
    const dispatch=useDispatch();
    function addtocart(target){
        console.log(target)
        const addprod={pname:name,price:price}
        dispatch({type:'add',payload:addprod})
    }
    return (
        <div className='cardcontainer'>
             <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
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
        <Button onClick={(target)=>{addtocart(target)}} size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>

  
        </div>
    )
}

export default Product
