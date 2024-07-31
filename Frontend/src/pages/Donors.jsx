import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods.js";

const Donors = () => {
  const [donors, setDonors] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodgroup", headerName: "BloodType", width: 130 },
    { field: "diseases", headerName: "Disease", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/donor/${params.row._id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getDonors = async () => {
      try {
        const res = await publicRequest.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDonors();
  }, []);

  const handleDelete = async(id) =>{
    try {
      await publicRequest.delete(`/donors/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px] font-semibold">All Donors</h1>
        <Link to="/admin/newdonor">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold">
            {" "}
            New Donor
          </button>
        </Link>
      </div>
      <div className="m-[30px]">
        <DataGrid
          rows={donors}
          getRowId={(row) => row._id}
          checkboxSelection
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Donors;
