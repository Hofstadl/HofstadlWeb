import React from "react";

export default function ErrorPage({ errorCode, error, errorDetails }) {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col">
      <div className="m-auto">
        <div className="text-center align-bottom text-9xl text-yellow-500">
          {errorCode}
        </div>
        <div className="text-center align-middle text-4xl">{error}</div>
        <div className="text-1xl text-center align-middle">{errorDetails}</div>
      </div>
    </div>
  );
}
