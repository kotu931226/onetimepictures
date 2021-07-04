import PropTypes from 'prop-types';
import { Box, Paper } from "@material-ui/core";

export function TabPanel(props){
  const { children, value, index, ...other } = props;

  return(
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box px={2}>
          <Paper>
            <Box p={3}>
              {children}
            </Box>
          </Paper>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export function TabProps(index){
  return {
    value:`${index}`,
    label:`${index}`,
    id:`${index}`,
    'aria-controls':`wapped-tabpanel-${index}`,
  };
}
