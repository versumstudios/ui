import React, { FC, ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '../button';

import * as Styles from './styles';

export interface IDialog {
  title: string;
  description?: string;
  trigger?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  large?: boolean;
  onOpenChange?: (value: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Dialog: FC<IDialog> = ({
  title,
  description,
  trigger,
  children,
  open,
  large,
  onOpenChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange} allowPinchZoom>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}

      <DialogPrimitive.Overlay asChild>
        <Styles.Overlay>
          <DialogPrimitive.Content>
            <Styles.Content large={large}>
              <Styles.Header>
                {title && (
                  <DialogPrimitive.Title asChild>
                    <Styles.Title>{title}</Styles.Title>
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description asChild>
                    <Styles.Description>{description}</Styles.Description>
                  </DialogPrimitive.Description>
                )}
                <DialogPrimitive.Close asChild>
                  <Styles.Close>
                    <i>close</i>
                  </Styles.Close>
                </DialogPrimitive.Close>
              </Styles.Header>
              {children}
              <Styles.Buttons>
                {onConfirm && (
                  <Button full onClick={onConfirm}>
                    Confirm
                  </Button>
                )}

                {onCancel && (
                  <DialogPrimitive.Close asChild>
                    <Button full variant="secondary" onClick={onCancel}>
                      Cancel
                    </Button>
                  </DialogPrimitive.Close>
                )}
              </Styles.Buttons>
            </Styles.Content>
          </DialogPrimitive.Content>
        </Styles.Overlay>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Root>
  );
};
