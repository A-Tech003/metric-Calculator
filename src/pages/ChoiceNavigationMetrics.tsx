import React from 'react'
import NavBar from '../component/NavBar'
import MetricCalculator from '../component/DivisionMetrics'
import MetricCalculator2 from '../component/DivisionMetrics2'

const ChoiceNavigationMetrics = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <NavBar/>

        <h1 style={{textAlign: 'center', marginTop: '60px', marginBottom: '60px'}}>CHOICE NAVIGATION METRICS</h1>

        {/* Metric 1 */}
        <MetricCalculator metricName="1" labelName1="Na: " labelName2="Np: " labelName3="Ca= " />

        {/* Metric 2 */}
        <MetricCalculator metricName="2" labelName1="No Of Returned Products: " labelName2="No Of Delivered Products: " labelName3="RTR= " />

        {/* Metric 3 */}
        <MetricCalculator2 metricName="3" labelName1="NOLC: " labelName2="NOC: " labelName3="NONC: " labelName4="CR= " />

        {/* Metric 4 */}
        <MetricCalculator metricName="4" labelName1="Repurchase Through Existing Customers: " labelName2="Number Of Deliveries: " labelName3="RR= " />

        {/* Metric 5 */}
        <MetricCalculator metricName="5" labelName1="No Of Complaints: " labelName2="No Of Deliveries: " labelName3="COR= " />

        {/* Metric 6 */}
        <MetricCalculator metricName="6" labelName1="No Of Order Canceled By Seller: " labelName2="No Of Placed Orders: " labelName3="SOCR= " />

        {/* Metric 7 */}
        <MetricCalculator metricName="7" labelName1="No Of Order Changed By Seller: " labelName2="No Of Placed Orders: " labelName3="SOCRAP= " />

        {/* Metric 8 */}
        <MetricCalculator metricName="8" labelName1="No Of Order Canceled By Seller: " labelName2="No Of Placed Orders: " labelName3="COCR= " />

        {/* Metric 9 */}
        <MetricCalculator metricName="9" labelName1="No Of Order Changed By Seller: " labelName2="No Of Placed Orders: " labelName3="COCRAP= " />

        {/* Metric 10 */}
        <MetricCalculator metricName="10" labelName1="No Of Sold Configuration: " labelName2="No Of Started Configuration: " labelName3="CSR= " />
      </div>
  )
}

export default ChoiceNavigationMetrics