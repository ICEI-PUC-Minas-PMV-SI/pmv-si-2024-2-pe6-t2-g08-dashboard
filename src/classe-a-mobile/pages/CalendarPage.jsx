import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { useTheme } from '../providers/ThemeProvider';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'fr';

const CalendarPage = () => {
  const [selected, setSelected] = useState('');
  const { paperTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Agenda
        style={styles.calendar}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        items={{
          '2024-12-22': [{name: 'item 1 - any js object'}],
          '2024-12-23': [{name: 'item 2 - any js object', height: 80}],
          '2024-12-24': [],
          '2024-12-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
        }}
        theme={{...paperTheme.calendarTheme}}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    flex: 1,
    width: 'auto',
  },
});

export default CalendarPage;
