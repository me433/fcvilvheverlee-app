import './Statistics.css'

const Statistics = () => {
  return (
    <div id="stats-container">
        <iframe src="https://www.vvdwprojects.be/vilv/data/stats-external-global.php" width="250" height="85" title="History" style={{border: "none"}}>
        </iframe>
    </div>
  )
}

export default Statistics