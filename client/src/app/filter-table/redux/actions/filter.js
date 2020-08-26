export const filterActions = {
  'FILTER_UPDATE_PENDING_FILTER': 'FILTER_UPDATE_PENDING_FILTER',
  'FILTER_TOGGLE_DROPDOWN': 'FILTER_TOGGLE_DROPDOWN'
};

/**
 * @param {string} title
 * @param {[]} pending
 */
const updatePendingFilter = (title, pending) => {
  return {
    type: filterActions['FILTER_UPDATE_PENDING_FILTER'],
    title,
    pending
  }
};

const toggleDropdown = () => {
  return {
    type: filterActions['FILTER_TOGGLE_DROPDOWN']
  }
};

export const filterActionsGenerators = {
  updatePendingFilter,
  toggleDropdown
};
