import { z, ZodParsedType } from 'zod'

const errorMap: z.ZodErrorMap = (issue, _ctx) => {
  let message: string
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.received === z.ZodParsedType.undefined) {
        message = 'Обязательное поле'
      } else {
        message = `Ожидается ${translateZodParsedType(
          issue.expected,
        )}, получено ${translateZodParsedType(issue.received)}`
      }
      break
    case z.ZodIssueCode.invalid_union:
      message = `Некорректный ввод`
      break
    case z.ZodIssueCode.invalid_date:
      message = `Некорректная дата`
      break
    case z.ZodIssueCode.too_small:
      if (issue.type === 'array')
        message = `Список должен содержать ${
          issue.inclusive ? `как минимум` : `более`
        } ${issue.minimum} элемента(ов)`
      else if (issue.type === 'string')
        message = `Значение должно содержать ${
          issue.inclusive ? `как минимум` : `более`
        } ${issue.minimum} символ(ов)`
      else if (issue.type === 'number')
        message = `Число должно быть больше ${
          issue.inclusive ? `или равно ` : ``
        }${issue.minimum}`
      else if (issue.type === 'date')
        message = `Дата должна быть больше, чем ${
          issue.inclusive ? `или равна ` : ``
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        }${new Date(issue.minimum)}`
      else message = 'Некорректный ввод'
      break
    case z.ZodIssueCode.custom:
      message = issue.message || 'Обязательное поле'
      break
    default: {
      const defaultResult = z.defaultErrorMap(issue, _ctx)
      message = defaultResult.message
    }
  }
  return { message }
}

z.setErrorMap(errorMap)

function translateZodParsedType(t: ZodParsedType) {
  switch (t) {
    case 'number':
      return 'число'
    case 'nan':
      return 'не число'
    default:
      return t
  }
}
