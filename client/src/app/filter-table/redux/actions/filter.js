export const filterActions = {
  'FILTER_UPDATE_PENDING_FILTER': 'FILTER_UPDATE_PENDING_FILTER'
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

export const testActionsGenerators = {
  updatePendingFilter
};
