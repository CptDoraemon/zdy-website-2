const defaultFilters = {
  death: {
    yes: true,
    no: true,
  },
  sex: {
    male: true,
    female: true
  },
  severity: {
    '1': true,
    '2': true,
    '3': true
  },
  age: {
    min: 0,
    max: 120
  }
};

const defaultFilterState = {
  active: defaultFilters,
  pending: defaultFilters,
  hasPendingChanged: false,
  isResettable: true
};

export default defaultFilterState
