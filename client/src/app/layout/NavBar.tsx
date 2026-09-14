import { Spa } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, CircularProgress } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";


export default function NavBar() {
  const { uiStore } = useStore()
  const { currentUser } = useAccount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundImage: 'linear-gradient(135deg, #06070E 0%, #29524A 55%, #94A187 110%)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Spa fontSize='large' sx={{ color: '#E9BCB7' }} />
                <Typography variant="h4" fontWeight='bold' sx={{position: 'relative', letterSpacing: 1}}>Sprouts</Typography>
                <Observer>
                  {() => uiStore.isLoading ? (
                    <CircularProgress
                    size={20}
                    thickness={7}
                      color="secondary"
                      sx={{
                        color:'white',
                        position: 'absolute',
                        top: '30%',
                        left: '105%'
                      }}
                    />
                  ) : null}
                </Observer>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>
                Activities
              </MenuItemLink>
            </Box>
            <Box display='flex' alignItems='center'>
              {currentUser ? (
                <UserMenu />
              ) : (
                <>
                  <MenuItemLink to='/login'>Login</MenuItemLink>
                  <MenuItemLink to='/register'>Register</MenuItemLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>


      </AppBar>
    </Box>
  )
}