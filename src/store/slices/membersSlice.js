import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'Mary Houston',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '2345B',
    name: 'Alex Johan',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '3456C',
    name: 'Veronica Tshult',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '4567D',
    name: 'Bayo Olade',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '5678E',
    name: 'Ahmad Hussein',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '6789F',
    name: 'Gina Malo',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '7890G',
    name: 'Wilfred Opeh',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '8901H',
    name: 'Stacy Abraham',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1606247193592-53da505571f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '9012I',
    name: 'Owen McClaren',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '0123J',
    name: 'David Judah',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1610261003803-224ee66747e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '1234K',
    name: 'Blessing Opharevhe',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1612983133700-739c8f358334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
  {
    id: '2345L',
    name: 'Chinwe Joseph',
    status: 'Active',
    photo:
      'https://images.unsplash.com/photo-1607050132114-8241718a5b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvbWVuJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    type: 'Admin',
  },
];

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    loadmembers(state, action) {
      const members = action.payload;
      state.members = members;
    },
  },
});

export const {loadmembers} = membersSlice.actions;

export default membersSlice.reducer;
