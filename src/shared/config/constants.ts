import { SomeEnum } from "@/shared/config/enums";

export type Option = { id: string; label: string }
export type OptionEnum<T> = { id: T; label: string }

export const someEnumLabels: Record<SomeEnum, string> =
  {
    [SomeEnum.NAME_OF_ENUM]: 'Name of enum',
  }
export const someEnumOptions: Option[] = Object.keys(
  someEnumLabels,
).map((value) => {
  const label =
    someEnumLabels[value as keyof typeof someEnumLabels]
  return {
    label,
    id: value,
  }
})
