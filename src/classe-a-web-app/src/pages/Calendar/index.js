import React, { useEffect, useState } from 'react';
import { Calendar, Badge, HStack } from 'rsuite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { getAllEvents } from '../../utils/services';
import ManageUser from './ManageUser';

const CalendarPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openManage, setOpen] = React.useState(false);

  const fetchData = async () => {
    const data = await getAllEvents();
    console.log(data);
    const formatted = transformToGroupedEventList(data);
    console.log(formatted);
    setLoading(false);
    setData(formatted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };

  function getEventsByDate(targetDate) {
    console.log(targetDate);
    const eventGroup = data.find((event) => {
      const eventDateObj = new Date(event.date);
      return targetDate ? eventDateObj.toDateString() === targetDate.toDateString() : false;
    });

    return eventGroup ? eventGroup.data : [];
  }

  function renderCell(date) {
    const list = getEventsByDate(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }

  const TodoList = ({ date }) => {
    const list = getEventsByDate(date);

    if (!list.length) {
      return null;
    }

    return (
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {list.map((item) => (
          <>
            <ListItem key={item.time} index={item.time} alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography component="span" variant="body2" sx={{ color: 'text.primary', display: 'inline', fontWeight: 'bold' }}>
                    {item.hour}
                  </Typography>
                }
                secondary={`${item.title} (${item.duration})`}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    );
  };

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleSelect = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid container spacing={2}>
        <Grid size={10}>
          <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
            Calendário
          </Typography>
        </Grid>
        <Grid size={2}>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Adicionar Evento
          </Button>
        </Grid>
      </Grid>

      <ManageUser open={openManage} handleClose={handleClose} />
      <Grid container spacing={2} columns={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            <Grid size={8}>
              <Calendar bordered renderCell={renderCell} onSelect={handleSelect} />
            </Grid>
            <Grid size={4}>
              <TodoList date={selectedDate} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

function convertTo24HourFormat(timeStr) {
  // Regular expression to match time and AM/PM suffix
  const timePattern = /(\d{1,2})(am|pm)/i;

  // Match the time string against the regex
  const match = timeStr.match(timePattern);

  if (!match) {
    throw new Error('Invalid time format');
  }

  let hour = parseInt(match[1]); // Extract the hour part
  const period = match[2].toLowerCase(); // Extract AM/PM part

  // Convert to 24-hour format
  if (period === 'am') {
    if (hour === 12) {
      hour = 0; // Midnight case (12am is 00:00)
    }
  } else if (period === 'pm') {
    if (hour !== 12) {
      hour += 12; // Add 12 for PM times except 12pm
    }
  }

  // Format the hour into two digits (e.g., 01, 12, 22)
  const hourFormatted = hour.toString().padStart(2, '0');

  // Return the time in 24-hour format (HH:mm)
  return `${hourFormatted}:00`;
}

function transformToGroupedEventList(events) {
  // Create a grouped object with date as keys
  const groupedEvents = {};

  events.forEach((event) => {
    const { date, hour, title, duration } = event;

    // If the date doesn't exist in groupedEvents, create an empty array for it
    if (!groupedEvents[date]) {
      groupedEvents[date] = [];
    }

    // Add the event to the corresponding date group
    groupedEvents[date].push({ hour: convertTo24HourFormat(hour), title, duration });
  });

  // Convert the grouped object into an array of objects
  const result = Object.keys(groupedEvents).map((date) => ({
    date,
    data: groupedEvents[date],
  }));

  return result;
}

export default CalendarPage;
