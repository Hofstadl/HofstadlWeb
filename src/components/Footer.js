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
            >
                <img src={sonja} width="120" height="150" align={"right"}/>
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
                    <Grid item>+43 ...</Grid>
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
