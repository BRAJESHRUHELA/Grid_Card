import { AppBar, Grid, Toolbar } from "@mui/material";
import "./App.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    image: "https://source.unspash.com/random",
    discription:"This card is designed for travel and tours.If you are interested, you can join any batch on any weekend as we have plans for trips every weekend! If you love the beach, we have an option for Goa, and another choice is none other than mountains, so we have Manali!",
  },
  {
    id: 2,
    image: "https://source.unspash.com/random",
    discription:"This card is designed for travel and tours.If you are interested, you can join any batch on any weekend as we have plans for trips every weekend! If you love the beach, we have an option for Goa, and another choice is none other than mountains, so we have Manali!",
  },
  {
    id: 3,
    image: "https://source.unspash.com/random",
    discription:"This card is designed for travel and tours.If you are interested, you can join any batch on any weekend as we have plans for trips every weekend! If you love the beach, we have an option for Goa, and another choice is none other than mountains, so we have Manali!",
  },
  {
    id: 4,
    image: "https://source.unspash.com/random",
    discription:"This card is designed for travel and tours.If you are interested, you can join any batch on any weekend as we have plans for trips every weekend! If you love the beach, we have an option for Goa, and another choice is none other than mountains, so we have Manali!",
  }
];
function App() {
  return (
    <>
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <PhotoCamera sx={{ mr: 4 }} />
            This is a toolBar
          </Toolbar>
        </AppBar>
      </div>
       <Grid textAlign='center'  container spacing={4} >
        {cardData.map((data) => (
          <Grid item xs={6} >
            <Card 
            key={data.id}
            image={data.image}
            discription={data.discription}
            />
          </Grid>
        ))}
       </Grid>
    </>
  );
}

export default App;
