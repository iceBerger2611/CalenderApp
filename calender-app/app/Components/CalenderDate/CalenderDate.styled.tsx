import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { format } from "date-fns";
import { ReactNode } from "react";
import theme from "../../theme";

export const CalenderDateContainer = styled(
  (props: { children: ReactNode }) => <Paper {...props} />
)(({ theme }) => ({
    width: '150px',
    border: `4px solid ${theme.palette.secondary.main}`,
}));

export const CalenderDateHeader = styled(
  ({ calenderDate }: { calenderDate: Date }) => (
    <Stack direction="row">
      <Box
        borderBottom={`4px solid ${theme.palette.secondary.main}`}
        borderRight={`4px solid ${theme.palette.secondary.main}`}
        padding={"3px 5px"}
      >
        <Typography variant="h5">{format(calenderDate, "dd")}</Typography>
      </Box>
      <Box
        width="100%"
        borderBottom={`4px solid ${theme.palette.secondary.main}`}
        padding={"3px 5px"}
      >
        <Typography width="100%" variant="h6" textAlign='center'>
          {format(calenderDate, "EEEE")}
        </Typography>
      </Box>
    </Stack>
  )
)(() => ({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
}));

export const CalenderDateEventsSummary = styled(
  ({ eventsCount }: { eventsCount: number }) => (
    <Stack
      padding=" 4px 0px 4px 10px"
      gap={3.5}
      direction="row"
      alignItems="center"
    >
      <CircleIcon
        fontSize="inherit"
        color={eventsCount > 0 ? "success" : "error"}
      />
      <Typography>
        {eventsCount > 0 ? `${eventsCount} event${eventsCount > 1 ? 's' : ''}` : "No Events"}
      </Typography>
    </Stack>
  )
)({ theme });
