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
      descr: "This frontend React SPA is a product from my time in the Multiverse bootcamp. " + 
        "We were tasked with enabling features ranging from displaying the original 151 pokemon by reading the response object of a get request," +
        "to displaying nested information of each pokemone object returned."
    },
    {
      name: "currency_converter",
      url: "https://github.com/eholloway1/currency_converter",
      img: null,
      descr: "This full-stack application starts up a simple back end with an endpoint to return cart objects on get requests. " +
        "The frontend retrieves carts, based off the url path, and displays the cart. " +
        "users can then select a currency from a dropdown and see their cart price convert to their selected currency type."
    },
    {
      name: "Noodle Search",
      url: "https://github.com/Multiverse-frontend-project/NoodleSearch",
      img: null,
      descr: "This frontend React SPA allows users to enter in a search query. It then calls a google api with the users search query and appends 'noodle' to it. " +
        "It then returns the noodlefied images, organized on Material UI cards, of the search query."
    },
    {
      name: "Scooter App",
      url: "https://github.com/MV-Open-SWE-9/scooter-project-eholloway1",
      img: null,
      descr: "This frontend application allows users to create accounts, login and logout, and rent Scooters. " +
        "Scooters can be stationed, rented, lose charge, recharge, and be labeled as broken. Users are not able to create duplicate accounts, " +
        "logout if they are not logged in, station Scooters in stations that do not exist or are already stationed."
    },
    {
      name: "Mojo the Summoning (Card game project)",
      url: "https://github.com/MV-Open-SWE-9/mojo-the-summoning-eholloway1",
      img: null,
      descr: "A frontend application that allows each user to create a deck of cards. " +
        "Each deck may contain many cards, but a card may only belong to one deck. " +
        "Each card has an attack, and attacks can belong to many cards."
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
