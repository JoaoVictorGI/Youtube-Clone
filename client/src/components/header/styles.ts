import { styled } from "../../../styled-system/jsx"

export const Container = styled("header", {
  base: {
    width: "100%",
    height: "55px",
    backgroundColor: "#fff",
    padding: "0 16px 0 16px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: "0",
  },
})

export const LogoContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
  },
})

export const ButtonContainer = styled("div", {
  base: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    _hover: { backgroundColor: "#f2f2f2" },
  },
})

export const SearchContainer = styled("div", {
  base: {
    display: "flex",
  },
})

export const SearchInputContainer = styled("div", {
  base: {
    width: "450px",
    height: "35px",
    border: "1px solid #d3d3d3",
    borderRadius: "40px 0 0 40px",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
  },
})

export const SearchInput = styled("input", {
  base: {
    width: "100%",
    height: "25px",
    outline: "none",
    border: "none",
  },
})

export const SearchButton = styled("div", {
  base: {
    borderRadius: "0 40px 40px 0",
    height: "35px",
    width: "70px",
    backgroundColor: "#f8f8f8",
    border: "1px solid #d3d3d3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
})

export const HeaderButtons = styled("div", {
  base: {
    width: "200px",
    display: "flex",
  },
})

export const LoginContainer = styled("div", {
  base: {
    width: "128px",
    height: "40px",
    borderRadius: "40px 40px 40px 40px",
    borderWidth: "2px",
    borderColor: "#f2f2f2",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#065fd4",

    _hover: { backgroundColor: "#def1ff", border: "none" },
  },
})

export const AccountContainer = styled("div", {
  base: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "0 0 0 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#FF312E",

    _hover: { filter: "brightness(75%)" },
  },
})
