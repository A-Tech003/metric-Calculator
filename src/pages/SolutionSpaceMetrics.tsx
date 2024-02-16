import React from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator from '../component/DivisionMetrics'
import MetricCalculator2 from '../component/DivisionMetrics2'
import Subtraction from '../component/Subtraction'

const SolutionSpaceMetrics = () => {
  return (
    <div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <NavBar/>

            <h1 style={{textAlign: 'center', marginTop: '60px', marginBottom: '60px'}}>SOLUTION SPACE METRICS</h1>

            {/* Metric 1 */}
            <Subtraction metricName="1" labelName1="Total Sales Income: " labelName2="Total Manufacturing Cost: " labelName3="ASSP= " />

            {/* Metric 2 */}
            <Subtraction metricName="2" labelName1="Sales Income From Product Family: " labelName2="Manufacturing Cost For Product Family: " labelName3="PFP= " />

            {/* Metric 3 */}
            <MetricCalculator metricName="3" labelName1="No Of Percieved Varients: " labelName2="No Of All Possible Varients: " labelName3="UV= " />

            {/* Metric 4 */}
            <MetricCalculator metricName="4" labelName1="No Of RePurchase: " labelName2="Total No Of Purchase: " labelName3="RR= "/>

            {/* Metric 5 */}
            <MetricCalculator metricName="5" labelName1="No Of Aborted Configurations: " labelName2="No Of Initiated Configurations: " labelName3="CAR= " />

            {/* Metric 6 */}
            <MetricCalculator metricName="6" labelName1="NV: " labelName2="NM: " labelName3="MU= " />

            {/* Metric 7 */}
            <MetricCalculator metricName="7" labelName1="No Of Common Modules: " labelName2="Total No Of Different Modules: " labelName3="MCM= " />

        </div>
    </div>
  )
}

export default SolutionSpaceMetrics