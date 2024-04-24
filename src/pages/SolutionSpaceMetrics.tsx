import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator from '../component/DivisionMetrics'
import Subtraction from '../component/Subtraction'
import ResultGraph from '../component/ResultGraph';
import Confirmation from '../component/ConfirmNormal';


const SolutionSpaceMetrics = () => {
  const [totalMetrics, setTotalMetrics] = useState<string[][]>([]);
  const [allCol1, setallCol1] = useState<string[]>([]);
  const [allCol2, setallCol2] = useState<string[]>([]);
  const [allCol3, setallCol3] = useState<string[]>([]);
  const [allCol4, setallCol4] = useState<string[]>([]);
  const [allCol5, setallCol5] = useState<string[]>([]);
  const [allCol6, setallCol6] = useState<string[]>([]);
  const [allCol7, setallCol7] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTable] = useState<boolean>(false)
  const [metrics1, setMetrics1] = useState('')
  const [metrics2, setMetrics2] = useState('')
  const [metrics3, setMetrics3] = useState('')
  const [metrics4, setMetrics4] = useState('')
  const [metrics5, setMetrics5] = useState('')
  const [metrics6, setMetrics6] = useState('')
  const [metrics7, setMetrics7] = useState('')
  const [efficiency1, setEfficiency1] = useState('')
  const [efficiency2, setEfficiency2] = useState('')
  const [efficiency3, setEfficiency3] = useState('')
  const [efficiency4, setEfficiency4] = useState('')
  const [efficiency5, setEfficiency5] = useState('')
  const [efficiency6, setEfficiency6] = useState('')
  const [efficiency7, setEfficiency7] = useState('')
  const [efficiencyTotalValue, setEfficiencyTotalValue] = useState<string[]>([])
  const [showEfficiency, setShowEfficiency] = useState<boolean>(false)

  
  const metrics = [metrics1, metrics2, metrics3, metrics4, metrics5, metrics6, metrics7]
  const efficiency = [efficiency1, efficiency2, efficiency3, efficiency4, efficiency5, efficiency6, efficiency7]
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
  }
  const openConfirmation = () => {
    setIsOpen(true);
  };
  const handleConfirm = () => {
    setIsOpen(false)
    setShowTable(true)
  }
  
  
  
  return (
    <div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <NavBar />

        <h1 style={{ textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}>SOLUTION SPACE METRICS</h1>

        {/* Metric 1 */}
        <Subtraction metricName="1" labelName1="Total Sales Income: " labelName2="Total Manufacturing Cost: " labelName3="ASSP= " onSubmit={(value) => setMetrics1(value)} />

        {/* Metric 2 */}
        <Subtraction metricName="2" labelName1="Sales Income From Product Family: " labelName2="Manufacturing Cost For Product Family: " labelName3="PFP= " onSubmit={(value) => setMetrics2(value)} />

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
      <table style={{ width: '50%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>S/N</th>
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
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ASSP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>PFP</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>UV</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>RR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>CAR</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>MU</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>MCM</th>
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
          </tr>
        </tbody>:""}
      </table>
      <div>
        <h2>Efficiency score</h2>
        <div>
           <Subtraction metricName="1" labelName1="mean score" labelName2="Bench mark" labelName3="ASSP= " onSubmit={(value) => setEfficiency1(value)} />
           <Subtraction metricName="2" labelName1="mean score" labelName2="Bench mark" labelName3="PFP= " onSubmit={(value) => setEfficiency2(value)} />
           <Subtraction metricName="3" labelName1="mean score" labelName2="Bench mark" labelName3="UV= " onSubmit={(value) => setEfficiency3(value)} />
           <Subtraction metricName="4" labelName1="mean score" labelName2="Bench mark" labelName3="RR= " onSubmit={(value) => setEfficiency4(value)} />
           <Subtraction metricName="5" labelName1="mean score" labelName2="Bench mark" labelName3="CAR= " onSubmit={(value) => setEfficiency5(value)} />
           <Subtraction metricName="6" labelName1="mean score" labelName2="Bench mark" labelName3="MU= " onSubmit={(value) => setEfficiency6(value)} />
           <Subtraction metricName="7" labelName1="mean score" labelName2="Bench mark" labelName3="MCM= " onSubmit={(value) => setEfficiency7(value)} /> 
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            <p>final Efficiency</p>:{showEfficiency?<p>{efficiencyTotalValue.map(str => Number(str)).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>:""}
            <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: "10%"}} onClick={handleEfficiencyTotal}>Calculate efficiency</button>
        </div>
        
      </div>
       {/* Display the graph */}
       <ResultGraph data={totalMetrics} headings={['ASSP', 'PFP', 'UV', 'RR', 'CAR', 'MU', 'MCM']} />
    </div>
  )
}

export default SolutionSpaceMetrics  