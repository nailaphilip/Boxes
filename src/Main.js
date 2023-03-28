import React from "react";
import Box from './Box';
import './Main.css'


const Main = () => {
return (
    <main className="main">
    <Box name="Nailya" title= "CEO" age= "29"/>
    <Box name="Lea" title= "marketing" age= "25"/>
    <Box name="Silva" title= "developer" age= "45"/>
    </main>
);
};

export default Main;