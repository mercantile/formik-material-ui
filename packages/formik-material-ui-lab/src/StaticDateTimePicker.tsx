import MuiStaticDateTimePicker, {
  StaticDateTimePickerProps as MuiStaticDateTimePickerProps,
} from '@mui/lab/StaticDateTimePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FieldProps, getIn } from 'formik';
import * as React from 'react';
import { createErrorHandler } from './errorHandler';

export interface StaticDateTimePickerProps
  extends FieldProps,
    Omit<MuiStaticDateTimePickerProps, 'name' | 'value' | 'error'> {
  textField?: TextFieldProps;
}

export function fieldToStaticDateTimePicker({
  field: { onChange: _onChange, ...field },
  form: {
    isSubmitting,
    touched,
    errors,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  },
  textField: { helperText, onBlur, ...textField } = {},
  disabled,
  label,
  onChange,
  onError,
  renderInput,
  ...props
}: StaticDateTimePickerProps): MuiStaticDateTimePickerProps {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    renderInput:
      renderInput ??
      ((params) => (
        <TextField
          {...params}
          error={showError}
          helperText={showError ? fieldError : helperText}
          label={label}
          onBlur={
            onBlur ??
            function () {
              setFieldTouched(field.name, true, true);
            }
          }
          {...textField}
        />
      )),
    disabled: disabled ?? isSubmitting,
    onChange:
      onChange ??
      function (date) {
        // Do not switch this order, otherwise you might cause a race condition
        // See https://github.com/formium/formik/issues/2083#issuecomment-884831583
        setFieldTouched(field.name, true, false);
        setFieldValue(field.name, date, true);
      },
    onError:
      onError ?? createErrorHandler(fieldError, field.name, setFieldError),
    ...field,
    ...props,
  };
}

export function StaticDateTimePicker(props: StaticDateTimePickerProps) {
  return <MuiStaticDateTimePicker {...fieldToStaticDateTimePicker(props)} />;
}

StaticDateTimePicker.displayName = 'FormikMUIStaticDateTimePicker';
