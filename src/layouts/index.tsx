import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

interface TemplateWrapperProps {
  children: Function;
}

const TemplateWrapper: React.SFC<TemplateWrapperProps> = ({ children }) =>
  <div>
    <Helmet
      title="Colors of SABF"
      meta={[
        { name: 'description', content: 'Everyday stories from awesome people' },
      ]}
    />
    <div>
      { children() }
    </div>
  </div>

export default TemplateWrapper
