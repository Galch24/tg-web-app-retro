import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Box, Stack, Tooltip, Typography } from '@mui/material'
import { useMemo } from 'react'

import {
  FilesContainer,
  FileWrap,
  Img,
  ThumbActionButton,
  ThumbActions,
} from './styled'
import { IconBin, IconView } from "@/components/icons";

type UploadFilesProps = {
  files: File[]
  gridTemplateColumns?: string
  onDelete: (file: File) => void
  canDelete?: boolean
}

export function UploadFiles({
  files,
  gridTemplateColumns,
  onDelete,
  canDelete = true,
}: UploadFilesProps) {
  const extra = useMemo(
    () => (
      <FilesContainer gridTemplateColumns={gridTemplateColumns}>
        {files.map((file) => (
          <FileWrap key={file.name} data-testid={`upload-file-${file.name}`}>
            <ThumbActions>
              <Stack direction='row' spacing={1}>
                <Tooltip title='Открыть'>
                  <ThumbActionButton
                    component='a'
                    href={URL.createObjectURL(file)}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconView className='action-icon' />
                  </ThumbActionButton>
                </Tooltip>
                {canDelete && (
                  <Tooltip title='Удалить'>
                    <ThumbActionButton
                      onClick={() => onDelete(file)}
                      aria-label='Удалить'
                      data-testid={`upload-file-button-delete-${file.name}`}
                    >
                      <IconBin className='action-icon' />
                    </ThumbActionButton>
                  </Tooltip>
                )}
              </Stack>
            </ThumbActions>
            {file.type.startsWith('image/') ? (
              <Img src={URL.createObjectURL(file)} alt={file.name} />
            ) : file.type === 'application/pdf' ? (
              <embed
                src={URL.createObjectURL(file)}
                width='100%'
                type='application/pdf'
              />
            ) : (
              <DescriptionIcon sx={{ width: '100%', height: '100%' }} />
            )}
            <Typography variant='h6' sx={{ ml: 1 }}>
              {file.name}
            </Typography>
          </FileWrap>
        ))}
      </FilesContainer>
    ),
    [canDelete, files, gridTemplateColumns, onDelete],
  )

  if (!files.length) return null

  return extra
}
