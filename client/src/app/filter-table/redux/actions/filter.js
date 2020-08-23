export const filterActions = {
  'FILTER_UPDATE_FILTER': 'FILTER_UPDATE_FILTER'
};

/**
 * @param {string} internalName
 * @param {string} selected
 */
const updateFilter = (internalName, selected) => {
  return {
    type: filterActions['FILTER_UPDATE_FILTER'],
    internalName,
    selected
  }
};

export const testActionsGenerators = {
  updateFilter
};
