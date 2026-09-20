import Recommendation from "./components/Recommendation"
function App() {
  return (
    <div>
      <h1>University Finder HCMC</h1>

      <h2>Danh sách trường đại học</h2>

      <div>
        <h3>Đại học A</h3>
        <p>Học phí: 25 triệu/năm</p>
        <p>Khu vực: TP.HCM</p>
      </div>

      <div>
        <h3>Đại học B</h3>
        <p>Học phí: 30 triệu/năm</p>
        <p>Khu vực: TP.HCM</p>
      </div>
      {/* Component Người 2 */}
      <Recommendation />
    </div>
  )
}

export default App