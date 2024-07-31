import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods.js";

const Prospects = () => {
  const [prospects, setProspects] = useState([]);

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
            <Link to={`/admin/prospect/${params.row._id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Approve
              </button>
            </Link>
          </>
        );
      },
    },
    
  ];

  useEffect(() => {
    const getProspects = async () => {
      try {
        const res = await publicRequest.get("/prospects");
        setProspects(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProspects();
  }, []);
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
      <h1 className="m-[20px] text-[20px] font-semibold">All Prospects</h1>
      </div>
      <div className="m-[30px]">
          <DataGrid rows={prospects} getRowId={(row) => row._id} checkboxSelection columns={columns} />
      </div>
    </div>
  );
};

export default Prospects;
