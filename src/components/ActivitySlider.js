import React from "react";
import activities from "../data/activities";
import { graphql } from "gatsby";

export default function ActivitySlider() {
  return (
    <>
      <ul className="mt-10 flex w-full snap-x snap-mandatory gap-8 overflow-x-auto px-[5vw] pb-10 drop-shadow-xl">
        {activities.map((activity, index) => index < 6 &&(
          <h2 key={index}>
            <li className="snap-center ">
              <div className="mx-auto max-w-xs flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-gray-800">
                <div className="flex h-96 w-[300px] flex-col">
                  <img
                    className="h-[70%] w-full object-cover"
                    src={activity.photo}
                    alt="avatar"
                  />
                  <div className="flex h-[30%] flex-col items-center justify-center p-8 text-center">
                    <a
                      href="#"
                      className="block text-2xl font-bold text-gray-800 dark:text-white"
                    >
                      {activity.name}
                    </a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      {activity.destination}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </h2>
        ))}
      </ul>
    </>
  );
}
