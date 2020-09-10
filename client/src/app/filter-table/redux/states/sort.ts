interface Option {
  internalName: string,
  displayName: string
}

interface Title {
  internalName: string,
  displayName: string
}

interface OptionObject {
  items: Option[],
  title: Title,
  selected: string
}

const mockSortOptions: OptionObject[] = [
  {
    items: [
      {internalName: 'id', displayName: 'id'},
      {internalName: 'age', displayName: 'age'},
      {internalName: 'sex', displayName: 'sex'},
      {internalName: 'severity', displayName: 'severity'},
      {internalName: 'death', displayName: 'death'},
    ],
    title: {internalName: 'sortBy', displayName: 'sort by'},
    selected: 'id'
  },
  {
    items: [
      {internalName: 'asc', displayName: 'ascending'},
      {internalName: 'desc', displayName: 'descending'},
    ],
    title: {internalName: 'sortOrder', displayName: 'sort order'},
    selected: 'asc'
  },
  {
    items: [
      {internalName: '20', displayName: '20'},
      {internalName: '50', displayName: '50'},
      {internalName: '100', displayName: '100'},
    ],
    title: {internalName: 'rowPerPage', displayName: 'row per page'},
    selected: '20'
  },
];

export type DefaultSortState = OptionObject[];
const defaultSortState: DefaultSortState = mockSortOptions;

export default defaultSortState;
