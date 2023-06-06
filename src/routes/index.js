import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Suspense } from 'react'
import NotFound from "../Components/NotFound"; 
import Header from "../Components/Header"
import Home from "../Pages/Home";
import VideoChamada from "../Pages/VideoChamada";

const RoutesComponent = () => {
  return (
      <Router>
        <Suspense fallback={<></>}>
           <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/video/chamada" element={<VideoChamada />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  )
}

export default RoutesComponent