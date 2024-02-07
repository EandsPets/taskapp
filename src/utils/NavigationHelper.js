export const getScreenParent = route => {
  let parent;
  let DrawerStack = [
    'Dashboard',
    'Projects',
    'Create Task',
    'Members',
    'Profile',
  ];

  let singleStack = [
    'Onboarding',
    'Login',
    'SignUp',
    'Chat',
    'Reports',
    'Calendar',
    'Tasks',
    'Project',
  ];

  if (DrawerStack.includes(route)) {
    parent = 'DrawerStack';
  } else if (singleStack.includes(route)) {
    parent = 'SingleStack';
  }
  return parent;
};
