import { styled } from "../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    width: "100%",
    height: "56px",
    position: "fixed",
    top: "55px",
    display: "flex",
    backgroundColor: "#fff",
    zIndex: "-1",
  },
});

export const ButtonContainer = styled("div", {
  base: {
    height: "32px",
    minWidth: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    margin: "12px 12px 12px 0",
    padding: "0 10px 0 10px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0f0f0f",
    cursor: "pointer",
    backgroundColor: "#f2f2f2",

    _hover: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
  },
});
