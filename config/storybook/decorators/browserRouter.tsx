import {FC} from 'react'
import {BrowserRouter} from 'react-router-dom'

export const browserRouter = (StoryComponent: FC) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
