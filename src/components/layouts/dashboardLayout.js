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
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Cards from './cards';
import {useNavigate} from "react-router-dom";
import SmButton from '../smButton';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  const userFromRedux = useSelector((a)=>a);

  const navigate = useNavigate();

  const addStudent = ()=>{
    navigate("/addStudent");
  }

  const viewStudent = ()=>{
    navigate("/viewStudentData");
  }
  
  const idCardStudent = ()=>{
    navigate("/idCardStudent");
  }
  const FeeVoucher = ()=>{
    navigate("/feeVoucher");
  }
  const Logout = ()=>{
    navigate("/");
  }
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
           STUDENT MANAGEMENT SYSTEM
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
        <Box sx={{backgroundColor:'white'}}>
            <Typography variant='h5' sx={{color:"black"}}>
                Welcome : {userFromRedux.user.userName}
            </Typography>
            <Typography variant='h5' sx={{color:"black"}}>
                Email : {userFromRedux.user.email}
            </Typography>

            <Box>
              <SmButton label="Logout" variant="contained" onClick={Logout} />
            </Box>
            
        </Box>
        <Typography paragraph>
          <Box sx={{marginTop:"30px" ,padding:"20px", display:"flex" ,justifyContent:"center"}}>
            <Box sx={{padding:"20px"}}>
                <Cards onClick={addStudent} discription='Enter student data to manage your work' image="https://www.libertystaffing.ca/hubfs/5_Jobs_That_Require_Data_Entry_Skills.jpg" label="Add Student Data" />
            </Box>
            <Box sx={{padding:"20px"}}>
                <Cards onClick={viewStudent} discription='Enter student data to manage your work' image="data:image/jpeg;base64,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" label="View Student Data" />
            </Box>
            <Box sx={{padding:"20px"}}>
                <Cards onClick={idCardStudent} discription='Enter student data to manage your work' image="data:image/jpeg;base64,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" label="Generate ID Card" />
            </Box>
            <Box sx={{padding:"20px"}}>
                <Cards onClick={FeeVoucher} discription='Enter student data to manage your work' image="data:image/png;base64,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" label="Generate Fee Voucher" />
            </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
