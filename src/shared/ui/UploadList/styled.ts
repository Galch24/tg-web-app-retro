import { Box, styled, IconButton } from '@mui/material'

export const FilesContainer = styled(Box)<{ gridTemplateColumns?: string }>(
  ({ gridTemplateColumns }) => `
  display: grid;
  grid-template-columns: ${gridTemplateColumns || '1fr 1fr'};
  grid-gap: 8px;
  margin-top: 16px;
`,
)
export const FileWrap = styled(Box)(
  ({ theme }) => `
  position: relative;
  display: flex;
  border-radius: 2px;
  border: 1px solid ${theme.palette.grey['300']};
  background: ${theme.palette.grey['100']};
  aspect-ratio: 1 / 1;
  padding: 2px;
`,
)
export const ThumbActions = styled(Box)`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%);
`
export const ThumbActionButton = (styled(IconButton)`
  background: rgba(255, 255, 255, 0.4);
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
` as unknown) as typeof IconButton

export const Img = styled('img')`
  object-fit: contain;
  width: 100%;
`
