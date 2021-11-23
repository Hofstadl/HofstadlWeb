import React from "react"
import Layout from "../components/Layout"
import Typography from '@mui/material/Typography';

export default function NotFound() {
    return (
        <Layout>

            <div align={'center'} style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Typography fontWeight={350} color={'orange'} variant="h1" component="div" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    UPS! NICHTS WURDE GEFUNDEN!
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                    Die Seite nach der Sie suchen existiert nicht oder ist vorübergehend nicht erreichbar!
                </Typography>
            </div>
        </Layout>
    )
}
