import React from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

import theme from "theme";
import { MessageTimeIcon, NoteIcon, WalletIcon } from "uiKit";
import teacherWithoutLabel from "assets/teacher-without-label.png";

export const InfoDashboard: React.FC = () => {
  return (
    <Box display={"flex"} gap={"12px"}>
      <Box
        borderRadius={"10px"}
        bgcolor={theme.palette.grey[900]}
        padding={"12px 14px"}
        // width={237}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
      >
        <Box display={"flex"} gap={"18px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography
              fontSize={"12px"}
              fontWeight={700}
              color={theme.palette.grey[700]}
              sx={{ textShadow: " 0px 1px  0px #FFFFFF" }}
            >
              لیبل فصلی مدرس
            </Typography>
            <Chip
              label={"لیبلی ندارید :("}
              variant="outlined"
              sx={{
                display: "flex",
                height: "18px",
                padding: "0px 14px",
                alignItems: "center",
                fontWeight: 700,
                fontSize: "10px",
                color: "white",
                bgcolor: theme.palette.grey[800],

                "& .MuiChip-icon": {
                  margin: 0,
                },
                "& .MuiChip-label": {
                  padding: 0,
                },
              }}
            />
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "16px",
              width: "2px",
              borderColor: "white",
              textAlign: "center",
              alignSelf: "center",
            }}
          />
          <Box component={"img"} src={teacherWithoutLabel} />
        </Box>
      </Box>
      <Box
        borderRadius={"10px"}
        bgcolor={"white"}
        padding={"12px 14px"}
        // width={237}
        display={"flex"}
        alignItems={"center"}
        flex={1}
      >
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontSize={"10px"} color={theme.palette.grey[600]}>
              مجموع درآمد از دانشجویان
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontSize={"20px"} color={theme.palette.grey[500]}>
                ۵٬۶۰۰٬۰۰۰٬۰۰۰
              </Typography>
              <Chip
                label="(+۵٪)"
                icon={
                  <ArrowCircleUpRoundedIcon
                    sx={{ height: "10px", width: "10px" }}
                  />
                }
                color="primary"
                variant="outlined"
                sx={{
                  display: "flex",
                  height: "13px",
                  gap: "3px",
                  padding: "2px",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: "8px",
                  bgcolor: theme.palette.primary[50],
                  borderColor: theme.palette.primary[200],
                  "& .MuiChip-icon": {
                    margin: 0,
                  },
                  "& .MuiChip-label": {
                    padding: 0,
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            bgcolor={theme.palette.primary[50]}
            width={44}
            height={44}
          >
            <WalletIcon color={theme.palette.primary[400]} />
          </Box>
        </Box>
      </Box>

      <Box
        borderRadius={"10px"}
        bgcolor={"white"}
        padding={"12px 14px"}
        // width={237}
        display={"flex"}
        alignItems={"center"}
        flex={1}
      >
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontSize={"10px"} color={theme.palette.grey[600]}>
              تکالیف نیازمند بازخورد
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontSize={"20px"} color={"error"}>
                56
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            bgcolor={theme.palette.error[600]}
            width={44}
            height={44}
          >
            <NoteIcon />
          </Box>
        </Box>
      </Box>

      <Box
        borderRadius={"10px"}
        bgcolor={"white"}
        padding={"12px 14px"}
        // width={237}
        display={"flex"}
        alignItems={"center"}
        flex={1}
      >
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontSize={"10px"} color={theme.palette.grey[600]}>
              پیام های نیازمند پاسخ
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontSize={"20px"} color={"warning"}>
                56
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
            bgcolor={theme.palette.warning[600]}
            width={44}
            height={44}
          >
            <MessageTimeIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
