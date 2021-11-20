import { Radar } from 'react-chartjs-2'
import { RadarData, RadarOptions } from './skill-matrix-config'

const RadarChart = () => (

    <Radar data={RadarData} options={RadarOptions} />

)
  
export default RadarChart