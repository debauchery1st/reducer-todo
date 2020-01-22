import styled from "styled-components";

const InputBox = styled.input`
  padding: 0.5rem;
  font-size: large;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

const AddButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: white;
  background-color: #63b7af;
  text-shadow: 1px 1px 2px grey;
  cursor: pointer;
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

const Container = styled.div`
  background-color: #35495e;
  color: #347474;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  cursor: pointer;
`;

const RowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export { InputBox, AddButton, ListItem, Container, Image, RowContainer };
