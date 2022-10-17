import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import DarkMode from '../dark-mode/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import guru from '../../pages/images/guru.png';
import LanguageIcon from '@mui/icons-material/Language';
import Tooltip from '@mui/material/Tooltip';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: '2px solid #e0e0e0',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '45%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Tooltip title="Login">
        <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
              <Button variant="outlined" color="inherit" href="/login">Login</Button>
            </IconButton>
            </Tooltip>
      </MenuItem>
      <MenuItem>
      <Tooltip title="Sign Up">
      <IconButton
            size="large"  
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
              <Button variant="outlined" color="inherit" href="/register"
              sx={{
                backgroundColor: '#cfd8dc',
              }}
              >
                Sign Up
                </Button>
            </IconButton>
            </Tooltip>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Tooltip title="Language">
      <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          </Tooltip>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        padding: '10px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
      }}
      >
        <Toolbar>
          <img src={guru} alt="guru" style={{width: '70px', marginRight: '-20px'}}/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{ fontWeight: 'bold',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            }}
          >
            <span style={{color: '#ff5722'}}>G</span>uru <span style={{color: '#ff5722'}}>M</span>antra
          </Typography>
          <Search>
            <SearchIconWrapper
            sx={{
              color: 'grey.500',
            }}
            >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={searchHandler}
              sx={{
                color: 'grey.500',
                width: '100%',
              }}
            />
          </Search>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Best Place to Learn
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Dark Mode">
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <DarkMode />
          </IconButton>
          </Tooltip>
          <Tooltip title="Shopping Cart">
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <ShoppingCartIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Login">
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
              <Button variant="outlined" color="inherit" href="/login">
                Login
                </Button>
            </IconButton>
            </Tooltip>
            <Tooltip title="Sign Up">
            <IconButton
            size="large"  
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
              <Button variant="outlined" color="inherit" href="/register"
              sx={{
                backgroundColor: '#cfd8dc',
              }}
              >
                Sign Up
                </Button>
            </IconButton>
            </Tooltip>
            <Tooltip title="Language">
            <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          </Tooltip>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
           
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

