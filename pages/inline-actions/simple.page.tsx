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
        <InlineActions
          actions={[
            { iconName: 'audio-full', text: 'Listen' },
            { iconName: 'add-plus', text: 'Add' },
            { iconName: 'angle-right', text: 'Down' },
          ]}
        />
        <InlineActions
          actions={[
            { iconName: 'audio-full', text: 'Listen' },
            { iconName: 'add-plus', text: 'Add' },
            { iconName: 'angle-right', text: 'Down' },
            { iconName: 'envelope', text: 'Email' },

            { iconName: 'share', text: 'Share' },
            { iconName: 'download', text: 'Download' },

            { iconName: 'edit', text: 'Edit' },
            { iconName: 'settings', text: 'Settings' },

            { iconName: 'star', text: 'Star' },
            { iconName: 'star-filled', text: 'Star filled' },
            { iconName: 'star-half', text: 'Star half' },
          ]}
        />
      </SpaceBetween>
    </Container>
  );
}
