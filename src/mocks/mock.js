const userID = '0d39fef3-f3d7-43fa-b0df-e556ca7f5729'
const projectID = '82e338ba-c03c-4e98-b5c4-56fe5e32c9db'
const listID = 'ac07cda0-82bc-48b1-b143-5098bcaf6702'
const cardID = '85a5d983-616e-4e6b-9949-53fc45981737'

export const mock = {
  user: {
    _id: userID,
    name: 'Jayme Buckridge'
  },
  projects: [
    {
      _id: projectID,
      userID: userID,
      title: 'International Manager',
      list: [
        {
          _id: listID,
          projectID: projectID,
          userID: userID,
          title: 'Direct Communications',
          card: [
            {
              _id: cardID,
              projectID: projectID,
              userID: userID,
              listID: listID,
              title: 'Customer Configuration'
            }
          ]
        },
        {
          _id: '3e9bfa3b-5087-431a-82dc-7de00090a04e',
          projectID: projectID,
          userID: userID,
          title: 'Global Configuration Officer',
          card: []
        }
      ]
    }
  ]
}
