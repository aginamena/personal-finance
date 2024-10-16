import RightArrow from "@/public/assets/images/icon-caret-right.svg";
import PotIcon from "@/public/assets/images/icon-pot.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function PotSummary() {
  return (
    <Box sx={{ bgcolor: "white", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Pots</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: "10px", fontSize: "13px" }}>
            See Detais
          </Typography>
          <Image src={RightArrow} alt="right arrow" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "200px",
            height: "100px",
            bgcolor: "#F2F2F2",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Image src={PotIcon} alt="pot icon" />
          <Box sx={{ textAlign: "center", marginLeft: "30px" }}>
            <Typography>Total Saved</Typography>
            <Typography>$ 850</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ width: "130px", marginBottom: "10px" }}>
              <Typography sx={{ fontSize: "13px" }}>Savings</Typography>
              <Typography sx={{ fontWeight: "bold" }}>$159</Typography>
            </Box>
            <Box sx={{ width: "130px" }}>
              <Typography sx={{ fontSize: "13px" }}>Concert Ticket</Typography>
              <Typography sx={{ fontWeight: "bold" }}>$110</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ width: "130px", marginBottom: "10px" }}>
              <Typography sx={{ fontSize: "13px" }}>Gift</Typography>
              <Typography sx={{ fontWeight: "bold" }}>$40</Typography>
            </Box>
            <Box sx={{ width: "130px" }}>
              <Typography sx={{ fontSize: "13px" }}>New laptop</Typography>
              <Typography sx={{ fontWeight: "bold" }}>$10</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
