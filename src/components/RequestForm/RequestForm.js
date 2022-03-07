import React, { useState } from "react";
import RoomApartmentSwitch from "./RoomApartmentSwitch";
import PersonsSelector from "./PersonsSelector";

export default function RequestForm() {
  return (
    <>
      <RoomApartmentSwitch />
      <PersonsSelector />
    </>
  );
}
