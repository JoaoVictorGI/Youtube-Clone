import { styled } from "../../../styled-system/jsx"

export const DropdownContainer = styled("div", {
  base: {
    width: "300px",
    height: "80px",
    borderRadius: "10px",
    boxShadow: "0 0 50px rgb(0 0 0 / 0.25)",
    backgroundColor: "white",
    position: "fixed",
    top: "55px",
    right: "20px",
    zIndex: "1",
  },
})

export const MenuItem = styled("div", {
  base: {
    width: "98%",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "2px 15px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    minHeight: "40px",
    flexDirection: "row",
    justifyContent: "none",

    _hover: {
      backgroundColor: "#f2f2f2",
    },
  },

  variants: {
    variant: {
      closed: {
        minHeight: "70px",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
})

export const Span = styled("span", {
  base: {
    fontWeight: "600",
    marginLeft: "20px",
    fontSize: "16px",
  },
  variants: {
    variant: {
      closed: {
        fontWeight: "400",
        marginLeft: "0",
        fontSize: "12px",
      },
    },
  },
})
