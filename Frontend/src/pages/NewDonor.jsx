import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const NewDonor = () => {
  const [inputs, setInputs] = useState({});
  const user = useSelector((state) => state.user);

  

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDonors = async () => {
    try {
      await publicRequest.post("/donors", inputs, {
        headers: {token: `Bearer ${user.currentUser.accessToken}`}
      });
      toast.success("Donor has been successfully added to the database");
      setInputs({});
    } catch (error) {
      toast.warning(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <h2 className="font-semibold">New Donor</h2>

        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="James Doe"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="123 DownTown, Sydney"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="">Tel</label>
          <input
            type="Number"
            placeholder="(026) 272 839"
            name="tel"
            value={inputs.tel || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
            Blood Group
          </label>
          <select
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="janedoe@example.com"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
        </div>
      </div>

      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <div className="flex flex-col">
          <label htmlFor="">Weight</label>
          <input
            type="number"
            placeholder="50kg"
            name="weight"
            value={inputs.weight || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder="2024/07/29"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="">Do you have any diseases?</label>
          <textarea
            type="Number"
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
            placeholder="N/A"
          />

          <button
            className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]"
            onClick={handleDonors}
          >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
