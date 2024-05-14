// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { getExternalProps } from '../internal/utils/external-props';
import useBaseComponent from '../internal/hooks/use-base-component';
import React from 'react';
import { AvatarProps } from './interfaces';
import { InternalAvatar } from './internal';

export { AvatarProps };

export default function Avatar(props: AvatarProps) {
  const baseComponentProps = useBaseComponent('Avatar');
  const externalProps = getExternalProps(props);
  return <InternalAvatar {...baseComponentProps} {...externalProps} />;
}

applyDisplayName(Avatar, 'Avatar');
