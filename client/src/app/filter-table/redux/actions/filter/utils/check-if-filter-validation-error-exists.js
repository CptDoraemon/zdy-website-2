/**
 * @param {import('../../../states/filter').FilterState} filterFilterState
 * @return boolean
 */
const checkIfFilterValidationErrorExists = (filterFilterState) => {
  for (let i=0; i<filterFilterState.length; i++) {
    if (filterFilterState[i].validationMessage !== '') {
      return true
    }
  }

  return false
};

export default checkIfFilterValidationErrorExists
