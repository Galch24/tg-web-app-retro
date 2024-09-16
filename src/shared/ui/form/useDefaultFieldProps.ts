import {
  AutocompleteElementProps,
  CheckboxElementProps,
  FieldValues,
  SelectElementProps,
  TextFieldElementProps,
  SwitchElementProps,
} from 'react-hook-form-mui'

export const useDefaultFieldProps = <T extends FieldValues>(
  disabled?: boolean,
) => {
  const textFieldProps: Partial<TextFieldElementProps> = {
    disabled,
    fullWidth: true,
  }
  const datePickerProps = {
    disabled,
    TextFieldProps: {
      fullWidth: true,
    },
  }
  const checkboxProps: Partial<CheckboxElementProps<T>> = {
    disabled,
  }
  const switchProps: Partial<SwitchElementProps<T>> = {
    disabled,
  }
  const autocompleteFieldProps: Partial<
    AutocompleteElementProps<T, unknown, boolean, boolean>
  > = {
    autocompleteProps: {
      fullWidth: true,
      disabled,
    },
  }
  const selectFieldProps: Partial<SelectElementProps<T>> = {
    disabled,
    fullWidth: true,
  }
  const textFieldMaskProps = {
    disabled,
    inputProps: {
      fullWidth: true,
    },
  }

  return {
    textFieldProps,
    datePickerProps,
    checkboxProps,
    autocompleteFieldProps,
    selectFieldProps,
    textFieldMaskProps,
    switchProps,
  }
}
