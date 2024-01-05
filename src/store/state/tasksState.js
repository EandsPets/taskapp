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
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
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
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
      ],
      recurring: true,
      note: 'Confirm your laundry',
    },
  ],
};

export default tasksState;
