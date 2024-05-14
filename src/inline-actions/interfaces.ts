// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BaseComponentProps } from '../internal/base-component';
import { IconProps } from '../icon/interfaces';

export type Feedback = 'thumbs-up' | 'thumbs-down';

export interface Action {
  onClick?: () => void;
  iconName?: IconProps.Name;
  iconSvg?: React.ReactNode;
  tooltip?: string;
  text: string;
}

export interface InlineActionsProps extends BaseComponentProps {
  textToCopy?: string;

  /**
   * Adds `aria-label` to the copy button. Use this to provide an accessible name for buttons that don't have visible text,
   * and to distinguish between multiple buttons with identical visible text. The text will also be added to the `title` attribute of the button.
   */
  copyButtonAriaLabel?: string;

  /**
   * The message shown when the text is copied successfully.
   */
  copySuccessText?: string;

  /**
   * The message shown when the text is not copied due to an error, see [https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext](https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext).
   */
  copyErrorText?: string;

  hideCopyButton?: boolean;

  hideFeedbackButtons?: boolean;

  thumbsDownText?: string;

  actions?: Action[];

  onFeedback?: (vote: Feedback) => void;
}
