import React from "react";

export default function ErrorPage({ errorCode, error, errorDetails }) {
  return (
    <div class="flex h-[calc(100vh-6rem)] flex-col">
      <div class="m-auto">
        <div class="text-center align-bottom text-9xl text-yellow-500">
          {errorCode}
        </div>
        <div class="text-center align-middle text-4xl">{error}</div>
        <div class="text-1xl text-center align-middle">{errorDetails}</div>
      </div>
    </div>
  );
}
