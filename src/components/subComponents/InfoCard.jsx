import { Card, Box, CardContent, Typography } from "@mui/material";

export default function InfoCard({ card }) {
  return (
    // The main Card component that will be displayed
    <>
      <Card elevation={6} sx={{ mx: card.mx, my: card.my, borderRadius: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }} pl={1}>
          
          {/* Icon container with background color and padding */}
          <Box
            p={1}
            m={2}
            sx={{
              display: "flex",
              bgcolor: "primary.main",
              borderRadius: 2,
              alignItems: "center",
            }}
          >
            {card.icon} {/* The icon passed in the card prop */}
          </Box>

          {/* Card content container */}
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            {/* Title of the card */}
            <Typography variant="h6" color="text.secondary" component="div">
              {card.title}
            </Typography>
            {/* Subtitle of the card */}
            <Typography
              variant="h5"
              fontWeight={"bolder"}
              color="text.secondary"
              component="div"
            >
              {card.subTitle}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
