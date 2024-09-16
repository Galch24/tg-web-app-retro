import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Stack, Tooltip, Typography } from '@mui/material'

import { ProgressOverlay } from '@/shared/ui/ProgressOverlay'
import { ThumbWrap, ThumbActions, ThumbActionButton, Img } from './styled'

type Props = {
  src: string
  preview: string
  onDelete: () => void
  canDelete?: boolean
  pending?: boolean
  filename?: string
  type?: string
}

export function Thumb({
  src,
  preview,
  onDelete,
  pending = false,
  canDelete = true,
  filename = 'file',
  type = '',
}: Props) {
  return (
    <ProgressOverlay loading={pending} data-testid='dropzone-thumb'>
      <ThumbWrap>
        <ThumbActions>
          <Stack direction='row' spacing={1}>
            <Tooltip title='Открыть'>
              <ThumbActionButton
                component='a'
                href={src}
                target='_blank'
                rel='noreferrer'
              >
                <OpenInNewIcon />
              </ThumbActionButton>
            </Tooltip>
            {canDelete && (
              <Tooltip title='Удалить'>
                <ThumbActionButton
                  onClick={onDelete}
                  aria-label='Удалить'
                  data-testid='dropzone-button-delete'
                >
                  <DeleteIcon />
                </ThumbActionButton>
              </Tooltip>
            )}
          </Stack>
        </ThumbActions>
        {type === 'image' && preview && <Img src={preview} />}
        {filename && (
          <Typography component='div' sx={{ ml: 1 }}>
            {filename}
          </Typography>
        )}
      </ThumbWrap>
    </ProgressOverlay>
  )
}
