import { NavBar } from "../navBar";
import "./portfolio.css"
import { Divider, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

interface Project {
  name: string,
  url: string,
  img: string | null,
  descr: string
}

export function Portfolio() {

  const portfolioProjects = [
    {
      name: "PokeverseUI",
      url: "https://github.com/eholloway1/pokeverseUI",
      img: null,
      descr: "This frontend React application is a product from my time in the Multiverse bootcamp. " + 
        "We were tasked with enabling features ranging from displaying the original 151 pokemon by reading the response object of a get request," +
        "to displaying nested information of each pokemone object returned."
    },
    {
      name: "currency_converter",
      url: "https://github.com/eholloway1/currency_converter",
      img: null,
      descr: "This full-stack (BFF) app starts up a simple back end with an endpoint to return cart objects on get requests. " +
        "The frontend retrieves carts, based off the url path, and displays the cart. " +
        "users can then select a currency from a dropdown and see their cart price convert to their selected currency type."
    }
  ];

  return (
    <div>
      <NavBar />
      <div className="portfolioBody">
        {portfolioProjects.map(obj => (
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={obj.img == null ? "https://i.imgur.com/YpsNkal.jpeg" : obj.img}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {obj.name}
            </Typography>
            <Divider />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {obj.descr}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={obj.url}>Project repo</Button>
          </CardActions>
        </Card>
        ))}
      </div>
    </div>
  );
}
