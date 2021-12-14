import React, {Component} from 'react';
import {Link} from "@mui/icons-material";
import {Link as RLINK} from "react-router-dom";
import Typography from "@mui/material/Typography";

class Copyright extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Typography variant="body2" color="text.secondary" align="center" {...this.props}>
                    {'Copyright © '}
                    <RLINK color="inherit" to="https://officetalk.com.bd" target="_blank">
                        Office Talk Bangladesh
                    </RLINK>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </>
        );
    }
}

export default Copyright;