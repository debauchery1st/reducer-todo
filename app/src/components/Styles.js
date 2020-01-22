import styled from "styled-components";

const InputBox = styled.input`
  padding: 0.5rem;
  font-size: large;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

const AddButton = styled.button`
  border-radius: 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  width: 55vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  font-size: large;
  texgt-align: left;
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  margin: 0.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid grey;
  background-color: #347474;
  color: #63b7af;
  &:hover {
    color: #f9fcfb;
    border: 0.1rem solid #ee8572;
  }
`;

export { InputBox, AddButton, ListItem };
