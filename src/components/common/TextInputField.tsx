import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    label: string,
    error?: boolean,
    defaultValue?: string,
    autocomplete?: string,
    required?: boolean,
    disabled?: boolean,
    helperText?: string,
    multiline?: boolean,
    rows?: number,
    maxRows?: number
    inputStyle?: any
    style?: any
    fullWidth?: boolean,
    onChange?: any,
    color?: any,
    size?: any,
    margin?: any,
    variant?: any,
    autoFocus?: false,
    minRows?: number,
    sx?: any
}

const TextInputField = (props: Props) => {
    return (
    <Box
      component="form"
      noValidate
      autoComplete={props.autocomplete}
      style={{...props.inputStyle}}
    >
      <div>
        <TextField
          error={props.error}
          id="outlined-error"
          label={props.label}
          defaultValue={props.defaultValue}
          variant={props.variant}
          required={props.required}
          disabled={props.disabled}
          helperText={props.helperText}
          multiline={props.multiline}
          rows={props.rows}
          minRows={props.minRows}
          maxRows={props.maxRows}
          style={{...props.style}}
          fullWidth={props.fullWidth}
          margin={props.margin}
          onChange={props.onChange}
          color={props.color}
          size={props.size}
          autoFocus={props.autoFocus}
          sx={{...props.sx}}
        />
      </div>
    </Box>
  );
}

TextInputField.defaultProps = {
    variant: 'outlined', // outlined / filled / standard
    error: false,
    defaultValue: '',
    autocomplete: 'off', // on / off
    required: false,
    disabled: false,
    helperText: '',
    multiline: false,
    rows: 1,
    minRows: 1,
    maxRows: 1,
    fullWidth: true,
    color: 'primary', // primary / secondary / success / error / info / warning
    size: 'normal', // small / normal
    margin: 'dense', // none / dense / normal
    autoFocus: false
}

export default TextInputField