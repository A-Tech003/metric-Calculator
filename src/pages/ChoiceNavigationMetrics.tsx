import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator, { MetricsResponse } from '../component/DivisionMetrics'
import MetricCalculator2 from '../component/DivisionMetrics2'
import ResultGraph from '../component/ResultGraph';  // Import the new ResultGraph component

interface TotalMetricsProps {
  key: String,
  value: String,
}

const ChoiceNavigationMetrics = () => {

  const [totalMetrics, setTotalMetrics] = useState<string[][]>([])
  const [metrics1, setMetrics1] = useState('')
  const [metrics2, setMetrics2] = useState('')
  const [metrics3, setMetrics3] = useState('')
  const [metrics4, setMetrics4] = useState('')
  const [metrics5, setMetrics5] = useState('')
  const [metrics6, setMetrics6] = useState('')
  const [metrics7, setMetrics7] = useState('')
  const [metrics8, setMetrics8] = useState('')
  const [metrics9, setMetrics9] = useState('')
  const [metrics10, setMetrics10] = useState('')

  const handleTotalMetrics = () => {
    const metrics = [metrics1, metrics2, metrics3, metrics4, metrics5, metrics6, metrics7, metrics8, metrics9, metrics10]
    setTotalMetrics(state => [...state, metrics])
  }
  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <NavBar />

        <h1 style={{ textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}>CHOICE NAVIGATION METRICS</h1>

        {/* Metric 1 */}
        <MetricCalculator metricName="1" labelName1="Na: " labelName2="Np: " labelName3="Ca= " onSubmit={(value) => setMetrics1(value)} />

        {/* Metric 2 */}
        <MetricCalculator metricName="2" labelName1="No Of Returned Products: " labelName2="No Of Delivered Products: " labelName3="RTR= " onSubmit={(value) => setMetrics2(value)} />

        {/* Metric 3 */}
        <MetricCalculator2 metricName="3" labelName1="NOLC: " labelName2="NOC: " labelName3="NONC: " labelName4="CR= " onSubmit={(value) => setMetrics3(value)} />

        {/* Metric 4 */}
        <MetricCalculator metricName="4" labelName1="Repurchase Through Existing Customers: " labelName2="Number Of Deliveries: " labelName3="RR= " onSubmit={(value) => setMetrics4(value)} />

        {/* Metric 5 */}
        <MetricCalculator metricName="5" labelName1="No Of Complaints: " labelName2="No Of Deliveries: " labelName3="COR= " onSubmit={(value) => setMetrics5(value)} />

        {/* Metric 6 */}
        <MetricCalculator metricName="6" labelName1="No Of Order Canceled By Seller: " labelName2="No Of Placed Orders: " labelName3="SOCR= " onSubmit={(value) => setMetrics6(value)} />

        {/* Metric 7 */}
        <MetricCalculator metricName="7" labelName1="No Of Order Changed By Seller: " labelName2="No Of Placed Orders: " labelName3="SOCRAP= " onSubmit={(value) => setMetrics7(value)} />

        {/* Metric 8 */}
        <MetricCalculator metricName="8" labelName1="No Of Order Canceled By Seller: " labelName2="No Of Placed Orders: " labelName3="COCR= " onSubmit={(value) => setMetrics8(value)} />

        {/* Metric 9 */}
        <MetricCalculator metricName="9" labelName1="No Of Order Changed By Seller: " labelName2="No Of Placed Orders: " labelName3="COCRAP= " onSubmit={(value) => setMetrics9(value)} />

        {/* Metric 10 */}
        <MetricCalculator metricName="10" labelName1="No Of Sold Configuration: " labelName2="No Of Started Configuration: " labelName3="CSR= " onSubmit={(value) => setMetrics10(value)} />
      </div>
      <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleTotalMetrics}>Add To Table</button>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ca</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>RTR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>CR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>RR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>COR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>SOCR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>SOCRAP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>COCR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>COCRAP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>CSR</th>
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


      {/* Display the graph */}
      <ResultGraph data={totalMetrics} headings={['Ca', 'RTR', 'CR', 'RR', 'COR', 'SOCR', 'SOCRAP', 'COCR', 'COCRAP', 'CSR']} />
    </>
  )
}

export default ChoiceNavigationMetrics