import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

const MyCard = ({image,discription}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Card sx={{ width: 500, mx: 10, my: 10 }}>
        <CardMedia
          component="img"
          alt="Image"
          height="300"
          width="300"
          image={image}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {/* Use Collapse component for smoother transition */}
            <Collapse in={expanded}>
              <p>
                {discription}
              </p>
            </Collapse>
          </Typography>
          {/* Use Collapse component for button transition */}
          <Collapse in={!expanded}>
            <p>
              This card is designed for travel and tours. Click "View" to see
              more details.
            </p>
          </Collapse>
          {expanded ? (
            <Button onClick={handleCollapse} variant="outlined" color="primary">
              Close
            </Button>
          ) : (
            <Button onClick={handleExpand} variant="contained" color="primary">
              View
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyCard;
