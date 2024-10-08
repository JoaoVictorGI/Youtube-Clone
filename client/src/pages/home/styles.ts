import { styled } from "../../../styled-system/jsx"

export const Container = styled("div", {
  base: {
    width: "100%",
    maxWidth: "1600px",
    display: "grid",
    columnGap: "20px",
    rowGap: "50px",
    paddingTop: "14px",
    gridTemplateColumns: "4",
  },
})
