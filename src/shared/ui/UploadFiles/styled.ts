import { Box, styled, IconButton } from '@mui/material'

export const FilesContainer = styled(Box)<{ gridTemplateColumns?: string }>(
  () => `
  display: block;
  margin-top: 16px;
`,
)
export const FileWrap = styled(Box)(
  ({ theme }) => `
  position: relative;
  display: flex;
  border-radius: 12px;
  border: none;
  background: transparent;
  padding: 10px;
  align-items: center;
  
  &:hover {
    background-color: rgba(255,255,255,.1);
  }
`,
)
export const ThumbActions = styled(Box)`
  position: relative;
  color: #fff;
  margin-right: 12px;
`
export const ThumbActionButton = (styled(IconButton)`
  background: rgba(255, 255, 255, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    .action-icon {
      opacity: 1;
    }
  }
  .action-icon {
    opacity: 0.7;
  }
` as unknown) as typeof IconButton

export const Img = styled('img')`
  max-width: 50px;
  max-height: 50px;
  height: auto;
`
