import { createMuiTheme } from '@material-ui/core/styles';


export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  typography: {
    font: 'normal normal normal 20px/24px Ubuntu',
  },

  palette: {
    primary: {
      main: '#1B1F38',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)'
    }
  },
  overrides:{

    MuiButton: {
      root: {
        margin: '5px',
        color: 'white',
        borderColor: '#14AFF1',
      },

      outlined: {
        color: 'white',
        border: '1px solid #14AFF1',
      }
    },
    // MuiFormLabel: {
    //   focused: true,
    //   root: {
    //     '&.focused': {
    //       borderColor: 'white'
    //     }
    //   }
    // },
    // MuiFilledInput: {
    //   root: {
        
    //     '&:hover': {
    //      borderColor: '#14AFF1'
    //     },
    //     '&.Mui-focused': {
    //       borderColor: '#14AFF1'
    //     }
    //   }
    // },
    
    MuiPaper: {
    root:{
      backgroundColor: '#2A3E4C',
      color: 'white'
    }
  },
 
    MuiInputBase: {     
          input: {
            color: 'white',
            border: '3px solid #356680',
            height: '0.5em',
            background: '#283A46 0% 0% no-repeat padding-box',
            borderRadius: '10px',
            font: 'normal normal normal 20px/24px Ubuntu',
         }
   },
  //  MuiOutlinedInput: {
  //    root:{
  //     '&.Mui-focused': {
  //         borderColor: '#14AFF1',
  //      },
     
    
  //    notchedOutline: {
  //   borderColor: 'transparent',
  //     }
  //  },

  // },
 },
});

  // MuiButtonBase: {
  //   root: {
  //     backgroundColor: '#2196f3',
  //   }
  // },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       fontSize: '1rem',
  //       backgroundColor: '#2196f3',
  //     },
  //   },
  // },