import React from "react";
import activities from "../data/activities";

export default function ActivitySlider() {
  return (
    <>
      <ul className="mt-10 flex w-full snap-x gap-8 overflow-x-auto px-[5vw]">
        {activities.map((activity) => (
          <h2 key={activity.id}>
            <li className="snap-center">
              <div className="relative max-w-[95vw] flex-shrink-0 overflow-hidden rounded-3xl">
                <img
                  src={activity.photo}
                  alt="bild"
                  className="absolute inset-0 h-full w-full object-cover object-bottom"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/75"></div>
                <div className="relative flex h-96 w-[300px] flex-col items-start justify-between p-4">
                  <div></div>
                  <div className="h-44 w-[267px] space-y-1 rounded-lg bg-gradient-to-r from-white to-white p-2 tracking-tight">
                    <h2 className="flex justify-center rounded-lg px-4 text-lg font-bold italic leading-4 text-slate-900">
                      {activity.name}
                    </h2>
                    <h2 className="flex  justify-center rounded-lg px-4 text-center text-sm font-light leading-4 text-slate-600">
                      {activity.destination}
                    </h2>
                    <h2 className="flex justify-center rounded-lg px-4 text-center text-sm font-medium leading-4 text-slate-900">
                      {activity.description}
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