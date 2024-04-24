import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator, { MetricsResponse } from '../component/DivisionMetrics'
import MetricCalculator2 from '../component/DivisionMetrics2'
import ResultGraph from '../component/ResultGraph';  // Import the new ResultGraph component
import Confirmation from '../component/ConfirmNormal';
import Subtraction from '../component/Subtraction'

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
  const [allCol1, setallCol1] = useState<string[]>([]);
  const [allCol2, setallCol2] = useState<string[]>([]);
  const [allCol3, setallCol3] = useState<string[]>([]);
  const [allCol4, setallCol4] = useState<string[]>([]);
  const [allCol5, setallCol5] = useState<string[]>([]);
  const [allCol6, setallCol6] = useState<string[]>([]);
  const [allCol7, setallCol7] = useState<string[]>([]);
  const [allCol8, setallCol8] = useState<string[]>([]);
  const [allCol9, setallCol9] = useState<string[]>([]);
  const [allCol10, setallCol10] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTable] = useState<boolean>(false)
  const [efficiency1, setEfficiency1] = useState('')
  const [efficiency2, setEfficiency2] = useState('')
  const [efficiency3, setEfficiency3] = useState('')
  const [efficiency4, setEfficiency4] = useState('')
  const [efficiency5, setEfficiency5] = useState('')
  const [efficiency6, setEfficiency6] = useState('')
  const [efficiency7, setEfficiency7] = useState('')
  const [efficiency8, setEfficiency8] = useState('')
  const [efficiency9, setEfficiency9] = useState('')
  const [efficiency10, setEfficiency10] = useState('')
  const [efficiencyTotalValue, setEfficiencyTotalValue] = useState<string[]>([])
  const [showEfficiency, setShowEfficiency] = useState<boolean>(false)
  
  const metrics = [metrics1, metrics2, metrics3, metrics4, metrics5, metrics6, metrics7, metrics8, metrics9, metrics10]
  const efficiency = [efficiency1, efficiency2, efficiency3, efficiency4, efficiency5, efficiency6, efficiency7, efficiency8, efficiency9, efficiency10]
  const handleEfficiencyTotal = () => {
    setEfficiencyTotalValue([...efficiency])
    setShowEfficiency(true)
  }
  const handleTotalMetrics = () => {
    const newTotalMetrics: string[][] = [...totalMetrics, metrics];
    setTotalMetrics(newTotalMetrics);
    const newallCol1 = [...allCol1, metrics[0]]
       setallCol1(newallCol1)
       const newallCol2 = [...allCol2, metrics[1]]
       setallCol2(newallCol2)
       const newallCol3 = [...allCol3, metrics[2]]
      setallCol3(newallCol3)
      const newallCol4 = [...allCol4, metrics[3]]
      setallCol4(newallCol4)
      const newallCol5 = [...allCol5, metrics[4]]
      setallCol5(newallCol5)
      const newallCol6 = [...allCol6, metrics[5]]
      setallCol6(newallCol6)
      const newallCol7 = [...allCol7, metrics[6]]
      setallCol7(newallCol7)
      const newallCol8 = [...allCol8, metrics[7]]
      setallCol8(newallCol8)
      const newallCol9 = [...allCol9, metrics[8]]
      setallCol9(newallCol9)
      const newallCol10 = [...allCol10, metrics[9]]
      setallCol10(newallCol10)
  }

  const openConfirmation = () => {
    setIsOpen(true);
  };
  const handleConfirm = () => {
    setIsOpen(false)
    setShowTable(true)
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
      <table style={{ width: '50%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>S/N</th>
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
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
              {record.map((col, i) => (
                <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Confirmation message='are you sure you have create all the records?' handleConfirm={handleConfirm} isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* display the normal table */}
      <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={openConfirmation}>cal normal</button>
      <table style={{ width: '50%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>S/N</th>
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
        {(showTable)?<tbody>
          {totalMetrics.map((record, i) => {

                let col1 = (+allCol1[i] - Math.min(Number(...allCol1))) / (Math.max(Number(...allCol1)) - Math.min(Number(...allCol1)))
                if (Number.isNaN(col1) || col1 == Infinity || col1 == -Infinity) {
                   col1 = 0
                }
                let col2 = (+allCol2[i] - Math.min(Number(...allCol2))) / (Math.max(Number(...allCol2)) - Math.min(Number(...allCol2)))
                if (Number.isNaN(col2) || col2 == Infinity || col2 == -Infinity) {
                  col2 = 0
                }
                let col3 = (+allCol3[i] - Math.min(Number(...allCol3))) / (Math.max(Number(...allCol3)) - Math.min(Number(...allCol3)))
                if (Number.isNaN(col3) || col3 == Infinity || col3 == -Infinity) {
                  col3 = 0
                }
                let col4 = (+allCol4[i] - Math.min(Number(...allCol4))) / (Math.max(Number(...allCol4)) - Math.min(Number(...allCol4)))
                if (Number.isNaN(col4) || col4 == Infinity || col4 == -Infinity) {
                  col4 = 0
                }
                let col5 = (+allCol5[i] - Math.min(Number(...allCol5))) / (Math.max(Number(...allCol5)) - Math.min(Number(...allCol5)))
                if (Number.isNaN(col5) || col5 == Infinity || col5 == -Infinity) {
                  col5 = 0
                }
                let col6 = (+allCol6[i] - Math.min(Number(...allCol6))) / (Math.max(Number(...allCol6)) - Math.min(Number(...allCol6)))
                if (Number.isNaN(col6) || col6 == Infinity || col6 == -Infinity) {
                  col6 = 0
                }
                let col7 = (+allCol7[i] - Math.min(Number(...allCol7))) / (Math.max(Number(...allCol7)) - Math.min(Number(...allCol7)))
                if (Number.isNaN(col7) || col7 == Infinity || col7 == -Infinity) {
                  col7 = 0
                }
                let col8 = (+allCol8[i] - Math.min(Number(...allCol8))) / (Math.max(Number(...allCol8)) - Math.min(Number(...allCol8)))
                if (Number.isNaN(col8) || col8 == Infinity || col8 == -Infinity) {
                  col8 = 0
                }
                let col9 = (+allCol9[i] - Math.min(Number(...allCol9))) / (Math.max(Number(...allCol9)) - Math.min(Number(...allCol9)))
                if (Number.isNaN(col9) || col9 == Infinity || col9 == -Infinity) {
                  col9 = 0
                }
                let col10 = (+allCol10[i] - Math.min(Number(...allCol10))) / (Math.max(Number(...allCol10)) - Math.min(Number(...allCol10)))
                if (Number.isNaN(col10) || col10 == Infinity || col10 == -Infinity) {
                  col10 = 0
                }
            return (
            <tr key={i}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{i + 1}</td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col1}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col2}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col3}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col4}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col5}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col6}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col7}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col8}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col9}
              </td>
              <td key={i} style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {col10}
              </td>
            </tr>
          )})}
          <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>mean</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol1.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol1.length }
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol2.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol2.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol3.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol3.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol4.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol4.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol5.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol5.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol6.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol6.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol7.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol7.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol8.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol8.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol9.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol9.length}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {(allCol10.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / allCol10.length}
              </td>
          </tr>
        </tbody>:""}
      </table>
      <div>
        <h2>Efficiency score</h2>
        <div>
           <Subtraction metricName="1" labelName1="mean score" labelName2="Bench mark" labelName3="Ca= " onSubmit={(value) => setEfficiency1(value)} />
           <Subtraction metricName="2" labelName1="mean score" labelName2="Bench mark" labelName3="RTR= " onSubmit={(value) => setEfficiency2(value)} />
           <Subtraction metricName="3" labelName1="mean score" labelName2="Bench mark" labelName3="CR= " onSubmit={(value) => setEfficiency3(value)} />
           <Subtraction metricName="4" labelName1="mean score" labelName2="Bench mark" labelName3="RR= " onSubmit={(value) => setEfficiency4(value)} />
           <Subtraction metricName="5" labelName1="mean score" labelName2="Bench mark" labelName3="COR= " onSubmit={(value) => setEfficiency5(value)} />
           <Subtraction metricName="6" labelName1="mean score" labelName2="Bench mark" labelName3="SOCR= " onSubmit={(value) => setEfficiency6(value)} />
           <Subtraction metricName="7" labelName1="mean score" labelName2="Bench mark" labelName3="SOCRAP= " onSubmit={(value) => setEfficiency7(value)} />
           <Subtraction metricName="8" labelName1="mean score" labelName2="Bench mark" labelName3="COCR= " onSubmit={(value) => setEfficiency8(value)} />
           <Subtraction metricName="9" labelName1="mean score" labelName2="Bench mark" labelName3="COCRAP= " onSubmit={(value) => setEfficiency9(value)} />  
           <Subtraction metricName="10" labelName1="mean score" labelName2="Bench mark" labelName3="CSR= " onSubmit={(value) => setEfficiency10(value)} /> 
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            <p>final Efficiency</p>:{showEfficiency?<p>{efficiencyTotalValue.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>:""}
            <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: "10%"}} onClick={handleEfficiencyTotal}>Calculate efficiency</button>
        </div>
        
      </div>

      {/* Display the graph */}
      <ResultGraph data={totalMetrics} headings={['Ca', 'RTR', 'CR', 'RR', 'COR', 'SOCR', 'SOCRAP', 'COCR', 'COCRAP', 'CSR']} />
    </>
  )
}

export default ChoiceNavigationMetrics