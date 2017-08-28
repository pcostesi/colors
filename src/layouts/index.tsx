import * as React from "react";
import { PropTypes } from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.scss';

const Header = () => <div>Empty header please change me asap :)</div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Colors of SABF"
      meta={[
        { name: 'description', content: 'Everyday stories from awesome people' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
