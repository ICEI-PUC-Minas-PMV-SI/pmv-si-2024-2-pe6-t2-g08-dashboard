import React, { useRef, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, LocaleConfig } from 'react-native-calendars';
import { agendaItems, getMarkedDates } from '../utils/agendaItems';
import AgendaItem from '../components/AgendaItem';
import { useTheme } from '../providers/ThemeProvider';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

const ITEMS = agendaItems;

const CalendarPage = (props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const { paperTheme } = useTheme();
  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider date={ITEMS[1]?.title} showTodayButton theme={{ ...paperTheme.calendarTheme }}>
      {weekView ? (
        <WeekCalendar firstDay={1} markedDates={marked.current} theme={{ ...paperTheme.calendarTheme }} />
      ) : (
        <ExpandableCalendar firstDay={1} markedDates={marked.current} animateScroll />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        theme={{ ...paperTheme.calendarTheme }}
        sectionStyle={{ ...styles.section, backgroundColor: paperTheme.calendarTheme.backgroundColor }}
      />
    </CalendarProvider>
  );
};

export default CalendarPage;

const styles = StyleSheet.create({
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
