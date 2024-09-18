import { styled } from "../../../styled-system/jsx"

export const Container = styled("div", {
  base: {
    width: "100%",
  },
})

export const ImageBanner = styled("div", {
  base: {
    width: "100%",
    height: "210px",
    borderRadius: "12px",
    backgroundColor: "#e6e6e6",
    animation: "pulse",
  },
})

export const TitleContainer = styled("div", {
  base: {
    width: "100%",
    borderRadius: "8px",
    display: "flex",
  },
})

export const TitleGrayContainer = styled("div", {
  base: {
    width: "100%",
    height: "16px",
    marginTop: "2px",
    borderRadius: "6px",
    backgroundColor: "#e6e6e6",
    animation: "pulse",
  },
})

export const ChannelImage = styled("div", {
  base: {
    backgroundColor: "#cccccc",
    width: "44px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    marginRight: "10px",
    animation: "pulse",
  },
})

export const TextContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
  },
})

export const Title = styled("span", {
  base: {
    fontWeight: "600",
    color: "#0f0f0f",
  },
})

export const TextCard = styled("span", {
  base: {
    color: "#8c8c8c",
    fontSize: "14px",
  },
})
