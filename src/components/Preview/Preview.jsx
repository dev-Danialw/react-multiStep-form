import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Animator from "../Animator";

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
    <Animator>
      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Socials</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          {details?.map((detail) => {
            return <Details key={detail.id} detail={detail} />;
          })}
        </table>
      </div>
    </Animator>
  );
};

export default Preview;

// Delete Data
async function deleteitem(id) {
  await client.records.delete("data", id);
}

// Edit data
async function edititem(id) {
  let name = prompt("Update Name:", id.name);
  let email = prompt("Update Email:", id.email);
  let fb = prompt("Update Facebook:", id.fb);
  let insta = prompt("Update Instagram:", id.insta);

  await client.records.update("data", id, {
    name,
    email,
    fb,
    insta,
  });
}

function Details({ detail }) {
  const { id, name, email, fb, insta } = detail;

  return (
    <tbody>
      <tr>
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
          <span className="text-sm opacity-50">{insta}</span>
        </td>

        <th>
          <button className="btn btn-ghost btn-xs" onClick={() => edititem(id)}>
            Edit
          </button>
        </th>
        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => deleteitem(id)}
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
}
