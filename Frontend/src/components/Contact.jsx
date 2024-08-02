import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleProspect = async () => {
    try {
      await publicRequest.post("/donors", inputs);
      toast.success("You've been successfully added to the database");
      setInputs({});
    } catch (error) {
      toast.warning(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center my-[100px]">
      <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px]">
        <span className="text-[20px] my-[20px]">
          Do you want to donate blood? Fill in the information.
        </span>
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Name
        </label>
        <input
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="John Doe"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Telephone
        </label>
        <input
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="3582839303"
          name="tel"
          value={inputs.tel || ""}
          onChange={handleChange}
        />
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          className="w-[350px] p-[15px]"
          placeholder="johndoe@example.com"
          required
        />
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Address
        </label>
        <input
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="123 Town Street"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Weight
        </label>
        <input
          type="Number"
          className="w-[350px] p-[15px]"
          placeholder="50kg"
          name="weight"
          value={inputs.weight || ""}
          onChange={handleChange}
        />
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Blood Group
        </label>
        <select
          name="bloodgroup"
          value={inputs.bloodgroup || ""}
          onChange={handleChange}
          className="w-[350px] p-[15px]"
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
        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Age
        </label>
        <input type="Number" className="w-[350px] p-[15px]" placeholder="20" />

        <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
          Do you have any diseases?
        </label>
        <textarea
          type="text"
          className="w-[350px] p-[15px]"
          placeholder="N/A"
          name="diseases"
          value={inputs.diseases || ""}
          onChange={handleChange}
        />

        <button
          className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white"
          onClick={handleProspect}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
