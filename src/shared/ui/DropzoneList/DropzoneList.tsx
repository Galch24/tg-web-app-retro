import { Typography, Box, CircularProgress } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useCallback, useEffect } from 'react'
import {
  useDropzone,
  DropzoneOptions,
  DropzoneInputProps,
  DropzoneRootProps,
} from 'react-dropzone'

import { ThumbType } from '@/shared/api'
import { ProgressOverlay } from '@/shared/ui/ProgressOverlay'

import { UploadFiles } from '@/shared/ui/UploadFiles'
import { Thumb } from './Thumb'
import { SUploadTitle, SDropContainer, SContainer, SThumbsContainer } from './styled'

export type Props = {
  label?: string
  thumbs?: ThumbType[]
  files?: File[]
  loading?: boolean
  backgroundLoading?: boolean
  onDelete?: (id: UniqueId) => void
  canDelete?: boolean
  canCreate?: boolean
  rootProps?: DropzoneRootProps
  inputProps?: DropzoneInputProps
  testId?: string
  isShowUploadFiles?: boolean
  gridTemplateColumns?: string
  onUploadFiles?: (files: File[]) => void
  title?: string
  maxFiles?: number
} & DropzoneOptions

export function DropzoneList({
  label,
  thumbs = [],
  loading = false,
  backgroundLoading = false,
  onDelete,
  canDelete = true,
  canCreate = true,
  rootProps,
  inputProps,
  testId,
  isShowUploadFiles,
  gridTemplateColumns,
  onUploadFiles,
  title = 'Drag and Drop file or',
  files,
  maxFiles,
  ...dropzoneProps
}: Props) {
  const extendedDropzoneProps = maxFiles === 1 ? { multiple: false } : {}
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ ...dropzoneProps, ...extendedDropzoneProps })

  const handleUploadFilesDelete = useCallback(
    (file: File) => {
      onUploadFiles?.(
        (files || []).filter((prevFile) => prevFile.name !== file.name),
      )
    },
    [files, onUploadFiles],
  )

  useEffect(() => {
    if (!isShowUploadFiles) return

    onUploadFiles?.([...(files || []), ...acceptedFiles])
    // eslint-disable-next-line
  }, [acceptedFiles])

  return (
    <SContainer data-testid={testId}>
      <Typography variant='h6' mb={1}>
        {label}
        {backgroundLoading && <CircularProgress size={16} sx={{ ml: 1 }} />}
      </Typography>
      {canCreate && (
        <ProgressOverlay loading={loading} progressProps={{ size: 24 }}>
          <SDropContainer
            {...getRootProps(rootProps)}
            sx={({ palette }) => ({
              borderColor: isDragAccept
                ? palette.common.white
                : isDragReject
                ? palette.error.light
                : palette.divider,
              background: isDragAccept
                ? 'rgba(255,255,255,0.1)'
                : isDragReject
                ? alpha(palette.error.light, 0.1)
                : 'transparent',
            })}
          >
            <input {...getInputProps(inputProps)} />
            <SUploadTitle sx={(theme) => ({ color: theme.palette.grey['600'] })}>
              <img src='images/dragn-drop-icon.png' alt='' className='icon-drop' />
              {title}
              <img src='images/dragn-drop-button.svg' alt='' className='bg-button' />
            </SUploadTitle>
          </SDropContainer>
        </ProgressOverlay>
      )}
      {thumbs.length > 0 && (
        <SThumbsContainer gridTemplateColumns={gridTemplateColumns}>
          {thumbs.map(({ id, src, preview, pending, type, filename }) => (
            <Thumb
              key={id}
              src={src}
              preview={preview}
              pending={pending}
              onDelete={() => onDelete?.(id)}
              canDelete={canDelete}
              type={type}
              filename={filename}
            />
          ))}
        </SThumbsContainer>
      )}
      {!thumbs.length && isShowUploadFiles && (
        <UploadFiles
          files={files || []}
          gridTemplateColumns={gridTemplateColumns}
          onDelete={handleUploadFilesDelete}
          canDelete={canDelete}
        />
      )}
    </SContainer>
  )
}
