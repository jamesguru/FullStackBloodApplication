import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Prospect = () => {
  const [prospect, setProspect] = useState({});
  const location = useLocation();
  const prospectId = location.pathname.split("/")[3];
  const navigate = useNavigate();

  useEffect(() => {
    const getProspect = async () => {
      try {
        const res = await publicRequest.get(`/prospects/find/${prospectId}`);
        setProspect(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProspect();
  }, []);

  const approveProspect = async () => {
    try {
      await publicRequest.post("/donors", {
        name: prospect.name,
        address: prospect.address,
        email: prospect.email,
        tel: prospect.tel,
        bloodgroup: prospect.bloodgroup,
        diseases: prospect.diases,
        date: prospect.date,
        weight: prospect.weight,
      });

      await publicRequest.delete(`/prospects/${prospectId}`);
      navigate("/admin/donors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold m-[30px]">Prospect</h2>

        <ul className="m-[30px]">
          <li className="mt-[14px]">
            <strong>Name :</strong> {prospect.name}
          </li>
          <li className="mt-[14px]">
            <strong>Address : </strong>
            {prospect.address}
          </li>
          <li className="mt-[14px]">
            <strong>Tel: </strong>
            {prospect.tel}
          </li>

          <li className="mt-[14px]">
            <strong>BloodType : </strong>
            {prospect.bloodgroup}
          </li>

          <li className="mt-[14px]">
            <strong> Diseases :</strong>
            {prospect.diseases}
          </li>

          <li className="mt-[14px]">
            <strong>Weight :</strong>
            {prospect.weight}kg
          </li>
        </ul>

        <span className="block m-[10px]">
          Do you want to approve James to a donor?
        </span>

        <button
          className="bg-red-500 text-white cursor-pointer p-[5px] w-[150px] m-[10px]"
          onClick={approveProspect}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default Prospect;
