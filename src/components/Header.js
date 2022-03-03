import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    const pages = ['real-estate', 'map'];
    return (
        <AppBar position="sticky" sx={{ padding: '0 20px'}}>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to={`/`}  key={'home'}> <Button
                           
                           sx={{ my: 2, color: 'white', display: 'block' }}
                       >
                           {'home'}
                       </Button>
                       </Link>
                    {pages.map((page) => (
                        <Link to={`/${page}`}  key={page}> <Button
                           
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        </Link>
                    ))}
                </Box>

            </Toolbar>
        </AppBar >
    )
}

export default Header