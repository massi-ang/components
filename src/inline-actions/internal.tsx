// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import SpaceBetween from '../space-between/internal';
import Button from '../button/internal';
import ButtonDropdown from '../button-dropdown/internal';
import styles from './styles.css.js';
import { Feedback, InternalInlineActionsProps } from './interfaces';
import CopyToClipboard from '../copy-to-clipboard/internal';
import { getBaseProps } from '../internal/base-component';

export default function InternalInlineActions({
  onFeedback,
  thumbsDownText,
  textToCopy,
  copySuccessText,
  copyErrorText,
  copyButtonAriaLabel,
  hideCopyButton,
  hideFeedbackButtons,
  actions,
  __internalRootRef = null,
  ...restProps
}: InternalInlineActionsProps) {
  const [thumb, setThumbs] = useState<Feedback | undefined>(undefined);
  const baseProps = getBaseProps(restProps);
  const disabled = false;
  const _actions = actions ?? [];
  return (
    <div ref={__internalRootRef} className={styles['inline-actions']} {...baseProps}>
      <SpaceBetween direction="horizontal" size="xxs">
        {!hideFeedbackButtons && (
          <>
            {thumb !== 'thumbs-down' && (
              <Button
                variant="icon"
                iconName={thumb === 'thumbs-up' ? 'thumbs-up-filled' : 'thumbs-up'}
                disabled={disabled}
                onClick={() => {
                  if (onFeedback) {
                    onFeedback('thumbs-up');
                  }
                  thumb !== 'thumbs-up' ? setThumbs('thumbs-up') : setThumbs(undefined);
                }}
              />
            )}
            {thumb !== 'thumbs-up' && (
              <div style={{ fontSize: '0.9em' }}>
                <Button
                  variant="icon"
                  disabled={disabled}
                  iconName={thumb === 'thumbs-down' ? 'thumbs-down-filled' : 'thumbs-down'}
                  onClick={() => {
                    if (onFeedback) {
                      onFeedback('thumbs-down');
                    }
                    thumb !== 'thumbs-down' ? setThumbs('thumbs-down') : setThumbs(undefined);
                  }}
                />
                {thumb === 'thumbs-down' ? thumbsDownText : null}
              </div>
            )}
          </>
        )}
        {!hideCopyButton && !hideFeedbackButtons && <div className={styles.divider} />}
        {!hideCopyButton ? (
          <CopyToClipboard
            variant="icon"
            copyErrorText={copyErrorText ?? ''}
            copySuccessText={copySuccessText ?? ''}
            copyButtonAriaLabel={copyButtonAriaLabel}
            textToCopy={textToCopy ?? ''}
          />
        ) : (
          <></>
        )}
        {_actions.slice(0, Math.min(_actions.length, 2)).map(a => {
          return (
            <Button
              key={a.iconName}
              variant="icon"
              disabled={disabled}
              iconName={a.iconName}
              iconAlt={a.tooltip}
              iconSvg={a.iconSvg}
              ariaLabel={a.tooltip}
              onClick={a.onClick}
            />
          );
        })}
        {_actions.length > 2 && (
          <ButtonDropdown
            variant="icon"
            disabled={disabled}
            items={_actions
              .slice(2, _actions.length)
              .map(a => ({ iconSvg: a.iconSvg, iconName: a.iconName, text: a.text, id: a.text }))}
            mainAction={{ iconName: 'ellipsis', text: 'More' }}
            onItemClick={e => {
              const a = _actions.find(v => v.text === e.detail.id);
              if (a && a.onClick) {
                a.onClick(e);
              }
            }}
          />
        )}
      </SpaceBetween>
    </div>
  );
}
