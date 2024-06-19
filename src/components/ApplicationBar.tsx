import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddReaction from '@mui/icons-material/AddReaction';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Handshake from '@mui/icons-material/Handshake';
import StarBorder from '@mui/icons-material/StarBorder';
import QuestionMark from '@mui/icons-material/QuestionMark';
import HelpOutline from '@mui/icons-material/HelpOutline';
import PermPhoneMsg from '@mui/icons-material/PermPhoneMsg';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  type Anchor = 'top' | 'left' | 'bottom' | 'right';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log('anchor - ', anchor, ' Open - ', open, ' Event - ', event)
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text: 'Find a worker', icon: Handshake},
         {text: 'Become a worker', icon: WorkOutline}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <object.icon></object.icon>
              </ListItemIcon>
              <ListItemText primary={object.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{text: 'About Us', icon: HelpOutline},
        {text: 'Terms & Condition', icon:QuestionMark},
        {text: 'Contact Us', icon:PermPhoneMsg },
        {text: 'Rate Us', icon: StarBorder},
        {text: 'Leave a Feedback', icon: AddReaction}].map((object, index) => (
          <ListItem key={object.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<object.icon />}
              </ListItemIcon>
              <ListItemText primary={object.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ mx: 1 }}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
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
          {/* <Menu
            id="basic-menu"
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Find a worker</MenuItem>
            <MenuItem onClick={handleClose}>Become a worker</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Terms and Conditions</MenuItem>
            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            <MenuItem onClick={handleClose}>Leave a Feedback</MenuItem>
          </Menu> */}
          {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleDrawerClose}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Shreyash Dhapke" src="/static/images/avatar/2.jpg" />
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ApplicationBar;
