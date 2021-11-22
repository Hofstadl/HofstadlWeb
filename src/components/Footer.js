import React from "react"
import {Grid} from "@mui/material";
import sonja from "../data/images/else/sonja.jpg";

export default function Footer() {

    return (
        <div>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            columnSpacing={{xs: 1, sm: 2, md: 3}}
            bordercolor="#3a606e"
            border={2}
            color={"#3a606e"}
            padding={1}
        >
            <Grid
                item lg={8}
            >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    rowSpacing={3}
                    margin={4}
                    color={"#3a606e"}
                >
                    <Grid item>Impressum</Grid>
                    <Grid item>Datenschutz</Grid>
                    <Grid item>AGB</Grid>
                </Grid>
            </Grid>
            <Grid
                item lg={2}
                padding={2}
            >
                <img src={sonja} width="120" height="150" align={"right"}/>
            </Grid>
            <Grid
                item lg={2}
                padding={2}
            >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="white"/>
                </svg>


            </Grid>
            <Grid
                style={{background: "#84bcda"}}
                item lg={2}
            >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    rowSpacing={1}
                    padding={3}
                >
                    <Grid item>Sonja Liebhart</Grid>
                    <Grid item> </Grid>
                    <Grid item> </Grid>
                    <Grid item>Biohof.Liebhart@aon.at</Grid>
                    <Grid item>+43 680/2167952</Grid>
                    <Grid item> </Grid>
                    <Grid item> </Grid>
                    <Grid item> Merkenbrechts 22</Grid>
                    <Grid item>3800 Göpfritz</Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}
