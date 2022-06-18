import React, { FC, ReactNode } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { Button } from '../button';

import * as Styles from './styles';

export interface IAlertDialog {
  title?: string;
  description?: string;
  trigger?: ReactNode;
  children?: ReactNode;
  open?: boolean;
  large?: boolean;
  fill?: boolean;
  opaque?: boolean;
  onOpenChange?: (value: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  canClose?: boolean;
  confirmText?: string;
  cancelText?: string;
  warning?: boolean; // if warning confirm button will be red
}

export const AlertDialog: FC<IAlertDialog> = ({
  title,
  description,
  trigger,
  children,
  open,
  large,
  fill,
  opaque,
  onOpenChange,
  onConfirm,
  onCancel,
  canClose = true,
  confirmText,
  cancelText,
  warning = false,
}) => {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange} allowPinchZoom>
      {trigger && <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>}

      <AlertDialogPrimitive.Overlay asChild>
        <Styles.Overlay opaque={opaque}>
          <AlertDialogPrimitive.Content>
            <Styles.Content large={large} fill={fill}>
              {(title || description || canClose) && (
                <Styles.Header>
                  {title && (
                    <AlertDialogPrimitive.Title asChild>
                      <Styles.Title>{title}</Styles.Title>
                    </AlertDialogPrimitive.Title>
                  )}
                  {description && (
                    <AlertDialogPrimitive.Description asChild>
                      <Styles.Description>{description}</Styles.Description>
                    </AlertDialogPrimitive.Description>
                  )}

                  {canClose && (
                    <AlertDialogPrimitive.Cancel asChild>
                      <Styles.Close>
                        <Button variant="basic" onClick={onCancel}>
                          <i>close</i>
                        </Button>
                      </Styles.Close>
                    </AlertDialogPrimitive.Cancel>
                  )}
                </Styles.Header>
              )}
              {children}
              <Styles.Buttons>
                {onConfirm && (
                  <AlertDialogPrimitive.Action asChild>
                    <Button full {...(warning && { variant: 'warning' })} onClick={onConfirm}>
                      {confirmText || 'Confirm'}
                    </Button>
                  </AlertDialogPrimitive.Action>
                )}

                {onCancel && (
                  <AlertDialogPrimitive.Cancel asChild>
                    <Button full variant="secondary" onClick={onCancel}>
                      {cancelText || 'Cancel'}
                    </Button>
                  </AlertDialogPrimitive.Cancel>
                )}
              </Styles.Buttons>
            </Styles.Content>
          </AlertDialogPrimitive.Content>
        </Styles.Overlay>
      </AlertDialogPrimitive.Overlay>
    </AlertDialogPrimitive.Root>
  );
};
