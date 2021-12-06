import React from "react"
import Layout from "../components/Layout"
import Typography from '@mui/material/Typography';

export default function NotFound() {
    const {t} = useTranslation();

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
                    {t("nothingFound")}
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                    {t("nothingFoundText")}
                </Typography>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;