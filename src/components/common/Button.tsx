import Button from '@mui/material/Button';

interface Props {
    variant?: any
    disabled?: boolean
    label: string
    color?: any
    size?: any
    startIcon?: any
    endIcon?: any
    fullWidth?: boolean
    sx?: any
    onClick?: any
}

const CustomButton = (props: Props) => {
    return (
        <div>
            <Button
                variant={props.variant}
                disabled={props.disabled}
                color={props.color}
                size={props.size}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                fullWidth={props.fullWidth}
                sx={{...props.sx}}
                onClick={props.onClick}
            >
                {props.label}
            </Button>
        </div>
    )
}

CustomButton.defaultProps = {
    variant: 'contained', // text / contained / outlined
    disabled: false,
    color: 'primary', // primary / secondary / success / error / info / warning
    size: 'medium', // small / medium / large
    fullWidth: true,

}

export default CustomButton