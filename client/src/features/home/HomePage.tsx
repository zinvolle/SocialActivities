import { Spa } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        borderRadius: 0,
        backgroundImage: 'linear-gradient(135deg, #06070E 0%, #29524A 55%, #94A187 110%)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', color: 'white', gap: 3 }}>
        <Spa sx={{ height: 110, width: 110, color: '#E9BCB7' }} />
        <Typography variant="h1" sx={{ letterSpacing: 2 }}>
          Sprouts
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ color: '#C5AFA0', fontWeight: 400 }}>
          Where new connections grow
      </Typography>
      <Button
      component={Link}
      to='/activities'
      size="large"
      variant="contained"
      color="info"
      sx={{height:64, borderRadius:4, px: 5, fontSize:'1.25rem'}}
      >
        Explore activities
      </Button>
    </Paper>
  )
}
