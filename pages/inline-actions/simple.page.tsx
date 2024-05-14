// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Container, SpaceBetween } from '~components';
import InlineActions from '~components/inline-actions';

export default function SimpleInlineActions() {
  return (
    <Container>
      <SpaceBetween direction="vertical" size="m">
        <InlineActions />
        <InlineActions thumbsDownText="Not useful" />
        <InlineActions hideCopyButton={true} />
        <InlineActions hideFeedbackButtons={true} />
      </SpaceBetween>
    </Container>
  );
}
