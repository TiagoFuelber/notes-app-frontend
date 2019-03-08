import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledAddNote = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const AddNote = () => (
  <StyledAddNote>
    <FontAwesomeIcon icon="plus-circle" />
  </StyledAddNote>
);

export default AddNote;
