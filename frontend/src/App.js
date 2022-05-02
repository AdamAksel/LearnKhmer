import './App.css'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'
import { Navbar, Main } from './components'

const StyledApp = styled.div``

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Navbar />
      <Main />
    </StyledApp>
  )
}

export default App
