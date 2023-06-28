import { Bar } from 'react-chartjs-2'

export const BarData = {
    labels: [
        "HTML5",
        "CSS3",
        "SASS / SCSS",
        "React.JS",
        "JavaScript (ES6)",
        "TypeScript",
        "Next.JS",
        "Firebase",
        "MongoDB",
        "GraphQL",
        "Node.JS",
        "AWS"
    ],
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
            categoryPercentage: 0.5,
            barPercentage: 1.0,
            data: [10, 10, 9, 8, 8, 8, 6, 6, 5, 3, 2, 2, 2],
        }
    ]
}

export const BarOptions = {
    indexAxis: 'y',
    elements: {
        bar: {
          borderWidth: 3,
          borderRadius: 10
        }
    },
    responsive: true,
    layout: {
        padding: 6
    },
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            display: false
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                autoSkip: false,
                font: {
                    size: 14
                },
                color: '#999'
            }
        }
    }
}

const BarChart = () => (

    <Bar data={BarData} options={BarOptions} height={400} />

)
  
export default BarChart