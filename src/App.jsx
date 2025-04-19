
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'


import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultCharts from './ResultCharts/ResultCharts'
import StudentBarChart from './components/StudentBarChart/StudentBarChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch("/pricingData.json").then(res => res.json());
const marksPromise = axios.get("MarksData.json")


function App() {


  return (
    <>
      <header>

        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl text-center"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultCharts></ResultCharts>
        <StudentBarChart></StudentBarChart>


        <Suspense fallback={<span className="loading loading-dots loading-xl text-center"></span>}>
           <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

      </main>
    </>
  )
}

export default App
