import Link from "gatsby-link"
import * as React from "react"
import { DefaultLayout } from "../layouts"

const contact = () => (
    <DefaultLayout>
        <h1>Contact</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </DefaultLayout>
)

export default contact
