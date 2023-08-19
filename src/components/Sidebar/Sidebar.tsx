import {Drawer, Box, Typography, IconButton, Link, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'


const Sidebar = () => {

    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false); 
    return (
        <>
            <IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={()=>setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen}
                onClose={()=>setDrawerOpen(false)}>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h5' component='div' color='green' fontFamily='geometric-sans-serif'>
                        GrowMeOrganic
                    </Typography>
                    <Stack spacing={4} direction='column' m={4}>
                        <Link fontWeight='medium' href='#posts-table' underline='hover' color='black' textAlign='left'>Posts Table</Link>
                        <Link fontWeight='medium' href='#select-dept' underline='hover' color='black' textAlign='left'>Select Department</Link>
                    </Stack>
                </Box>
            </Drawer>
        </>
  )
}

export default Sidebar