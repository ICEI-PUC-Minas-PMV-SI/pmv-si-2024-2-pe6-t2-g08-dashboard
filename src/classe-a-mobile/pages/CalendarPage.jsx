import React, { useRef, useCallback, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, LocaleConfig } from 'react-native-calendars';
import { getMarkedDates, groupEventsByDate } from '../utils/agendaItems';
import AgendaItem from '../components/AgendaItem';
import { useTheme } from '../providers/ThemeProvider';
import { getAllEvents } from '../utils/services';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

//const ITEMS = agendaItems;

const CalendarPage = (props) => {
  const { weekView } = props;
  const { paperTheme } = useTheme();
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const marked = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEvents();
        const formatted = groupEventsByDate(data);
        setData(formatted);
        marked.current = getMarkedDates(formatted);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <CalendarProvider date={items[1]?.title} showTodayButton theme={{ ...paperTheme.calendarTheme }}>
      {weekView ? (
        <WeekCalendar firstDay={1} markedDates={marked.current} theme={{ ...paperTheme.calendarTheme }} />
      ) : (
        <ExpandableCalendar firstDay={1} markedDates={marked.current} animateScroll />
      )}
      <AgendaList
        sections={items}
        renderItem={renderItem}
        theme={{ ...paperTheme.calendarTheme }}
        sectionStyle={{ ...styles.section, backgroundColor: paperTheme.calendarTheme.backgroundColor }}
      />
    </CalendarProvider>
  );
};

export default CalendarPage;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  section: {
    color: 'grey',
    textTransform: 'capitalize',
  },
});
