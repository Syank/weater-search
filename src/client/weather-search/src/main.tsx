import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WeatherSearchApplication } from './WeatherSearchApplication'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WeatherSearchApplication />
    </StrictMode>
)
