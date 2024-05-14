// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import InternalPopover from '../popover/internal';
import styles from './styles.css.js';
import React from 'react';
import { AvatarProps } from './interfaces.js';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component/index.js';

type InternalAvatarProps = AvatarProps & InternalBaseComponentProps;

export function InternalAvatar({ name, content, role, waiting }: InternalAvatarProps) {
  const _name = name && name.length > 0 ? name : role === 'ai' ? 'AI' : 'Human';
  return (
    <div className={role === 'ai' ? styles.avatar_ai : styles.avatar_human}>
      {waiting ? (
        <div className={styles.wave}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      ) : (
        <div
          style={{
            display: 'block',
            textAlign: 'center',
            position: 'relative',
            color: '#FFFFFF',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {content ? (
            <div
            //   style={{
            //     width: '0.25em',
            //     height: '0.25em',
            //     margin: 'auto',
            //   }}
            >
              {content}
            </div>
          ) : (
            <InternalPopover content={_name} dismissButton={false} position="top" size="small" triggerType="custom">
              <h3 style={{ cursor: 'pointer' }}>{_name[0].toUpperCase()}</h3>
            </InternalPopover>
          )}
        </div>
      )}
    </div>
  );
}
