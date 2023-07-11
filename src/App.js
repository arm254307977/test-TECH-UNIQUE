import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [dataAPI, setDataAPI] = useState([]);

  const getAPI = () => {
    axios
      .get("http://128.199.80.110:3000/get_item")
      .then((res) => {
        console.log(res.data.data);
        setDataAPI(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-grow p-6 flex flex-wrap justify-center gap-6 ">
        {dataAPI.map((items, index) => {
          return (
            <div
              key={index}
              className="block md:w-1/2 lg:w-1/3 xl:w-1/6 p-6 bg-white border border-gray-200 rounded-lg drop-shadow-md"
            >
              <h5
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                className="mb-4 text-xl font-bold tracking-tight text-gray-900 text-center"
              >
                ลำดับที่ {index + 1}
              </h5>

              <p className="font-normal text-gray-700 ">
                <strong>Name</strong> : {items.name}
              </p>
              <p className="font-normal text-gray-700 ">
                <strong>Price</strong> : {items.price}
              </p>
              <p className="font-normal text-gray-700 ">
                <strong>Quantity</strong> : {items.quantity}
              </p>
              <Link to={`edit-data/${items._id}`}>
                <button className="bg-red-300 text-gray-600 py-1 px-2  rounded-lg my-3 hover:text-white hover:bg-red-700 flex">
                  Learn more{" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/9793/9793040.png"
                    alt="icon"
                    width={20}
                    className="ml-2"
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
