import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuMoveLeft } from "react-icons/lu";



const SaveAddress = () => {

  const [address, setAddress] = useState(() => {
      // page reload hone par localStorage se addresses le aao
      const saved = localStorage.getItem("address");
      return saved ? JSON.parse(saved) : [];
    });

    const [selected, setSelected] = useState(() => {
      const saved = localStorage.getItem("selected");
      return saved ? JSON.parse(saved) : null;
    });
    const [mode, setMode] = useState("default");
    const [form, setForm] = useState({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

    // 🔹 Save addresses in localStorage whenever updated
    useEffect(() => {
      localStorage.setItem("address", JSON.stringify(address));
    }, [address]);
  
    // 🔹 Save selected address in localStorage
    useEffect(() => {
      localStorage.setItem("selected", JSON.stringify(selected));
    }, [selected]);

    const handleAddress = (e) => {
      e.preventDefault();
      const newAdr = { ...form, id: Date.now() };
      setAddress([...address, newAdr]);
      setSelected(newAdr.id);
      setForm({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });
      setMode("select");
    };

    const navigate = useNavigate();

  return (
    <>

    {/* My Address AND Navigate Button */}
    <div className='bg-red-500'>
    <div className='flex items-center gap-4 p-3 '>
            <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
            <div className='text-lg text-white font-semibold'>My Addresses</div>
        </div>

    </div>

    {/* Address  */}
     <div className="max-w-[100%] p-4 ">
      {mode === "default" && (
        <div className="p-1 shadow-md flex justify-between items-center" onClick={() => setMode("select")}>

          <div>
            <h3 className="font-bold">
              {address.find((a) => a.id === selected)?.name}
            </h3>
            <p className="text-sm tracking-wider">
              {address.find((a) => a.id === selected)?.address},
              {address.find((a) => a.id === selected)?.city},
              {address.find((a) => a.id === selected)?.pincode},
              {address.find((a) => a.id === selected)?.state},{""}
            </p>
            <p className="text-sm">
              {address.find((a) => a.id === selected)?.phone}
            </p>
          </div>

          <button onClick={() => setMode("select")} className="text-blue-600 text-[14px] font-me hover:underline ">
            Change
          </button>
        </div>
      )}

      {mode === "select" && (
        <div className="border p-4 rounded shadow-m">
          <h3 className="text-lg font-bold mb-3">Select Delivery Address</h3>
          <div className="border-b pb-4 space-y-3">
            {address.map((addr) => (
              <label
                key={addr.id}
                className="flex items-start gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  checked={selected === addr.id}
                  onChange={() => setSelected(addr.id)}
                />
                <div>
                  {" "}
                  <p className="font-semibold">{addr.name}</p>
                  <p className="text-sm">
                    {addr.address}, {addr.city} - {addr.pincode}
                  </p>
                  <p className="text-sm">{addr.state}</p>
                  <p className="text-sm">Phone: {addr.phone}</p>
                </div>
              </label>
            ))}
          </div>
          <button
            onClick={() => setMode("form")}
            className="mt-4 px-4 py-2 border rounded text-blue-600"
          >
            + Add New Delivery Address
          </button>
        </div>
      )}

      {mode === "form" && (

        <form onSubmit={handleAddress} className="bg-white p-4 rounded shadow-sm space-y-3">

          <h3 className="text-lg font-bold mb-3">Add New Address</h3>

          <input
            required
            placeholder="Full Name"
            className="border p-2 w-full rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Phone Number"
            className="border p-2 w-full rounded"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            required
            placeholder="Pincode"
            className="border p-2 w-full rounded"
            value={form.pincode}
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
          />
          <input
            required
            placeholder="Address"
            className="border p-2 w-full rounded"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <input
            required
            placeholder="City"
            className="border p-2 w-full rounded"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <input
            required
            placeholder="State"
            className="border p-2 w-full rounded"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          />

          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setMode("select")}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

    </div>
    </>
  )
}

export default SaveAddress