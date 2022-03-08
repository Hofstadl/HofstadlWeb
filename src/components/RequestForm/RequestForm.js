import React, { useState } from "react";
import RoomApartmentSwitch from "./RoomApartmentSwitch";
import PersonsSelector from "./PersonsSelector";
import DateRangePicker from "./DateRangePicker";

export default function RequestForm({data}) {
    const [room, setRoom] = useState(true);

  return (
    <>
      <RoomApartmentSwitch room={room} setRoom={setRoom} />
      <PersonsSelector/>
      <DateRangePicker data={data} room={room} setRoom={setRoom} />
    </>
  );
}
