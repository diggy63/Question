import React from "react";
import { useSelector } from "react-redux";
import R from "ramda";

import { Box, Title, Container } from "react-bulma-companion";
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
          {R.reverse(catItems).map((item) => (
            <CateringItem key={item.id} {...item} />
          ))}
        </ul>
      </Container>
    </Box>
  );
}
