import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CheatSheet({ showModal, setShowModal }) {
  return <>{showModal ? <h3>CheatSheet</h3> : null}</>;
}

export default CheatSheet;
