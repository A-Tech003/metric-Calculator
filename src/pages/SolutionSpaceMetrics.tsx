import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator from '../component/DivisionMetrics'
// import MetricCalculator2 from '../component/DivisionMetrics2'
import Subtraction from '../component/Subtraction'

const SolutionSpaceMetrics = () => {
  const [totalMetrics, setTotalMetrics] = useState<string[][]>([])
  const [metrics1, setMetrics1] = useState('')
  const [metrics2, setMetrics2] = useState('')
  const [metrics3, setMetrics3] = useState('')
  const [metrics4, setMetrics4] = useState('')
  const [metrics5, setMetrics5] = useState('')
  const [metrics6, setMetrics6] = useState('')
  const [metrics7, setMetrics7] = useState('')

  const handleTotalMetrics = () => {
    const metrics = [metrics1, metrics2, metrics3, metrics4, metrics5, metrics6, metrics7]
    setTotalMetrics(state => [...state, metrics])
  }
  return (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <NavBar />

        <h1 style={{ textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}>SOLUTION SPACE METRICS</h1>

        {/* Metric 1 */}
        <Subtraction metricName="1" labelName1="Total Sales Income: " labelName2="Total Manufacturing Cost: " labelName3="ASSP= " onSubmit={(value) => setMetrics1(value)} />

        {/* Metric 2 */}
        <Subtraction metricName="2" labelName1="Sales Income From Product Family: " labelName2="Manufacturing Cost For Product Family: " labelName3="PFP= " onSubmit={(value) => setMetrics1(value)} />

        {/* Metric 3 */}
        <MetricCalculator metricName="3" labelName1="No Of Percieved Varients: " labelName2="No Of All Possible Varients: " labelName3="UV= " onSubmit={(value) => setMetrics3(value)} />

        {/* Metric 4 */}
        <MetricCalculator metricName="4" labelName1="No Of RePurchase: " labelName2="Total No Of Purchase: " labelName3="RR= " onSubmit={(value) => setMetrics4(value)} />

        {/* Metric 5 */}
        <MetricCalculator metricName="5" labelName1="No Of Aborted Configurations: " labelName2="No Of Initiated Configurations: " labelName3="CAR= " onSubmit={(value) => setMetrics5(value)} />

        {/* Metric 6 */}
        <MetricCalculator metricName="6" labelName1="NV: " labelName2="NM: " labelName3="MU= " onSubmit={(value) => setMetrics6(value)} />

        {/* Metric 7 */}
        <MetricCalculator metricName="7" labelName1="No Of Common Modules: " labelName2="Total No Of Different Modules: " labelName3="MCM= " onSubmit={(value) => setMetrics7(value)} />
      </div>
      <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleTotalMetrics}>Add To Table</button>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ASSP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>PFP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>UV</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>RR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>CAR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>MU</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>MCM</th>
          </tr>
        </thead>
        <tbody>
          {totalMetrics.map((record, index) => (
            <tr key={index}>
              {record.map((col, i) => (
                <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SolutionSpaceMetrics