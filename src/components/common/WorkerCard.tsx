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
import { APP_BG_DARK } from "../../utils/colors";
import farms from "../assets/home-slider/farms.jpg";
import { Chip } from "@mui/material";
import MdPhone from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface Props {
  name: string;
  category: string;
  description: string;
  workImages: any;
  profileImage?: string;
  mobileNumber: string;
  email?: string;
}

export default function WorkerCard(props: Props) {
  return (
    <Card
      sx={{
        width: "50%",
        maxWidth: 350,
        backgroundColor: APP_BG_DARK,
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.category}
      />
      <CardMedia component="img" height="194" image={farms} alt="Paella dish" />
      <CardContent sx={{ height: "100px" }}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
