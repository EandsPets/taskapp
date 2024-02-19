import moment from 'moment';

export const getWorkingTasks = tasks => {
  const filteredTasks = tasks.filter(
    task => task.time_started && !task.time_finished,
  );

  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getTasksBeforeToday = tasks => {
  const todayDate = moment().startOf('day');
  const filteredTasks = tasks.filter(task =>
    moment(task['start_time'], 'YYYY-MM-DD').isBefore(todayDate),
  );

  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getTodayTasks = tasks => {
  const todayDate = moment().format('YYYY-MM-DD');
  const filteredTasks = tasks.filter(
    task =>
      moment(task['start_time'], 'YYYY-MM-DD').format('YYYY-MM-DD') ===
      todayDate,
  );

  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getNextWeekTasks = tasks => {
  const startDateOfNextWeek = moment().add(1, 'weeks').startOf('isoWeek');
  const endDateOfNextWeek = moment().add(1, 'weeks').endOf('isoWeek');

  const filteredTasks = tasks.filter(task => {
    const taskDate = moment(task['start_time'], 'YYYY-MM-DD');
    return (
      taskDate.isSameOrAfter(startDateOfNextWeek, 'day') &&
      taskDate.isSameOrBefore(endDateOfNextWeek, 'day')
    );
  });

  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getNextMonthTasks = tasks => {
  const startDateOfNextMonth = moment().add(1, 'months').startOf('month');
  const endDateOfNextMonth = moment().add(1, 'months').endOf('month');

  const filteredTasks = tasks.filter(task => {
    const taskDate = moment(task['start_time'], 'YYYY-MM-DD');
    return (
      taskDate.isSameOrAfter(startDateOfNextMonth, 'day') &&
      taskDate.isSameOrBefore(endDateOfNextMonth, 'day')
    );
  });

  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getWithNoDueTasks = tasks => {
  const filteredTasks = tasks.filter(task => !task.date);
  return {tasks: filteredTasks, count: filteredTasks.length};
};

export const getPercent = tasks => {
  const todayDate = moment().format('YYYY-MM-DD');
  const allTasks = tasks.filter(
    task =>
      moment(task['start_time'], 'YYYY-MM-DD').format('YYYY-MM-DD') ===
      todayDate,
  );

  const completedTasks = tasks.filter(
    task =>
      moment(task['start_time'], 'YYYY-MM-DD').format('YYYY-MM-DD') ===
        todayDate && task.status === 'Completed',
  );

  return allTasks.length === 0
    ? 0
    : Math.ceil((completedTasks.length / allTasks.length) * 100);
};
