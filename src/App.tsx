
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';


function App() {
  return (
    <ChakraProvider cssVarsRoot={undefined}>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
