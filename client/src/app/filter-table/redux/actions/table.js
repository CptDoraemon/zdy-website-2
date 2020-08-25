export const tableActions = {
  'TABLE_TOGGLE_DENSE': 'TABLE_TOGGLE_DENSE',
  'TABLE_CHANGE_PAGE': 'TABLE_CHANGE_PAGE',
};

const toggleDense = () => {
  return {
    type: tableActions['TABLE_TOGGLE_DENSE']
  }
};

const changePage = (page) => {
  return {
    type: tableActions['TABLE_CHANGE_PAGE'],
    page
  }
};

export const tableActionsGenerators = {
  toggleDense,
  changePage
};
