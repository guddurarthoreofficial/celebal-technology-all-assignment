import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children, toggleTheme, themeMode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/calendar">
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/kanban">
            <ListItemText primary="Kanban" />
          </ListItem>
          <ListItem button component={Link} to="/data-table">
            <ListItemText primary="Data Table" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>

          {/* Theme Toggle */}
          <ListItem>
            <ListItemIcon>
              {themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
