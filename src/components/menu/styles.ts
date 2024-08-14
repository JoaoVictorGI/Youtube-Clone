import { styled } from "../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    height: "calc(100vh - 55px)",
    boxSizing: "border-box",
    padding: "10px 10px 10px 10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflowY: "auto",
    position: "sticky",
    top: "55px",
  },
  variants: {
    variant: {
      opened: {
        width: "250px",
      },
      closed: {
        width: "100px",
      },
    },
  },
});

export const MenuItem = styled("div", {
  base: {
    width: "98%",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "2px 15px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",

    _hover: {
      backgroundColor: "#f2f2f2",
    },
  },

  variants: {
    variant: {
      opened: {
        minHeight: "40px",
        flexDirection: "row",
        justifyContent: "none",
      },
      closed: {
        minHeight: "70px",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
});

export const Span = styled("span", {
  variants: {
    variant: {
      opened: {
        fontWeight: "600",
        marginLeft: "20px",
        fontSize: "16px",
      },
      closed: {
        fontWeight: "400",
        marginLeft: "0",
        fontSize: "12px",
      },
    },
  },
});

export const Separator = styled("hr", {
  base: {
    width: "100%",
    height: "2px",
    color: "gray.800",
    backgroundColor: "gray.800",
    margin: "10px 0 10px 0",
  },
});
