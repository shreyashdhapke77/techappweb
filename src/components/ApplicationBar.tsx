import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddReaction from '@mui/icons-material/AddReaction';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Handshake from '@mui/icons-material/Handshake';
import StarBorder from '@mui/icons-material/StarBorder';
import HelpOutline from '@mui/icons-material/HelpOutline';
import PermPhoneMsg from '@mui/icons-material/PermPhoneMsg';
import { useNavigate } from "react-router-dom";
import logo from '../components/assets/toilers-logos/png/logo-no-background.png';
import { Dashboard, ManageAccounts, AccountCircle, Logout, ViewList, People  } from "@mui/icons-material";
import { APP_BG_LIGHT, APP_BG_DARK } from "../utils/colors";
import CustomText from "../components/common/Text";

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
  
  const handleMenuAction = (path: string) => {
    navigate(path)
  }

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
        {[{text: 'Find a worker', icon: Handshake, path: '/findWorker' },
         {text: 'Become a worker', icon: WorkOutline, path: '/becomeWorker'}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton onClick={()=>navigate(object.path)}>
              <ListItemIcon>
              {<object.icon sx={{width: '36px', height: '36px', color: APP_BG_DARK}}/>}
              </ListItemIcon>
              <CustomText label={object.text} variant="h7" sx={{color: APP_BG_DARK}}/>
              {/* <ListItemText primary={object.text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{text: 'About Us', icon: HelpOutline, path: '/about'},
        {text: 'Contact Us', icon:PermPhoneMsg, path: '/contactUs' },
        {text: 'Rate Us', icon: StarBorder, path: '/rateUs'}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton onClick={()=>navigate(object.path)}>
              <ListItemIcon>
                {<object.icon sx={{width: '36px', height: '36px', color: APP_BG_DARK}}/>}
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
        <Typography
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
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AddReaction sx={{width: '50px', height: '50px', mr: 2, color: APP_BG_LIGHT}}></AddReaction>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
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
              <MenuItem key={menu.label} onClick={handleCloseUserMenu}>
               <menu.icon style={{ marginRight: '5px'}}/>
                <Typography onClick={()=>handleMenuAction(menu.path)}>{menu.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> 
      </Toolbar>
    </AppBar>
  );
}
export default ApplicationBar;
