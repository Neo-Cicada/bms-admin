  import * as React from 'react';
  import PropTypes from 'prop-types';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Divider from '@mui/material/Divider';
  import Drawer from '@mui/material/Drawer';
  import IconButton from '@mui/material/IconButton';
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
  import Certificate from './Certificate';
  import Enrollment from './Enrollment';
  import Equipment from './Equipment';
  import Facility from './Facility';
  import Medicine from './Medicine'
  import {Link} from "react-router-dom";
  import { useState } from 'react';
  const drawerWidth = 240;

  function SideBar(props) {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          
        <ListItemButton onClick={() => setSelectedComponent('certificate')}>
          <ListItemText primary='Certificate' />
        </ListItemButton>
        <ListItemButton onClick={() => setSelectedComponent('enrollment')}>
          <ListItemText primary='Enrollment' />
        </ListItemButton>
        <ListItemButton onClick={() => setSelectedComponent('equipment')}>
          <ListItemText primary='Equipment' />
        </ListItemButton>
        <ListItemButton onClick={() => setSelectedComponent('facility')}>
          <ListItemText primary='Facility' />
        </ListItemButton>
        <ListItemButton onClick={() => setSelectedComponent('medicine')}>
          <ListItemText primary='Medicine' />
        </ListItemButton>

        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
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
              {selectedComponent}
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
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
          {/* //This codes will render its component */}
          {selectedComponent === 'certificate' && <Certificate />}
          {selectedComponent === 'enrollment' && <Enrollment />}
          {selectedComponent === 'equipment' && <Equipment />}
          {selectedComponent === 'facility' && <Facility />}
          {selectedComponent === 'medicine' && <Medicine />}
          
        </Box>
      </Box>
    );
  }

  SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  export default SideBar;
