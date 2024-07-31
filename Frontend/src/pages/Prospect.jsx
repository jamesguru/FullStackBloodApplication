import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Prospect = () => {
  const [prospect, setProspect] = useState({});
  const location = useLocation();
  const prospectId = location.pathname.split("/")[3];

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

        <button className="bg-red-500 text-white cursor-pointer p-[5px] w-[150px] m-[10px]">
          Approve
        </button>
      </div>
    </div>
  );
};

export default Prospect;
