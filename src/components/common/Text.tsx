import Typography from "@mui/material/Typography";

interface Props {
    label: string
    variant?: any
    align?: any
    noWrap?: boolean
    sx?: any
    paragraph?: boolean
    onClick?: () => {}
}

const customText = (props: Props) => {
  return (
    <Typography
        variant={props.variant}
        align={props.align}
        noWrap={props.noWrap}
        sx={{...props.sx}}
        paragraph={props.paragraph}
        onClick={props.onClick}
    >
      {props.label}
    </Typography>
  )
}

customText.defaultProps = {
    variant: 'body1', // body1 / body2 / button / caption / h1 / h2 / h3 / h4 / h5 / h6 / inherit / overline / subtitle1 / subtitle2
    align: 'left', // center / inherit / justify / left / right
    noWrap: false,
    paragraph: false
}

export default customText