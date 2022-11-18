import React, { useEffect, useState, useCallback } from "react";
import { useCollection } from "../../hooks/useCollection";
import Animator from "../Animator";

const Preview = () => {
  // const [details, setDetails] = useState([]);

  const { documents, error } = useCollection("demo");
  console.log(documents);
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

          {error && <p>{error}</p>}
          {documents?.map((detail) => {
            return <Details key={detail.id} detail={detail} />;
          })}
        </table>
      </div>
    </Animator>
  );
};

export default Preview;

// Delete Data
// async function deleteitem(id) {

// }

// Edit data
// async function edititem(id) {
//   let name = prompt("Update Name:", id.name);
//   let email = prompt("Update Email:", id.email);
//   let fb = prompt("Update Facebook:", id.fb);
//   let insta = prompt("Update Instagram:", id.insta);

// }

function Details({ detail }) {
  const { id, name, email, facebook, instagram } = detail;

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
          {facebook}
          <br />
          <span className="text-sm opacity-50">{instagram}</span>
        </td>

        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => console.log("edit")}
          >
            Edit
          </button>
        </th>
        <th>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => console.log("delete")}
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
}
