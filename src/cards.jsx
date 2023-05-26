import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CartaCustom = ({personaje}) => {
  return (
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

        </Typography>
        <Typography variant="h4" component="div">
          {personaje.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       
        </Typography>
        
        <Typography variant="body2">

          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button> More</Button>
      </CardActions>
    </Card>
  )
};



export default CartaCustom;