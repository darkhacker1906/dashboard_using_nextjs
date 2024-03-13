"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Collapse } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import { usePathname, useRouter } from 'next/navigation';

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const {children}=props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCollapse,setIsCollapse]=React.useState(false);
  const pathname=usePathname();
  const router=useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleCollapse=()=>{
    setIsCollapse(!isCollapse);
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
      <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {['Dashboard', 'Analytics', 'Users', 'Projects','Messages','Settings','Profile'].map((text, index) => (
          <ListItem key={text} disablePadding
          className={pathname.startsWith("/" + text.toLowerCase())? "text-sky-600 bg-gray-200":"text-slate-700"}
          onClick={()=>router.push("/"+text.toLowerCase())}
          >
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/" + text.toLowerCase())? "text-sky-600 ":"text-slate-700"}>
              {index === 0 && <SpaceDashboardIcon /> }
              {index === 1 && <QueryStatsIcon /> }
              {index === 2 && <PeopleAltIcon /> }
              {index === 3 && <WorkIcon /> }
              {index === 4 && <MailIcon /> }
              {index === 5 && <SettingsSharpIcon /> }
              {index === 6 && <AccountCircleIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
              <Divider />
         <ListItem disablePadding onClick={()=>handleCollapse()}>
            <ListItemButton>
              <ListItemIcon>
             <HelpIcon/>
              </ListItemIcon>
              <ListItemText primary="More" />
              {
                isCollapse ? <ExpandMoreIcon/>:<ExpandLessIcon/>   
              }
            </ListItemButton>
          </ListItem>
      </List>

      <Collapse in={isCollapse} timeout="auto" unmountOnExit className='ml-4' >
      <List disablePadding >
        {['Support', 'Contact', 'Docs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
             
                {/* {index === 1 && <QueryStatsIcon /> } */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"#ffffff",
          color:"#2f2f2f"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
  children:PropTypes.array,
};

export default Layout;