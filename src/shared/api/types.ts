import { AxiosError } from 'axios'

export type AxiosErrorType = AxiosError<{ errors: { detail: string }[] }>

export type FileType = {
  id: string
  name: string
  filepath: string
  preview: string
}

export type ThumbType = {
  // uuid: UniqueId
  // previewUrl: string
  // originalUrl: string
  id: string
  src: string
  preview: string
  pending?: boolean
  type?: string
  fullpath?: string // field name of Pimcore
  filename?: string
}
