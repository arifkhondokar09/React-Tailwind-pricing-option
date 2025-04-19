import React from 'react';
import { Line, LineChart, XAxis, YAxis} from 'recharts';
 const resultData = [
    {
        name: "Arif ",
        class: "10",
        age: 16,
        physics: 85,
        chemistry: 78,
        math: 92
    },
    {
        name: "Sumaiya",
        class: "9",
        age: 15,
        physics: 74,
        chemistry: 88,
        math: 81
    },
    {
        name: "Sojib ",
        class: "10",
        age: 17,
        physics: 90,
        chemistry: 85,
        math: 95
    },
    {
        name: "Walid",
        class: "8",
        age: 14,
        physics: 65,
        chemistry: 70,
        math: 60
    },
    {
        name: "Fatima",
        class: "11",
        age: 17,
        physics: 78,
        chemistry: 82,
        math: 85
    },
    {
        name: "Rahim",
        class: "10",
        age: 16,
        physics: 82,
        chemistry: 75,
        math: 88
    },
    {
        name: "Tasnim",
        class: "9",
        age: 15,
        physics: 70,
        chemistry: 68,
        math: 72
    },
    {
        name: "Karim",
        class: "12",
        age: 18,
        physics: 92,
        chemistry: 90,
        math: 94
    },
    {
        name: "Ayesha",
        class: "10",
        age: 16,
        physics: 80,
        chemistry: 85,
        math: 83
    },
    {
        name: "Imran",
        class: "11",
        age: 17,
        physics: 75,
        chemistry: 80,
        math: 78
    }
];

const ResultCharts = () => {
    return (
        <div>
            <LineChart height={300} width={800} data={resultData} className='bg-gray-200 border mb-32 mx-auto'>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math">  </Line>
                <Line dataKey={"chemistry"} stroke='purple'>  </Line>
                <Line dataKey={"physics"} stroke='orange'>  </Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;