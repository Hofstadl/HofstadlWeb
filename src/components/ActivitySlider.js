import React from "react";
import activities from "../data/activities";
import { graphql } from "gatsby";

export default function ActivitySlider() {
  return (
    <>
      <ul className="mt-10 flex w-full snap-x gap-8 overflow-x-auto px-[5vw] pb-10 drop-shadow-xl">
        {activities.map((activity, index) => (
          <h2 key={index}>
            <li className="snap-center">
              <div className="relative max-w-[95vw] flex-shrink-0 overflow-hidden rounded-3xl">
                {/* <div className={`bg-[url('${activity.photo}')]`}/> */}
                <img
                  src={activity.photo}
                  alt="bild"
                  className="absolute inset-0 h-full w-full object-cover object-bottom"
                />
                <div className="relative flex h-96 w-[300px] flex-col items-start justify-end">
                  <div className="flex h-16 w-full flex-col justify-center space-y-1 bg-gradient-to-r from-white to-white p-2 tracking-tight">
                    <h2 className="flex justify-center rounded-lg px-4 text-lg font-bold italic leading-4 text-slate-900">
                      {activity.name}
                    </h2>
                    <h2 className="flex  justify-center rounded-lg px-4 text-center text-sm font-light leading-4 text-slate-600">
                      {activity.destination}
                    </h2>
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
