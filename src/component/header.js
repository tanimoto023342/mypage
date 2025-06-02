import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"
import ManIcon from '@mui/icons-material/Man';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>谷元柊介の自己紹介ページ</Typography>
                <ManIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
