import CloseSharpIcon from '@mui/icons-material/CloseSharp'
import DoneSharpIcon from '@mui/icons-material/DoneSharp'
import { FormLabel, FormHelperText, Stack, Chip } from '@mui/material'
import { ReactElement } from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types/fields'

export type SwitchElementProps<T extends FieldValues> = {
  name: Path<T>
  control?: Control<T>
  label?: string
  checkedLabel?: string
  checkedIcon?: ReactElement
  uncheckedLabel?: string
  uncheckedIcon?: ReactElement
  disabled?: boolean
}

export function SwitchChipsElement<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  checkedLabel = 'Да',
  checkedIcon = <DoneSharpIcon />,
  uncheckedLabel = 'Нет',
  uncheckedIcon = <CloseSharpIcon />,
  disabled,
}: SwitchElementProps<TFieldValues>) {
  return (
    <Stack spacing={1} direction='row' alignItems='center'>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const isSet = typeof field.value === 'boolean'
          const checked = !!field.value
          const handleChange = (value: boolean) =>
            field.onChange({
              target: {
                value,
              },
            })
          return (
            <>
              <Stack spacing={1} direction='row'>
                <Chip
                  disabled={disabled}
                  label={checkedLabel}
                  icon={checkedIcon}
                  variant={isSet && checked ? 'filled' : 'outlined'}
                  color={isSet && checked ? 'success' : undefined}
                  onClick={() => handleChange(true)}
                  aria-label={checkedLabel}
                  aria-pressed={isSet && checked}
                  data-testid={`switch-${name}-${checkedLabel}-disabled=${disabled}`}
                />
                <Chip
                  disabled={disabled}
                  label={uncheckedLabel}
                  icon={uncheckedIcon}
                  variant={isSet && !checked ? 'filled' : 'outlined'}
                  color={isSet && !checked ? 'error' : undefined}
                  onClick={() => handleChange(false)}
                  aria-label={uncheckedLabel}
                  aria-pressed={isSet && !checked}
                  data-testid={`switch-${name}-${uncheckedLabel}-disabled=${disabled}`}
                />
              </Stack>
              {error && <FormHelperText error>{error.message}</FormHelperText>}
            </>
          )
        }}
      />
    </Stack>
  )
}
