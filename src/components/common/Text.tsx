import Typography from "@mui/material/Typography";

interface Props {
    label: string
    variant?: any
    align?: any
    noWrap?: boolean
    sx?: any
    paragraph?: boolean
    isBold?: boolean
    onClick?: () => {}
    className?: string
}

const customText = (props: Props) => {
  return (
    <Typography
        variant={props.variant}
        align={props.align}
        className={props.className}
        noWrap={props.noWrap}
        sx={{...props.sx}}
        paragraph={props.paragraph}
        onClick={props.onClick}
        fontStyle={props.isBold ? {fontWeight: 'bold'} : {}}
    >
      {props.label}
    </Typography>
  )
}

customText.defaultProps = {
    variant: 'body1', // body1 / body2 / button / caption / h1 / h2 / h3 / h4 / h5 / h6 / inherit / overline / subtitle1 / subtitle2
    align: 'center', // center / inherit / justify / left / right
    noWrap: false,
    paragraph: false,
    isBold: false
}

export default customText