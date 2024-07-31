const NewDonor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <h2 className="font-semibold">New Donor</h2>

        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="James Doe"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="123 DownTown, Sydney"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="">Tel</label>
          <input
            type="text"
            placeholder="(026) 272 839"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="" className="text=[18px] mt-[10px] font-semibold">
            Blood Group
          </label>
          <select className="border-[#555] border-2 border-solid p-[10px] w-[300px]">
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
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder="2024/07/29"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="">Tel</label>
          <input
            type="text"
            placeholder="(026) 272 839"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="">Do you have any diseases?</label>
          <textarea
            type="Number"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
            placeholder="N/A"
          />

          <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]">Create</button>
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
