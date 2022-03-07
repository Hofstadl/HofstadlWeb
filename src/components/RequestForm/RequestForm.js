import React from "react";
import PersonsSelector from "./PersonsSelector";
import RoomApartmentSwitch from "./RoomApartmentSwitch";

export default function RequestForm() {
  return (
    <>
      <RoomApartmentSwitch />
      <PersonsSelector />
    </>
  );
}
