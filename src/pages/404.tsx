import { Link } from 'gatsby'
// ? Dunno why it says React namespace is hoisted
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const NotFoundPage = (): React.ReactElement => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You`&apos;`ve hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
