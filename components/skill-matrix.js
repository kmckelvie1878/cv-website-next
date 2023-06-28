import { Radar } from 'react-chartjs-2'

export const RadarData = {
    labels: ["React.JS", "TypeScript", "JavaScript", "HTML", "Next.JS", "CSS", "Vue.JS", "WordPress"],
    datasets: [
        {
            label: "Skill Level",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "#88ccca",
            pointBackgroundColor: "#88ccca",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#88ccca",
            color: "#888",
            data: [9, 8, 7, 10, 6, 10, 4, 10]
        }
    ]
}
export const RadarOptions = {
    scales: { 
        r: {
            grid: {
                circular: true,
                color: "#e1e1e1"
            },
            angleLines: {
                color: "#e1e1e1"
            },
            pointLabels: {
                color: "#888"
            },
            ticks: {
                display: false
            },
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}


const RadarChart = () => (

    <Radar data={RadarData} options={RadarOptions} />

)
  
export default RadarChart