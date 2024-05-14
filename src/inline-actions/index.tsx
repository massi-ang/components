// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { getExternalProps } from '../internal/utils/external-props';
import useBaseComponent from '../internal/hooks/use-base-component';
// type definitions
import { InlineActionsProps } from './interfaces';
// internal instance
import InternalInlineActions from './internal';

// export type definitions for public use
export { InlineActionsProps };

export default function InlineActions(props: InlineActionsProps) {
  const baseComponentProps = useBaseComponent('InlineActions');
  const filteredProps = getExternalProps(props);
  return <InternalInlineActions {...filteredProps} {...baseComponentProps} />;
}

applyDisplayName(InlineActions, 'InlineActions');
