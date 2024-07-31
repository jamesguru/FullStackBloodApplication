import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import { FaUser } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";

const Admin = () => {
  return (
    <div className="flex justify-between h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="bg-gray-50 m-[30px] h-[300px] w-[350px] shadow-xl">
            <div className="h-[200px] w-[200px]">
              <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
                // ...
              />
            </div>
            <h2 className="font-semibold text-[18px] m-[40px]">Prospects</h2>
          </div>

          <div className="bg-gray-50 m-[30px] h-[300px] w-[350px] shadow-xl">
            <div className="h-[200px] w-[200px] m-[30px] border-[20px] border-red-400 border-solid rounded-full">
              <div className="flex items-center justify-center m-[30px]">
                <h2 className="font-semibold text-[18px] m-[40px]">100</h2>
              </div>

              <h2 className="font-semibold text-[18px] m-[40px]">Donors</h2>
            </div>
          </div>
        </div>

        <div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 m-[20px] h-[700px] w-[300px] shadow-xl">
        <div className="flex items-center m-[20px] cursor-pointer">
          <FaUser />
          <span className="ml-[10px] font-semibold">Logout</span>
        </div>

        <div className="flex flex-col items-center justify-center m-[10px]">
          <h2 className="font-bold">Recent Donors</h2>
          <ul>
            <li>1.James Lisley</li>
            <li>2.Joel Lispler</li>
            <li>3.James Lisley</li>
          </ul>
        </div>

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Blood Group A" },
                { id: 1, value: 15, label: "Blood Group O+" },
                { id: 3, value: 20, label: "Blood Group AB" },
                { id: 4, value: 30, label: "Blood Group O-" },
              ],
              innerRadius: 50,
              outerRadius: 70,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 100,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Admin;
