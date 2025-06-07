import React from "react";

export default function Copywrite() {
  return (
    <React.Fragment>
      <p className="text-center text-sm text-gray-500 mt-8">
        Copyright © {new Date().getFullYear()}. Logoipsum Shd. Bhd. All rights
        reserved.
      </p>
    </React.Fragment>
  );
}
