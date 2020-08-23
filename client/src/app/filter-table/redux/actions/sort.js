export const sortActions = {
  'SORT_UPDATE_SORT': 'SORT_UPDATE_SORT'
};

/**
 * @param {string} internalName
 * @param {string} selected
 */
const updateSort = (internalName, selected) => {
  return {
    type: sortActions['SORT_UPDATE_SORT'],
    internalName,
    selected
  }
};

export const sortActionsGenerators = {
  updateSort
};
