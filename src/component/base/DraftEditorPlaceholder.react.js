/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {DraftTextAlignment} from 'DraftTextAlignment';
import type EditorState from 'EditorState';

const React = require('React');

const cx = require('cx');

type Props = {
  accessibilityID: string,
  editorState: EditorState,
  text: string,
  textAlignment: DraftTextAlignment,
};

/**
 * This component is responsible for rendering placeholder text for the
 * `DraftEditor` component.
 *
 * Override placeholder style via CSS.
 */
class DraftEditorPlaceholder extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props): boolean {
    return (
      this.props.text !== nextProps.text ||
      this.props.editorState.getSelection().getHasFocus() !==
        nextProps.editorState.getSelection().getHasFocus()
    );
  }

  render(): React.Node {
    const hasFocus = this.props.editorState.getSelection().getHasFocus();

    const className = cx({
      'public/DraftEditorPlaceholder/root': true,
      'public/DraftEditorPlaceholder/hasFocus': hasFocus,
    });

    const contentStyle = {
      whiteSpace: 'pre-wrap',
    };

    return (
      <div className={className}>
        <div
          className={cx('public/DraftEditorPlaceholder/inner')}
          id={this.props.accessibilityID}
          style={contentStyle}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

module.exports = DraftEditorPlaceholder;
