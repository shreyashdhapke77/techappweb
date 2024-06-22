import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Menu, Box, Toolbar, IconButton, Avatar, Tooltip, MenuItem, Drawer, Divider, Link, ListItem, List, ListItemIcon, ListItemButton, ListItemText } from '@mui/material/';
import { useNavigate } from "react-router-dom";
import logo from '../components/assets/toilers-logos/png/logo-no-background.png';
import { Dashboard, ManageAccounts, AccountCircle, Logout, ViewList, People, SettingsSuggest, HomeRepairService, HandshakeTwoTone, StarPurple500, Feed, PermPhoneMsg  } from "@mui/icons-material";
import { APP_BG_LIGHT, APP_BG_DARK } from "../utils/colors";
import CustomText from "../components/common/Text";
import CustomButton from "./common/Button";

const settingsMenu = [
  {label: "Profile", path: "/userProfile", icon: AccountCircle},
  {label: "Account", path: '/userAccount', icon: ManageAccounts}, 
  {label: "Dashboard", path: '/dashboard', icon: Dashboard},
  {label: "Blog", path: '/blog', icon: ViewList},
  {label: "Community", path: '/community', icon: People},
  {label: "Logout", path: '/logout', icon: Logout}
]

function ApplicationBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const handleCloseUserMenu = (key: any) => {
    setAnchorElUser(null);
  };
  
  // const handleMenuAction = (path: string) => {
  //   navigate(path)
  // }
  const handleMenuAction = (event: string) => {
    console.log('Event', event)
    // navigate();
  };

  type Anchor = 'top' | 'left' | 'bottom' | 'right';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const navigate = useNavigate()
  const list = (anchor: Anchor) => (
    // Somewhere in your code, e.g. inside a handler:
    <Box
      sx={{ flexDirection: 'column', display: "flex", alignContent: 'space-between', justifyContent: 'space-between', height: '100%' }}
  >
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{mt: 2, mb: 2}}>
          <img src={logo} alt="Toilers" style={{width: '250px', objectFit: 'scale-down'}} />
      </Box>
      <Divider />
      <List>
        {[{text: 'Find a worker', icon: HandshakeTwoTone, path: '/findWorker' },
         {text: 'Become a worker', icon: HomeRepairService, path: '/becomeWorker'}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton onClick={()=>navigate(object.path)}>
              <ListItemIcon>
              {<object.icon fontSize="large" sx={{color: APP_BG_DARK}}/>}
              </ListItemIcon>
              <CustomText label={object.text} variant="h7" sx={{color: APP_BG_DARK}}/>
              {/* <ListItemText primary={object.text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{text: 'About Us', icon: Feed, path: '/about'},
        {text: 'Contact Us', icon:PermPhoneMsg, path: '/contactUs' },
        {text: 'Rate Us', icon: StarPurple500, path: '/rateUs'}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton onClick={()=>navigate(object.path)}>
              <ListItemIcon>
                {<object.icon fontSize="large" sx={{ color: APP_BG_DARK}}/>}
              </ListItemIcon>
              <CustomText label={object.text} variant="h7" sx={{color: APP_BG_DARK}} />
              {/* <ListItemText primary={object.text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Box>
        <Box
        sx={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}
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
            navigate('/termsCondition')
          }}
        >
          Terms & Conditions
        </Link>
      </Box>
    </Box>
  );
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters style={{backgroundColor: APP_BG_DARK}}>
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
        {/* <Alert severity="warning">The site is under construction.</Alert> */}
        <img src={logo} alt="Toilers" style={{ width:'50px'}}/>
        <CustomText label="Toilers" variant="h5" isBold={true}  sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}/>
        {/* <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
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
        >
          Toilers
        </Typography> */}

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SettingsSuggest sx={{width: '50px', height: '50px', mr: 2, color: 'white'}}></SettingsSuggest>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "65px", backgroundColor: '#00000080' }}
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
            {settingsMenu.map((menu) => (
              <MenuItem sx={{backgroundColor:  menu.label === 'Logout'? '#aaaaaa80' : ''}} key={menu.label} onClick={handleCloseUserMenu}>
               <menu.icon style={{ marginRight: '10px', color: menu.label === 'Logout'? 'red' : APP_BG_DARK}} onClick={()=>handleMenuAction(menu.path)}/>
               { menu.label === 'Logout' ? <Divider /> : null }
               <Divider />
                <CustomText sx={{color: menu.label === 'Logout'? 'red' : APP_BG_DARK}} isBold={menu.label === 'Logout'} label={menu.label} />
                {/* <Typography onClick={()=>handleMenuAction(menu.path)}>{menu.label}</Typography> */}
              </MenuItem>
            ))}
          </Menu>
        </Box> 
      </Toolbar>
    </AppBar>
  );
}
export default ApplicationBar;
