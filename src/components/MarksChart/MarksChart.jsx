import React, { use } from 'react';
import { Bar, BarChart, Cell, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksData = use(marksPromise).data;
 

    const marksChartData = marksData.map(studentData => {
        const student = {
            ID: studentData.student_id,
            name: studentData.name,
            class: studentData.class,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math,


        }
        // const avg= (studentData.marks.physics + studentData.marks.chemistry + studentData.marks.math)/3 ;
        const avg= (student.physics + student.chemistry + student.math)/3 ;

        student.avg =avg
        return student
    })



    return (
        <div>
           <BarChart width={500} height={500} data={marksChartData}> 
           <XAxis dataKey="name"> </XAxis>
           <YAxis></YAxis>
           <Bar dataKey="physics" fill= "gray"></Bar>
           <Bar dataKey="chemistry" fill="green"></Bar>
           <Bar dataKey="math" fill='skyblue'></Bar>
           <Tooltip ></Tooltip>
           <Legend></Legend>
       
           </BarChart>
           
        </div>
    );
};

export default MarksChart;