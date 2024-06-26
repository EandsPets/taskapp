const tasksState = {
  tasks: [
    {
      id: 1,
      title: 'Do your laundry',
      status: 'In-Progress',
      due: 'Dec 15',
      priority: 'High',
      assigned_by: 'Mom',
      time_line: 'Today',
      assigned_to: [
        {
          id: '1234A',
          name: 'Mary Houston',
          photo:
            'https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
        {
          id: '2345B',
          name: 'Alex Johan',
          photo:
            'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
      ],
      recurring: false,
      note: 'You have to wash your clothes every morning.',
    },
    {
      id: 2,
      title: 'Do your homework',
      status: 'In-Progress',
      due: 'Dec 15',
      priority: 'Medium',
      assigned_by: 'Mom',
      time_line: 'Today',
      assigned_to: [
        {
          id: '3456C',
          name: 'Veronica Tshult',
          photo:
            'https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
        {
          id: '4567D',
          name: 'Bayo Olade',
          photo:
            'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
        {
          id: '5678E',
          name: 'Ahmad Hussein',
          photo:
            'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
      ],
      recurring: true,
      note: 'Confirm your homework',
    },
    {
      id: 3,
      title: 'Do your laundry',
      status: 'To-do',
      due: 'Dec 15',
      priority: 'Low',
      assigned_by: 'Mom',
      time_line: 'Today',
      assigned_to: [
        {
          id: '6789F',
          name: 'Gina Malo',
          photo:
            'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
        {
          id: '7890G',
          name: 'Wilfred Opeh',
          photo:
            'https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
      ],
      recurring: false,
      note: 'Wash your clothes by evening',
    },
    {
      id: 4,
      title: 'Do your task',
      status: 'Completed',
      due: 'Dec 15',
      priority: 'High',
      assigned_by: 'Mom',
      time_line: 'Today',
      assigned_to: [
        {
          id: '9012I',
          name: 'Owen McClaren',
          photo:
            'https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
      ],
      recurring: true,
      note: 'Confirm your homework',
    },
    {
      id: 5,
      title: 'Do your laundry',
      status: 'Completed',
      due: 'Dec 15',
      priority: 'Low',
      assigned_by: 'Mom',
      time_line: 'Today',
      assigned_to: [
        {
          id: '1234K',
          name: 'Blessing Opharevhe',
          photo:
            'https://images.unsplash.com/photo-1612983133700-739c8f358334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
        {
          id: '2345L',
          name: 'Chinwe Joseph',
          photo:
            'https://images.unsplash.com/photo-1607050132114-8241718a5b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          designation: 'Lead Designer',
          lastSeen: '4:20 PM',
        },
      ],
      recurring: true,
      note: 'Confirm your laundry',
    },
  ],
};

export default tasksState;
