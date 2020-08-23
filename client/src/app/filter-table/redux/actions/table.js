export const tableActions = {
  'TABLE_TOGGLE_DENSE': 'TABLE_TOGGLE_DENSE'
};

/**
 * @param {boolean} dense
 */
const toggleDense = (dense) => {
  return {
    type: tableActions['TABLE_TOGGLE_DENSE'],
    dense
  }
};

export const tableActionsGenerators = {
  toggleDense
};
