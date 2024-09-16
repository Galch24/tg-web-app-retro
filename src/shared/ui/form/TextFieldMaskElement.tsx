/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
  FieldValues,
} from 'react-hook-form'
import InputMask from 'react-input-mask'

export type TextFieldMaskElementProps<T extends FieldValues> = {
  name: Path<T>
  required?: boolean
  parseError?: (error: FieldError) => string
  validation?: ControllerProps['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  mask: string
}

export function TextFieldMaskElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  mask,
  ...rest
}: // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TextFieldMaskElementProps<TFieldValues, any, any>): JSX.Element {
  if (required && !validation.required) {
    validation.required = 'Это обязательное поле'
  }
  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error, invalid },
      }) => (
        <InputMask
          mask={mask}
          onChange={onChange}
          value={value}
          {...inputProps}
          {...rest}
        >
          {(maskProps: any) => (
            <TextField
              {...maskProps}
              name={name}
              required={required}
              error={invalid}
              inputProps={{ disabled: rest?.disabled }}
              helperText={
                error
                  ? typeof parseError === 'function'
                    ? parseError(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText
              }
            />
          )}
        </InputMask>
      )}
    />
  )
}
