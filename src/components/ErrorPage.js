import React from "react"
import Layout from "../components/Layout"

export default function ErrorPage({errorCode, error, errorDetails}) {

    return (
        <Layout>
            <div class="flex h-screen flex-col">
                <div class="m-auto">
                    <div class="align-bottom text-center text-9xl text-yellow-500">
                        {errorCode}
                    </div>
                    <div class="align-middle text-center text-4xl">
                        {error}
                    </div>
                    <div class="align-middle text-center text-1xl">
                        {errorDetails}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
