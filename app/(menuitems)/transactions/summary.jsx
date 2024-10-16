import Image from "next/image";
import RightArrow from "@/public/assets/images/icon-caret-right.svg";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function TransactionSummary() {
  const customers = [
    {
      name: "Emma Richardson",
      amount: "+$75.00",
      date: "19 Aug 2024",
    },
    {
      name: "Savory Bites Bistro",
      amount: "-$65.50",
      date: "19 Aug 2024",
    },
    {
      name: "Emma Richardson",
      amount: "-$42.30",
      date: "19 Aug 2024",
    },
    {
      name: "Sun Park",
      amount: "+$120.00",
      date: "17 Aug 2024",
    },
    {
      name: "Urban Services Hub",
      amount: "-$65.00",
      date: "17 Aug 2024",
    },
  ];
  return (
    <Box sx={{ bgcolor: "white", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Transactions</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: "10px", fontSize: "13px" }}>
            See Detais
          </Typography>
          <Image src={RightArrow} alt="right arrow" />
        </Box>
      </Box>

      {customers.map(({ name, amount, date }) => (
        <List key={name}>
          <ListItem sx={{ width: "100%" }}>
            <Card
              name={name}
              imageURL={`/assets/images/avatars/${name
                .toLowerCase()
                .replaceAll(" ", "-")}.jpg`}
              amount={amount}
              date={date}
            />
          </ListItem>
        </List>
      ))}
    </Box>
  );
}
function Card({ name, imageURL, amount, date }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src={imageURL}
          alt={`${name}'s profile picture'`}
          width={50}
          height={50}
          style={{ borderRadius: "50%", marginRight: "20px" }}
        />
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            color: amount.charAt(0) == "+" && "#277C78",
            marginBottom: "10px",
          }}
        >
          {amount}
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>{date}</Typography>
      </Box>
    </Box>
  );
}
