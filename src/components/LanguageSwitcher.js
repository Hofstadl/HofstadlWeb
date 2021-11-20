import React, {useContext, useState} from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import {I18nextContext, Link, useI18next, useTranslation} from "gatsby-plugin-react-i18next"
import {graphql} from "gatsby";
import Grid from "@mui/material/Grid";


export default function LanguageSwitcher() {
    const context = useContext(I18nextContext)
    const {languages, originalPath} = useI18next()
    const {t} = useTranslation()
    const [open, setOpen] = useState(false)

    const handleDialogOpen = () => {
        setOpen(true)
    }

    const handleDialogClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleDialogOpen}>
                {context.language}
            </Button>

            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {t("languageSwitcherTitle")}
                </DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        className={"justify-center"}
                    >

                        {languages.map((language) => (
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={3}
                                lg={2}
                                key={language}
                            >
                                <Link
                                    to={originalPath}
                                    language={language}
                                    onClick={handleDialogClose}
                                >
                                    {language}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
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