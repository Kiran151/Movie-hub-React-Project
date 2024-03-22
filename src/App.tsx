import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import MovieGrid from './components/MovieGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import MovieTypeSelector from './components/MovieTypeSelector'

interface Genre {
  id: number;
  name: string;
}
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedType, setSelectedType] = useState('')

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={10}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={4}>
          <MovieTypeSelector onSelectType={(type) => setSelectedType(type)} selectedType={selectedType} />
        </HStack>
        <MovieGrid selecedGenre={selectedGenre} selectedType={selectedType} />
      </GridItem>


    </Grid>
  )
}

export default App
