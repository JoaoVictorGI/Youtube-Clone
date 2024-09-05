import { styled } from "../../../styled-system/jsx"

export const Container = styled("div", {
  base: {
    width: "100%",
  },
})

export const ImageBanner = styled("img", {
  base: {
    width: "100%",
    height: "210px",
    borderRadius: "12px",
  },
})

export const TitleContainer = styled("div", {
  base: {
    width: "100%",
    display: "flex",
  },
})

export const ChannelImage = styled("div", {
  base: {
    backgroundColor: "beige",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    marginRight: "10px",
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
