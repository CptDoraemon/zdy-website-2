export const mockSortOptions = [
  {
    items: [
      {internalName: 'id', displayName: 'id'},
      {internalName: 'age', displayName: 'age'},
    ],
    title: {internalName: 'sortBy', displayName: 'sort by'},
    selected: 'id'
  },
  {
    items: [
      {internalName: '10', displayName: '10'},
      {internalName: '20', displayName: '20'},
    ],
    title: {internalName: 'rowPerPage', displayName: 'row per page'},
    selected: '10'
  },
  {
    items: [
      {internalName: 'asc', displayName: 'ascending'},
      {internalName: 'desc', displayName: 'descending'},
    ],
    title: {internalName: 'sortOrder', displayName: 'sort order'},
    selected: 'asc'
  }
];

const defaultSortState = mockSortOptions;

export default defaultSortState
