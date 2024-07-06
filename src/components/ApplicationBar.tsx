import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, AppBar, Menu, Box, Toolbar, IconButton, Tooltip, MenuItem, Drawer, Divider, Link, ListItem, List, ListItemIcon, ListItemButton } from '@mui/material/';
import { useNavigate } from "react-router-dom";
import logo from '../components/assets/toilers-logos/png/logo-no-background.png';
import { Settings } from "@mui/icons-material";
import worker19 from "../components/assets/Worker/worker19.png";
import CustomText from "../components/common/Text";
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../App";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { drawerMenu } from "../constants/drawer-menu";
import { APP_BG_DARK, APP_BG_GREY, APP_LIGHT_BLUE } from "../utils/colors";
import { settingsMenu } from "../constants/settings-menu";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function ApplicationBar() {
  const theme = useTheme();
  const navigate = useNavigate()

  const colorMode = React.useContext(ColorModeContext);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [state, setState] = React.useState({left: false});

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleMenuAction = (event: string) => {
    navigate(event);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) { return }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box sx={{mt: 2, mb: 2}}>
          <img src={worker19} alt="Toilers" style={{width: '250px', objectFit: 'scale-down'}} />
        </Box>

        <Divider />

        {/* Drawer menu One which includes Find a worker and become a worker */}
        <List>
          {drawerMenu.menuOne.map((object, index) => (
            <ListItem key={object.text} disablePadding>
              <ListItemButton onClick={()=>navigate(object.path)}>
                <ListItemIcon>
                {<object.icon style={{color: theme.palette.mode === 'dark' ? APP_LIGHT_BLUE : APP_BG_DARK}} fontSize="large" />}
                </ListItemIcon>
                <CustomText label={object.text} variant="h7" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* Drawer Menu Two: Includes About Us contacts rates */}
        <List>
          {drawerMenu.menuTwo.map((object, index) => (
            <ListItem key={object.text} disablePadding>
              <ListItemButton onClick={()=>navigate(object.path)}>
                <ListItemIcon>
                  {<object.icon style={{color: theme.palette.mode === 'dark' ? APP_LIGHT_BLUE : APP_BG_DARK}} fontSize="large" />}
                </ListItemIcon>
                <CustomText label={object.text} variant="h7" />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />

          {/* Theme Switch Control */}
            <ListItem key={'theme'} disablePadding>
              <ListItemButton onClick={colorMode.toggleColorMode}>
                <ListItemIcon style={{color: theme.palette.mode === 'dark' ? APP_LIGHT_BLUE : APP_BG_DARK}} >
                  {theme.palette.mode === 'light'
                    ? <DarkModeIcon fontSize="large" />
                    : <LightModeIcon fontSize="large" />
                  }
                </ListItemIcon>
                <CustomText
                  label={theme.palette.mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                  variant="h7"
                />
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center'
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Divider />
        <Link
          sx={{ marginX: '50px', mt: 2, mb: 2 }}
          underline="hover"
          component="button"
          onClick={() => {
            navigate(drawerMenu.menuThree[0].path)
          }}
        >
          {drawerMenu.menuThree[0].text}
        </Link>
      </Box>
    </Box>
  );
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters style={{backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#eee'}}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
        <img src={logo} alt="Toilers" style={{ width:'50px'}}/>
        <CustomText
          label="Toilers" variant="h5"
          isBold={true}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        />
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Settings className="FR" sx={{color: APP_BG_DARK, width: '50px', height: '50px', mr: 2,}} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "64px", backgroundColor: '#00000080' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settingsMenu.data.map((menu) => (
              <MenuItem sx={{ backgroundColor:  menu.label === 'Logout' ? APP_BG_GREY : '' }} key={menu.label} onClick={handleCloseUserMenu}>
                <menu.icon
                  key={menu.id}
                  style={{
                    marginRight: '10px',
                    color: menu.label === 'Logout' ? 'red' : theme.palette.mode === 'dark' ? APP_LIGHT_BLUE : APP_BG_DARK
                  }}
                  onClick={()=> handleMenuAction(menu.path)}
                />
                <Typography onClick={()=>handleMenuAction(menu.path)}>
                  {menu.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> 
      </Toolbar>
    </AppBar>
  );
}
export default ApplicationBar;
