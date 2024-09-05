import { styled } from "../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    width: "100%",
    height: "calc(100%-55px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const LoginContainer = styled("div", {
  base: {
    width: "50%",
  },
});

export const Button = styled("button", {
  base: {
    width: "200px",
    height: "50px",
    marginTop: "10px",
    backgroundColor: "#065fd4",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "8px",

    _hover: {
      backgroundColor: "#0554bb",
    },
  },
});

export const Input = styled("input", {
  base: {
    width: "380px",
    height: "50px",
    paddingLeft: "20px",
    marginTop: "10px",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",

    _focus: {
      border: "none",
    },
  },
});

export const Link = styled("a", {
  base: {
    color: "#065fd4",
  },
});
