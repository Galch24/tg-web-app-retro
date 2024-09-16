import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ThumbWrap = styled(Box)(
  ({ theme }) => `
  position: relative;
  display: flex;
  border-radius: 2px;
  border: 1px solid ${theme.palette.grey['300']};
  background: ${theme.palette.grey['100']};
  padding: 2px;
  align-items: center;
`,
)
export const ThumbActions = styled(Box)`
  position: relative;
  margin-right: 10px;
`
export const ThumbActionButton = (styled(IconButton)`
  background: rgba(255, 255, 255, 0.4);
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
` as unknown) as typeof IconButton

export const Img = styled('img')(
  ({ theme }) => `
  display: block;
  width: 100%;
  max-width: 50px;
  max-height: 50px;
  height: 100%;
  object-fit: contain;
  background: ${theme.palette.grey['100']}
`,
)
export const SUploadTitle = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  .icon-drop {
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }
  .bg-button {
    width: 172px;
    height: 56px;
  }
`
export const SDropContainer = styled(Box)(
  ({ theme }) => `
  padding: 0;
  border: 1px dashed ${theme.palette.common.white} !important;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s background ease;

  &:hover:not(:active) {
    background: rgba(255,255,255,.1);
  }
`,
)

export const SContainer = styled(Box)``

export const SThumbsContainer = styled(Box)<{ gridTemplateColumns?: string }>(
  () => `
  display: block;
  margin-top: 16px;
`,
)
