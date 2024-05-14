// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ReactElement } from 'react';
import { BaseComponentProps } from '../internal/base-component';

export interface AvatarProps extends BaseComponentProps {
  /**
   * Defines the name of the avatar that will be displayed in the popover.
   *
   * If no name is specified, the name is set based on the role:
   * - role: `ai` - `AI`
   * - role: `human` - `Human`
   *
   * The first letter of the name, capitalized, is showed as the avatar logo if content is not specified.
   */
  readonly name?: string;
  /**
   * Any ReactElement to be used as avatar logo, but typically will be an SVG or an image.
   */
  readonly content?: ReactElement;
  /**
   * The role to be assigned to the Avatar
   */
  readonly role: 'ai' | 'human';
  /**
   * If `true`, the avatar is in a loading state.
   */
  readonly waiting?: boolean;
}
