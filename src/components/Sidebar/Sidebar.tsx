import {Drawer, Box, Typography, IconButton, Link, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Close, Rocket } from '@mui/icons-material';


const Sidebar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false); 
    return (
        <>
            <IconButton size='small' edge='start' color='inherit' aria-label='menu' onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen}
                onClose={()=>setDrawerOpen(false)}>
                <IconButton sx={{ justifyContent: "flex-end"}} size='small'color='inherit' aria-label='close' onClick={()=>setDrawerOpen(false)} disableRipple>
                    <Close/>
                </IconButton>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h5' component='div' color='orange' fontFamily='sans-serif'>
                            <Rocket fontSize='large' htmlColor='orange'/>GrowMeOrganic
                    </Typography>
                    <Stack spacing={4} direction='column' m={4}>
                        <Link fontWeight='medium' href='#postsTable' underline='hover' color='black' textAlign='left' fontFamily='sans-serif'>Posts Table</Link>
                        <Link fontWeight='medium' href='#selectDept' underline='hover' color='black' textAlign='left' fontFamily='sans-serif'>Select Department</Link>
                    </Stack>
                </Box>
            </Drawer>
        </>
  )
}

export default Sidebar