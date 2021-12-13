import React, {Component} from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import {Link} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <>
                <Paper sx={{ width: 320, maxWidth: '100%',height:'100%' }}>
                    <MenuList>
                        <MenuItem>
                            <Link to={"/"}>Test 1</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={"/"}>Test 1</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={"/"}>Test 1</Link>
                        </MenuItem>
                        <Divider/>
                    </MenuList>
                </Paper>

            </>
        );
    }
}

export default Sidebar;