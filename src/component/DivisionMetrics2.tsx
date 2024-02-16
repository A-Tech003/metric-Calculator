// MetricCalculator.tsx
import React, { useState } from 'react';

export interface MetricsResponse {
    key: string,
    value: string,
}
interface MetricCalculatorProps {
    metricName: string;
    labelName1: string;
    labelName2: string;
    labelName3: string;
    labelName4: string;
    onSubmit: (value: string) => void;
}

const MetricCalculator: React.FC<MetricCalculatorProps> = ({ metricName, labelName1, labelName2, labelName3, labelName4, onSubmit }) => {
    const [input1, setInput1] = useState<number | string>('');
    const [input2, setInput2] = useState<number | string>('');
    const [input3, setInput3] = useState<number | string>('');
    const [result, setResult] = useState<number | string>('');

    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput1(event.target.value);
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput2(event.target.value);
    };

    const handleInput3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput3(event.target.value);
    };

    const handleCalculate = (e: any) => {
        e.preventDefault()
        const num1 = parseFloat(input1 as string);
        const num2 = parseFloat(input2 as string);
        const num3 = parseFloat(input3 as string);

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && num3 !== 0) {
            const calculatedResult = num1 / (num2 + num3 - num1);
            setResult(calculatedResult);
            onSubmit(calculatedResult.toString())
            setInput1('')
            setInput2('')
            setInput3('')
        } else {
            // setResult('Invalid input. Please enter valid numbers.');
        }
    };

    return (
        <div style={{borderBottom: '2px solid grey', marginBottom: '20px'}}>
            <div className={`metric-${metricName}`} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'flex',  marginBottom: '20px' }}>
                        <div style={{ marginRight: '10px' }}>
                            <label>{labelName1}</label>
                            <input
                                type="text"
                                value={input1}
                                required
                                onChange={handleInput1Change}
                                style={{ padding: '5px', marginLeft: '5px' }}
                            />
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <label>{labelName2}</label>
                            <input
                                type="text"
                                value={input2}
                                required
                                onChange={handleInput2Change}
                                style={{ padding: '5px', marginLeft: '5px' }}
                            />
                        </div>
                        <div style={{ marginRight: '10px' }}>
                            <label>{labelName3}</label>
                            <input
                                type="text"
                                value={input3}
                                required
                                onChange={handleInput3Change}
                                style={{ padding: '5px', marginLeft: '5px' }}
                            />
                        </div>

                        <div onClick={handleCalculate} style={{ cursor: 'pointer', background: 'grey', padding: '5px', color: '#fff', marginRight: '10px'}}>
                            Calculate
                        </div>
                    </div>

                    {/* result */}
                    <div style={{display: 'flex'}}>
                        <label style={{ fontSize: '30px', fontWeight: 'bold' }}>{labelName4}</label>
                        <div style={{ fontSize: '30px' }}>{result}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricCalculator;
