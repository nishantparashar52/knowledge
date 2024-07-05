export const dropdownData = [
    {
      id: 1,
      name: 'Level 1 Option 1',
      children: [
        {
          id: 2,
          name: 'Level 2 Option 1',
          options: [
            { id: 3, name: 'Level 3 Option 1' },
            { id: 4, name: 'Level 3 Option 2' },
          ],
        },
        {
          id: 5,
          name: 'Level 2 Option 2',
          options: [
            { id: 6, name: 'Level 3 Option 3' },
            { id: 7, name: 'Level 3 Option 4' },
          ],
        },
      ],
    },
  ];

  export const comments = [
    {
      text: 'Comment 1',
      replies: [
        { text: 'Reply 1-1', replies: [] },
        { text: 'Reply 1-2', replies: [] },
      ],
    },
    {
      text: 'Comment 2',
      replies: [
        { text: 'Reply 2-1', replies: [] },
        {
          text: 'Reply 2-2',
          replies: [
            { text: 'Reply 2-2-1', replies: [] },
            { text: 'Reply 2-2-2', replies: [] },
          ],
        },
      ],
    },
  ];


export const TabsData = [{
  label: 'tab1', content:"Tab 1 content"
},
{
  label: 'tab2', content:"Tab 2 content"
},
{
  label: 'tab3', content:"Tab 3 content"
},
{
  label: 'tab4', content:"Tab 4 content is here"
}]