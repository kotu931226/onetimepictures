import React from 'react';
import {AppBar, Tab, Tabs} from '@material-ui/core';

import './css/main.css';
import { TabPanel, TabProps } from "./scripts/TabScripts";
import { Home } from "./view/Home"
import { Generater }  from "./view/Generater"
import { Technology } from "./view/Technology"


function Base() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <span className="italianno bold" style={{"fontSize":"300%"}}>
                    Onetime Pictures
                </span>
                <Tabs value={value} onChange={handleChange} aria-label="wapped label tabs example">
                    <Tab {...TabProps('home')} />
                    <Tab {...TabProps('generater')} />
                    <Tab {...TabProps('technology')} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index='home'><Home /></TabPanel>
            <TabPanel value={value} index='generater'><Generater /></TabPanel>
            <TabPanel value={value} index='technology'><Technology /></TabPanel>
        </React.Fragment>
    );
}

export default Base;
