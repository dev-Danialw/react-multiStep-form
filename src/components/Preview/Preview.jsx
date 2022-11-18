import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const client = new PocketBase("http://127.0.0.1:8090");

const Preview = () => {
  const [details, setDetails] = useState([]);

  // Read Data
  const getDetails = async () => {
    const data = await client.records.getList("data", 1, 20, {
      $autoCancel: false,
    });
    setDetails(data.items);
  };

  useEffect(() => {
    getDetails();
  }, [details]);

  return (
    <div>
      <h2 className="text-2xl text-gray-600 font-semibold">Preview</h2>

      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Profile</th>
              <th>Socials</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {details?.map((detail) => {
              return <Details key={detail.id} detail={detail} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preview;

// Delete Data
async function deleteitem(id) {
  await client.records.delete("data", id);
}

// Edit data
async function edititem(id) {
  let promptcar = prompt("update name", id.name);
  let promptprice = prompt("update price", id.email);
  await client.records.update("data", id, {
    name: promptcar,
    email: promptprice,
  });
}

function Details({ detail }) {
  const { id, name, email, fb, insta } = detail;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            {/* <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div> */}
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {fb}
        <br />
        <span className="badge badge-ghost badge-sm">{insta}</span>
      </td>

      <th>
        <button className="btn btn-ghost btn-xs" onClick={() => edititem(id)}>
          Edit
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs" onClick={() => deleteitem(id)}>
          Delete
        </button>
      </th>
    </tr>
  );
}
