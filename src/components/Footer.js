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
            >
                <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        rowSpacing={3}
                        color={"#3a606e"}
                    >
                        <Grid item>Impressum</Grid>
                        <Grid item>Datenschutz</Grid>
                        <Grid item>AGB</Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                >
                </Grid>
                <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                >
                </Grid>
                <Grid
                    item
                    xs={2}
                    sm={2}
                    iem md={2}
                    lg={2}
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
                        alignContent={"cnter"}
                    >
                        <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}>
                            Sonja Liebhart
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}>Biohof.Liebhart@aon.at</Grid>
                        <Grid

                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}>
                            +43 680/2167952
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                        >
                            Merkenbrechts 22
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                        >
                            3800 Göpfritz
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

