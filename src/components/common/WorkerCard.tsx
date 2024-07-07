import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { APP_BG_DARK, APP_LIGHT_BLUE } from "../../utils/colors";
import farms from "../assets/home-slider/farms.jpg";
import { Chip, Divider } from "@mui/material";
import MdPhone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from '@mui/material/styles'

interface Props {
  name: string;
  category: string;
  description: string;
  workImages: any;
  rate:string;
  profileImage?: string;
  mobileNumber: string;
  email?: string;
}

export default function WorkerCard(props: Props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "50%",
        maxWidth: 350,
        backgroundColor: theme.palette.mode === 'light' ? APP_LIGHT_BLUE : APP_BG_DARK,
        mx: 3,
        my: 3,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], color: "black" }}
            aria-label="recipe"
          >
            {Array.from(props.name)[0]}
          </Avatar>
        }
        action={
          <IconButton className='hover-zoom' aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.category}
      />
      <CardMedia component="img" height="194" image={props.workImages ? props.workImages : farms} alt="Paella dish" />
      <CardContent sx={{ height: "110px" }}>
      <Typography variant="body2" color="text.secondary">
          <strong>Rs. </strong>{props.rate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardContent
        sx={{ height: "20%", display: "flex", flexDirection: "column" }}
      >
        <Chip icon={<MdPhone />} label={props.mobileNumber} sx={{ mb: 1 }} />
        <Chip icon={<EmailIcon />} label={props.email} />
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <IconButton className='zoom-icon' aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className='zoom-icon' aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
