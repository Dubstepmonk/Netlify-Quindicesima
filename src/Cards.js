import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import background from "./resource/musicbg.jpg";

function Cards() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          //style={{ height: "250px", paddingTop: "2%" }}
          style={{ height: "250px" }}
          alt=""
          height="140"
          image={require("./resource/guzheng.jpg")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gu Zheng
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The zheng or gu zheng, is a Chinese plucked zither. The modern
            guzheng commonly has 21, 25, or 26 strings, is 64 inches long, and
            is tuned in a major pentatonic scale. It has a large, resonant
            soundboard made from Paulownia wood. Other components are often made
            from other woods for structural or decorative reasons
          </Typography>
          <Typography variant="h6">
            <strong>$35</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ mr: 15 }}>
            Add to cart
          </Button>
          <Button size="small">Buy now</Button>
        </CardActions>
      </Card>
      ;
    </div>
  );
}
export default Cards;
