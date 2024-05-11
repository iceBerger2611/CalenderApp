import { format,  } from 'date-fns'
import { TCalenderDate } from "@Types/calenderDate"
import { Box, Card, Paper, Stack, Typography } from "@mui/material"
import theme from '../../theme'
import { CalenderDateContainer, CalenderDateEventsSummary, CalenderDateHeader } from './CalenderDate.styled'

interface ICalenderDateProps {
    calenderDate: TCalenderDate
}

export const CalenderDate = ({ 
    calenderDate 
}: ICalenderDateProps) => {
    
    return (
      <CalenderDateContainer>
        <CalenderDateHeader calenderDate={calenderDate.date} />
        <CalenderDateEventsSummary eventsCount={calenderDate.events.length} />
      </CalenderDateContainer>
    );
}