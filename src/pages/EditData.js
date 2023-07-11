import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import axios from "axios";

function EditData() {
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const getDataAPIbyID = async () => {
    await axios
      .get(`http://128.199.80.110:3000/get_item_by_id?_id=${id}`)
      .then((res) => {
        const dataById = res.data.data;
        setName(dataById.name);
        setPrice(dataById.price);
        setQuantity(dataById.quantity);
        setDescription(dataById.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataAPIbyID();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const upDateData = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    axios
      .post("http://128.199.80.110:3000/update_item", data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Information updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        nav("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Failed to update information",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex justify-between">
        <div></div>
        <Link to="/">
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-10 mb-2 mt-2">
            Back
          </button>
        </Link>
      </div>
      <div className="text-center mb-6">
        <h1
          className="text-xl "
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
          }}
        >
          Detailed Information
        </h1>
      </div>
      <div className="flex flex-grow justify-center">
        <div>
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 mt-4"
          >
            Price
          </label>
          <input
            value={price}
            onChange={handlePriceChange}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 mt-4"
          >
            Quantity
          </label>
          <input
            value={quantity}
            onChange={handleQuantityChange}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 mt-4"
          >
            Description
          </label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex justify-center mt-2">
            <button
              onClick={upDateData}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
            >
              Update Data
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EditData;
