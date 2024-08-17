import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// components
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
      </Box>
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
