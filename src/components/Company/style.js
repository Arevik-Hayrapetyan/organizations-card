import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .companyCard": {
        padding: "30px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        marginTop: "20px",
    },
}));
