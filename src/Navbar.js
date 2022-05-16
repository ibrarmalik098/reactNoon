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
import { borderRadius } from '@mui/system';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem"



// Appbar ================

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>

  );
  const [show, setShow] = useState(false)


  {/* first section end  */ }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#feee00", height: "85px", maxWidth: "100%", color: "black" }} position="static">
        <Toolbar>

          <Typography sx={{ marginright: "auto" }}>
            <div className='flex'>
              <img className='' src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="noon" class="sc-afe2674f-1 iYVDXL" />
              <img className='flaglogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png" />
              <span className=' flexcloum black'>Deliver to
                <span className='bold '>
                  Dubai
                </span>
              </span>
              <img className='' src='https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg' />
            </div>
          </Typography>



          <Search>

            <StyledInputBase
              className='inp'
              placeholder="what are you looking for..."
              inputProps={{ '': 'search' }}
            />
          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <span className='black bold '>Sign In</span>
          <PersonOutlineOutlinedIcon sx={{ padding: "10px 10px 7px 3px" }}
          />
          <span   >
            |
          </span>
          <span className='black bold textmargin '>Cart</span>
          <LocalGroceryStoreOutlinedIcon sx={{ padding: "10px 10px 7px 5px" }} />




        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* first section end  */}
      {/* second section start  */}
      <div>
        <div class="content flex">

          <div class="trigger"><a onClick={() => setShow(!show)} href="/uae-en/all-products/">All Categories <ArrowDropDownIcon /> </a>
          </div>
          <div>
            <ul className=''>
              <div className=''>
                <div className='flex'>
                  <div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>ELECTRONICS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>MEN</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>WHOMEN</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>HOME</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BEAUTY & FRAGRANCE</span>
                      </a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BABY & TOYS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>GROCERY</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>SPORTS</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead '>BESTSELLER</span>
                      </a>
                    </li>
                  </div><div>
                    <li>
                      <a className='navhead' href=''>
                        <span className='black  fonthead   '>SELL ON NOON</span>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          {show ? <div class="menu ">
            <div class="category"  >
              <span class=""><a href="/uae-en/electronics/">Electronics &amp; Mobiles</a></span>
              <span class=""><a href="/uae-en/beauty/">Beauty &amp; Fragrances</a></span>
              <span class=""><a href="/uae-en/fashion-women/">Fashion</a></span>
              <span class="selected"><a href="/uae-en/home-kitchen/">Home &amp; Kitchen</a></span>
              <span class=""><a href="/uae-en/sports-outdoors/">Sports &amp; Outdoors</a></span>
              <span class=""><a href="/uae-en/toys/">Toys &amp; Games</a></span>
              <span class=""><a href="/uae-en/baby/">Baby Products</a></span>
              <span class=""><a href="/uae-en/health-personal-care/">Health &amp; Nutrition</a></span>
              <span class=""><a href="https://daily.noon.com/uae-en/" target="_blank" rel="noopener noreferrer">Grocery</a></span>
              <span class=""><a href="/uae-en/automotive-store/">Automotive</a></span>
              <span class=""><a href="/uae-en/tools-and-home-improvement-store/">Tools &amp; Home Improvement</a></span>
              <span class=""><a href="/uae-en/book-store/">Books</a></span>
              <span class=""><a href="/uae-en/pet-store/">Pet Supplies</a></span>
              <span class=""><a href="/uae-en/stationery/">Stationery &amp; Office Supplies</a></span>
              <span class=""><a href="/uae-en/music-movies-and-tv-shows/">Music, Movies &amp; TV Shows</a></span>
              <span class=""><a href="/uae-en/mahali/">Mahali</a></span></div>

          </div> : null}


        </div>
      </div>
      {/* second section end  */}
      {/* third section start  */}
      <>
        <div class="poster">
          <img src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png" />
        </div>



      </>
      {/* third section end  */}
      {/* forth section start  */}
      <>
        <div className='flex container'>

          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220513/d921c8edd98861aaa6e1ec86250af731/en_mb_uae-cat-08.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png" />
              </div>
            </a>
          </div>
          <div class="bannerContainer">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div class=" imgdiv">
                <img className='grocery' src="https://k.nooncdn.com/cms/pages/20220509/4c30dbb6569ac7bc140c32e9f28c32b3/en_mb_uae-cat-39.png" />
              </div>
            </a>
          </div>
        </div>

      </>
      {/* forth section end  */}
      {/*================= fifth section end =======================  */}

      <>
        <div className='banner'>

          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png" />
              </div>
            </a>
          </div>

        </div>



      </>

      {/*================= fifth section end =======================  */}
      {/*================ six section start =======================  */}

      <div className='recomended'>
        <h3>Recommended for you</h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1633374485/N39265265A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>
      {/*================= six section end =======================  */}
      {/*================= seven section start =======================  */}
      <div className='backcolor'>
        <div className='posimega'>
          <div class=" imgmega">
            <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png" />
          </div>
        </div>

        <div className='mainimgpower flex'>
          <div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png" />
            </div>
          </div>
          <div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-02.png" />
            </div>
          </div><div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220515/66b60fb64c94e6805de37e047d39550d/en_mb_uae-mega-03-backup.png" />
            </div>
          </div><div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220514/30321d99e9c64cf46960fc9311ff2b99/en_mb_uae-mega-04.png" />
            </div>
          </div>
        </div>

      </div>
      {/*================= seven section end =======================  */}
      {/*================= eight section start =======================  */}
      <>
        <div className='eightbanner'>

          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png" />
              </div>
            </a>
          </div>


        </div>
      </>

      {/*================= eight section end =======================  */}
      {/*================= nine section start =======================  */}

      <div className='darkback'>
        <div className='clearance'>
          <div class=" imgmega">
            <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png" />
          </div>
        </div>

        <div className='mainimgpower flex'>
          <div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png" />
            </div>
          </div>
          <div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png" />
            </div>
          </div><div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png" />
            </div>
          </div><div>
            <div class=" mainpoerbank  poweepadding">
              <img className='powerbank' src="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-04.png" />
            </div>
          </div>
        </div>

      </div>
      {/*================= nine section end =======================  */}
      {/*================= ten section start =======================  */}
      <div className='moreClearence'>
        <h3>More clearance deals</h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1608997951/N39861512A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1626443203/N47090394V_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>

      {/*================= ten section  end =======================  */}
      {/*================= 11 section  end =======================  */}
      <div className='freeeDeli'>
        <div >
          <img src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png' />
        </div>
      </div>
      {/*================= 11 section  end =======================  */}
      {/*================= 13 section  start =======================  */}
      <div className='moreClearence'>
        <h3>Trending deals in electronics</h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1621935249/N47626990A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570072/N50840187A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1634621974/N19518803A_2.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1635356755/N38839537A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>


      {/*================= 13 section  end =======================  */}
      {/*================= 14 section  start =======================  */}
      <div className='forteenbanner'>

        <div className='banner' >
          <a href="">
            <div className='addbanner'>
              <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-spot-01.png" />
            </div>
          </a>
        </div>
        <div className='banner' >
          <a href="">
            <div className='addbanner'>
              <img src="https://k.nooncdn.com/cms/pages/20220218/0a3aa81cd5cd61e00d09bb556e4a0467/en_dk_uae-spot-03.png" />
            </div>
          </a>
        </div>
        <div className='banner' >
          <a href="">
            <div className='addbanner'>
              <img src="https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-spot-women-01.png" />
            </div>
          </a>
        </div>
      </div>
      {/*================= 14 section  end =======================  */}
      {/*================= 15 section  start =======================  */}
      <div className='freeeDeli'>
        <div >
          <img src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-strip-01G.png' />
        </div>
      </div>
      {/*================= 15 section  end =======================  */}
      {/*================= 16 section  start =======================  */}
      <div className='moreClearence'>
        <h3>Trending deals in laptops</h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645115681/N51448598A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1650552881/N51035099A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1637998900/N45795259A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648219210/N41910685A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1650287171/N51238405A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>


      {/*================= 16 section  end =======================  */}
      {/*================= 17 section  end =======================  */}
      <div className='lightblue'>

        <div className='moreClearence'>
          <img src='https://k.nooncdn.com/cms/pages/20220506/aea0b6fb802441648afe8b450184b13f/en_dk-uae-deal-title-01.gif' />
        </div>
        <div className='seventybanner'>

          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-01.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-02.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220514/748bf56982867c107f39b365f76d14ca/en_mb_uae-deals-03.png" />
              </div>
            </a>
          </div>
          <div className='banner' >
            <a href="">
              <div className='addbanner'>
                <img src="https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-04.png" />
              </div>
            </a>
          </div>


        </div>
      </div>

      {/*================= 17 section  end =======================  */}
      {/*================= 18 section  start =======================  */}
      <div className='moreClearence'>
        <h3>Trending deals in mobiles</h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570072/N50840187A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570082/N52929058A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1642258788/N41247589A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645762210/N52751033A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1646808689/N52856958A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1637257601/N47081424A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>
      {/*================= 18 section  end =======================  */}
      {/*================= 19 section  start =======================  */}
      <div className='lightgreen'>


        <div className='shopgrocery'>
          <img src='https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif' />
        </div>

        {/*================= 19 section  end =======================  */}
        {/*================= 20 section  start =======================  */}


        <div className='grobig'>
          <h1>Grocery</h1>
        </div>
        <Grid container spacing={0}>
          <Grid item md={2} xl={2} lg={12} xs={12}>
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20220112/4d90a77f391834f5df66e403d031fa6a/en_cat-01.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
          <Grid item md={2} xl={2} lg={12} xs={12}>
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-02.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
          <Grid item md={2} xl={2} lg={12} xs={12} >
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-03.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
          <Grid item md={2} xl={2} lg={12} xs={12}>
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-04.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
          <Grid item md={2} xl={2} lg={12} xs={12}>
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-05.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
          <Grid item md={2} xl={2} lg={12} xs={12}>
            <Item> <div class=" secmain">
              <a href="" >
                <div class=" main grid">
                  <div class=" cardflex">
                    <div class=" imgposition">
                      <img src="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-06.png" className='imgsize' />
                    </div>
                  </div >
                </div >
              </a>
            </div ></Item>
          </Grid>
        </Grid>
        {/*================= 20 section  end =======================  */}
        {/*=====
        ============ 21 section  start =======================  */}
      </div>
      <div className='trending  '>
        <h3>Trending deals in kitchen & dinings </h3>
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1646724232/N20689072A_4.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/pzsku/Z7AF573123E987A37330FZ/45/_/1645286375/3f3f3b8d-4d41-496f-8658-46b2dd6a8666.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1650799997/N38900263A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class="maindiv secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://z.nooncdn.com/products/tr:n-t_240/v1645647373/N32034206A_1.jpg" className='imgsize' />
                  </div>
                  <div class=" T500">
                    <span >
                      <span>
                        <span>T500 Bluetooth Full</span>
                        <br />
                        <span>
                          <span>Touch Call Smartwatc…</span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class=" cfjJNJ">
                    <span class="currency">AED </span>
                    <strong>37.00</strong>
                  </div>
                  <div class=" ">
                    <span class="oldPrice">AED <strong>89</strong> </span>
                    <span class="discount"> <strong>58% Off</strong> </span>
                  </div>
                  <div class=" Arrives">

                    <div >Arrives <span >
                      <strong>Tomorrow, May 17</strong>
                    </span>
                    </div>
                    <div class=" express flex">
                      <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" />
                      <div class=" kTabCv">
                        <div class=" lastsectonofcard">
                          <span >4.1</span>
                          <span >750</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>
      {/*================= 21 section  end =======================  */}
      {/*================= 22 section start =======================  */}


      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-mashreq-1strip-01.gif' />
      </div>
      {/*================= 22 section  end =======================  */}




      {/*================= 23 section  start =======================  */}

      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-mw-title.png' />
      </div>

      <div className='flex tshirt'>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-02.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-03.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-04.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-05.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-06.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-02.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-mw-01.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-08.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-01.png" />
        </div>


      </div>
      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-ww-title.png' />
      </div>


      <div className='flex tshirt'>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-01.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-02.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-03.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-04.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-ww-01.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-01.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-06.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-07.png" />
        </div>
        <div class=" tshirtpadding">
          <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-08.png" />
        </div>

      </div>


      {/*================= 23 section  end =======================  */}

      {/*================= 24 section  start =======================  */}

      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20220513/566de6256fc734f249b05d5ec115504f/en_dk_uae-hero-03.png' />
      </div>

      <div className='zero'>
        <img src='https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-mashreq-1strip-01.gif' />
      </div>

      {/*================= 24 section  end =======================  */}
      {/*================= 24 section  end =======================  */}

      {/* first */}
      <div className='viewall'>
        <img src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-title.png' />
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-01.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-02.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-06.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>

      {/* second */}

      <div className='viewall'>
        <img src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-title.png' />

      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-01.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-02.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-05.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-06.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>

      {/* third */}
      <div className='viewall'>
        <img src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-title.png' />

      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-01.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-02.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-laptops-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-04.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-05.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-06.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>

      {/*================= 24 section  end =======================  */}

      {/*================= 25 section  start =======================  */}
      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20211018/ecde4ae8250d6cd07b29d4de4b106f61/en_strip-00.png' />
      </div>

{/* first */}
<div className='viewall'>
        <img src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-title.png' />
      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-01.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-02.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-04.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-05.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-watches-06.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>

      {/* second */}

      <div className='viewall'>
        <img src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-title.png' />

      </div>
      <Grid container spacing={0}>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-01.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-02.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12} >
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-03.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-04.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-05.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
        <Grid item md={2} xl={2} lg={12} xs={12}>
          <Item> <div class=" secmain">
            <a href="" >
              <div class=" main grid">
                <div class=" cardflex">
                  <div class=" imgposition">
                    <img src="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-06.png" className='imgsize' />
                  </div>
                </div >
              </div >
            </a>
          </div ></Item>
        </Grid>
      </Grid>
      {/*================= 25 section  end =======================  */}
      {/*================= 25 section  end =======================  */}
      <div className='shopgrocery'>
        <img src='https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg' />
      </div>

      {/*================= 25 section  end =======================  */}
    </Box >


  );
}

  // Appbar ================