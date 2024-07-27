import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa";

const Donors = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodType", headerName: "BloodType", width: 130 },
    { field: "disease", headerName: "Disease", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link to={`/donor/123`}>
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
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Anytown, USA",
      bloodType: "A+",
      disease: "Diabetes",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak St, Somecity, USA",
      bloodType: "B+",
      disease: "Hypertension",
    },
    {
      id: 3,
      name: "Tom Johnson",
      address: "789 Pine St, Othercity, USA",
      bloodType: "O-",
      disease: "Asthma",
    },
    {
      id: 4,
      name: "Emily Davis",
      address: "321 Maple St, Anothertown, USA",
      bloodType: "AB+",
      disease: "None",
    },
    {
      id: 5,
      name: "Michael Brown",
      address: "654 Elm St, Anycity, USA",
      bloodType: "A-",
      disease: "Heart Disease",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      address: "987 Cedar St, Thistown, USA",
      bloodType: "B-",
      disease: "Diabetes",
    },
    {
      id: 7,
      name: "David Lee",
      address: "741 Spruce St, Thatcity, USA",
      bloodType: "O+",
      disease: "None",
    },
    {
      id: 8,
      name: "Laura White",
      address: "852 Birch St, Someothertown, USA",
      bloodType: "AB-",
      disease: "Hypertension",
    },
    {
      id: 9,
      name: "Chris Harris",
      address: "963 Walnut St, Yourcity, USA",
      bloodType: "A+",
      disease: "Asthma",
    },
    {
      id: 10,
      name: "Patricia Clark",
      address: "159 Chestnut St, Mytown, USA",
      bloodType: "O-",
      disease: "Heart Disease",
    },
  ];



  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px] font-semibold">All Donors</h1>
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold"> New Donor</button>
      </div>
      <div className="m-[30px]">
          <DataGrid rows={rows} checkboxSelection columns={columns} />
      </div>
    </div>
  );
};

export default Donors;
