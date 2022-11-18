import React from "react";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import Animator from "../Animator";

const Preview = () => {
  const { documents, error } = useCollection("demo");
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

function Details({ detail }) {
  const { id, name, email, facebook, instagram } = detail;
  const { deleteDocument } = useFirestore("demo");

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
            onClick={() => console.log(deleteDocument(id))}
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
}
