// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Icon, SpaceBetween } from '~components';
import Avatar from '~components/avatar';
import turtle from './turtle.png';

export default function AvatarPermutations() {
  return (
    <>
      <h1>Simple Avatars</h1>
      <SpaceBetween direction="vertical" size="m">
        <Avatar role="ai" waiting={true} />
        <Avatar role="ai" waiting={false} />
        <Avatar role="human" waiting={true} />
        <Avatar role="human" waiting={false} />
        <Avatar role="ai" content={<Icon name="anchor-link" />} />
        <Avatar role="ai" content={<Icon name="gen-ai" />} />
        <Avatar
          role="human"
          content={<img width={25} height={25} src={turtle} style={{ borderRadius: '100%', marginTop: '4px' }} />}
        />
        <Avatar
          role="ai"
          content={
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-2 -2 24 24"
              width={28}
              height={28}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-60.000000, -4559.000000)" fill="#FFFFFF">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M6.70247571,4412.07175 L12.0994757,4404.08575 C12.3864757,4403.69975 13.0004757,4403.90275 13.0004757,4404.38375 L13.0004757,4415.43475 C13.0004757,4415.82075 12.5804757,4416.06175 12.2474757,4415.86675 L6.85047571,4412.80175 C6.59347571,4412.65075 6.52447571,4412.31075 6.70247571,4412.07175 L6.70247571,4412.07175 Z M21.1494757,4412.80175 L15.7534757,4415.86675 C15.4194757,4416.06175 15.0004757,4415.82075 15.0004757,4415.43475 L15.0004757,4404.38375 C15.0004757,4403.90275 15.6134757,4403.69975 15.9014757,4404.08575 L21.2984757,4412.07175 C21.4754757,4412.31075 21.4064757,4412.65075 21.1494757,4412.80175 L21.1494757,4412.80175 Z M15.0004757,4399.52575 L15.0004757,4399.52575 C14.5184757,4398.82475 13.4824757,4398.82475 13.0004757,4399.52575 L13.0004757,4399.52575 L4.24047571,4412.02975 C3.80847571,4412.60975 3.97647571,4413.43575 4.60047571,4413.80175 L13.0004757,4418.62575 L13.4234757,4418.85375 C13.7834757,4419.04775 14.2164757,4419.04775 14.5764757,4418.85375 L15.0004757,4418.62575 L23.4004757,4413.80175 C24.0234757,4413.43575 24.1914757,4412.60975 23.7604757,4412.02975 L15.0004757,4399.52575 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          }
        />
        <Avatar role="ai" />
        <Avatar role="human" name="Massimiliano" />
      </SpaceBetween>
    </>
  );
}
