// @flow

import Kernel from "./kernel";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from 'react-syntax-highlighter/dist/styles';
import {ContentSection, ContentSectionPane} from '../content-section/content-section';

const install = `npm install -g ijavascript`;



export default () => (
    <ContentSection>
      <ContentSectionPane full>
        <Kernel
            displayName="Node.JS"
            repository="https://github.com/n-riesco/ijavascript"
            installURL="http://n-riesco.github.io/ijavascript/doc/install.md.html"
            logo="/static/nodejs-icon.svg"
        >
          <h3>Installation</h3>
          <p>
            Note: nteract 0.1.0 includes a bundled node.js kernel. You likely already have it!
          </p>
          <div className="columns">
            <div className="column">
              <h4>From the terminal</h4>
              <SyntaxHighlighter language='zsh' style={github}>{install}</SyntaxHighlighter>
            </div>
          </div>
        </Kernel>
      </ContentSectionPane>
    </ContentSection>
);
