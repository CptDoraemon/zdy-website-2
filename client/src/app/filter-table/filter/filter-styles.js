import {createStyles} from "@material-ui/core/styles";

const filterStyles = (theme) => createStyles({
  text: {
    textTransform: 'capitalize',
    fontSize: theme.typography.body2.fontSize
  }
});

export default filterStyles
