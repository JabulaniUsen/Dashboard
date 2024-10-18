import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import SumaryBox from "../components/SumaryBox"

const HomePage = () => {
  return (
    <div className="">
      <header>
        <h2 className="text-[22px]">Welcome <span>Jabulani!</span> Here's your summary</h2>
      </header>
      <div className="flex items-center gap-3 my-5">
        <SumaryBox
          title="Total Events"
          value="100,000"
          percentageChange="+5.0"
          icon={ArrowUpward}
          iconColor="text-green-600"
          percentageChangeColor="text-green-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={ArrowDownward}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={ArrowDownward}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />

        <SumaryBox
          title="Total Users"
          value="50,000"
          percentageChange="-3.2"
          icon={ArrowDownward}
          iconColor="text-red-600"
          percentageChangeColor="text-red-600"
        />
      </div>

      <div className="grid grid-cols-2"></div>
    </div>
  )
}

export default HomePage
