import { SouthEast, NorthEast, } from "@mui/icons-material"
import SumaryBox from "../components/SumaryBox"
import { ChartComponent } from "../components/Chart"
import Carosal from "../components/Carosal"
import Table from "../components/Table"

const HomePage = () => {
  return (
    <div className="lg:py-2 py-16">
      <header>
      <h2 className="text-lg">Welcome!<span>👋</span> Here's your summary</h2>
      </header>
      <div className="flex items-center gap-3 my-5 flex-wrap">
        <SumaryBox
          title="Total Events"
          value="100,000"
          percentageChange="+5.0"
          icon={NorthEast}
          iconColor="text-green-600"
          percentageChangeColor="text-green-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={SouthEast}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={SouthEast}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={SouthEast}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />
      </div>

      <div className="">
        <p className="text-lg front-semibold mb-2">Event Registrations per month</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      
          <div className="chart rounded-md lg:w-auto w-full">
            <ChartComponent/>
          </div>
          <div className="carosal overflow-hidden">
            <Carosal/>
          </div>
        </div>
      </div>

      <div className=" mt-20">
      <p className="text-lg front-semibold mb-2">Event History</p>
        <Table/>
      </div>
    </div>
  )
}

export default HomePage
