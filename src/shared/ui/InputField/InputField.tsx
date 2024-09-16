'use client';

import React from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import s from './InputField.module.scss';

interface IErrorText {
  id?: string;
  message?: string;
}

export const ErrorText: React.FC<IErrorText> = ({ id = '', message = '' }) => {
  return (
    <span className={s.InputErrorText} id={id}>
      {message}
    </span>
  );
};

interface IInputProps {
  type?: string;
  placeholder?: string;
  id: string;
  register?: UseFormRegister<FieldValues>;
  message?: string;
  name: string;
  errors?: Record<string, { message?: string }>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  label?: string;
  labelAfter?: string;
  formatLabel?:string;
  format?: string;
}

export const InputField: React.FC<IInputProps> = ({
  type = 'text',
  placeholder = '',
  id = '',
  register,
  message,
  errors = {},
  onChange = null,
  value,
  children = null,
  disabled = false,
  className = '',
  ariaLabel = '',
  label = '',
  labelAfter= '',
  formatLabel,
  format,
}) => {
  const isCommentInput = id === 'comment';
  const hasError = errors && errors[id]?.message;

  const inputProps = {
    className: `${s.Input} ${hasError ? s.InputError : ''}`,
    id,
    type,
    ...register(id),
    message,
    onChange,
    value,
    placeholder,
    disabled,
    label,
    'aria-label': ariaLabel,
    autoComplete:
      id === 'password' || id === 'confirmPassword' ? 'new-password' : 'off',
  };

  return (
    <div className={`${s.InputBlock} ${className}`}>
      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={id}>
          {label}
        </label>
        {format && (
          <div className={s.LabelFormat}>
            {formatLabel && <span className={s.LabelFormatPrefix}>{formatLabel}{' '}</span>}
            <span>{format}</span>
          </div>
        )}
        {labelAfter && <div className={s.LabelAfter}>{labelAfter}</div>}
        {isCommentInput ? (
          <textarea {...inputProps} rows={6} />
        ) : (
          <input {...inputProps} />
        )}
      </div>
      {children}
      {hasError ? <ErrorText id={id} message={message} /> : null}
    </div>
  );
};
