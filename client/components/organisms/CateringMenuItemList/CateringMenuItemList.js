import React from "react";
import { useSelector } from "react-redux";
import R from "ramda";

import { Box, Title, Container, Column, Columns } from "react-bulma-companion";
import CateringItem from "../../molecules/CateringItem";

export default function CateringMenuItemList() {
  const { catItems } = useSelector(R.pick(["catItems"]));
  console.log(catItems);
  return (
    <Box className="general-profile">
      <Title size="3">Catering Menu List</Title>
      <hr className="separator" />
      <Container>
        <ul className="todo-list">
            <li>
            <Columns>
        <Column size="2">Name</Column>
        <Column size="4">Description</Column>
        <Column size="2">Price</Column>
        <Column size="2">Category</Column>
        <Column size='2'>
      </Column>
      </Columns>
            </li>
          {R.reverse(catItems).map((item) => (
            <CateringItem key={item.id} {...item} />
          ))}
        </ul>
      </Container>
    </Box>
  );
}
