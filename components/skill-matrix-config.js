export const RadarData = {
    labels: ["Front End Dev", "Back End Dev", "SEO", "WordPress", "Video", "Audio", "3D", "Design"],
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
            data: [10, 5, 9, 9, 5, 10, 4, 8]
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
  