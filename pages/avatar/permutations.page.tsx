// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Avatar, { AvatarProps } from '~components/avatar';
import createPermutations from '../utils/permutations';
import PermutationsView from '../utils/permutations-view';
import ScreenshotArea from '../utils/screenshot-area';

const permutations = createPermutations<AvatarProps>([
  {
    name: ['Human', 'AI', 'Massimiliano', undefined],
    waiting: [true, false],
    role: ['ai', 'human'],
  },
]);

export default function AvatarPermutations() {
  return (
    <>
      <h1>Avatar permutations</h1>
      <ScreenshotArea disableAnimations={true}>
        <PermutationsView permutations={permutations} render={permutation => <Avatar {...permutation} />} />
      </ScreenshotArea>
    </>
  );
}
