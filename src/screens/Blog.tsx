import { Box, Grow } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import CustomText from "../components/common/Text";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Blog = () => {
  return (
    <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
      {/* <img src={logo} alt="Toilers" style={{ width: "200px" }} /> */}
      <CustomText label="Our Blogs" variant="h4" isBold={true} />
      <Grow in={true} style={{ transitionDelay: true ? '500ms' : '0ms', transitionDuration: '1000ms' }}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <ImageList
            sx={{
                width: '99%',
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
            }}
            rowHeight={600}
            gap={1}
            >
            {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                    {...srcset(item.img, 450, 350, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.title}
                        position='top'
                        actionIcon={
                            <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`star ${item.title}`}
                            >
                              <StarBorderIcon sx={{ width: '50px', height: '50px' }}/>
                            </IconButton>
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
                );
            })}
            </ImageList>
        </Box>
      </Grow>
    </Box>
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c',
    title: 'Worker',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc',
    title: 'Red Hat',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    title: 'Office',
    author: '@helloimnik',
    featured: true
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1680787308929-a071c1d33c0b',
    title: 'Rammer',
    author: '@nolanissac',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1678766818764-406904b56d82',
    title: 'Renewable Energy',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca',
    title: 'Handrail',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1593436878396-e943a3cac98f',
    title: 'Road Construction',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    title: 'Carpenter',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1564182873128-5052241315bb',
    title: 'Welding FireWork',
    author: '@silverdalex',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1678766819153-b3f7307c5127',
    title: 'Electrician',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1626984232613-f20f15589bee',
    title: 'Field Worker',
    author: '@peterlaster',
  },
  {
    img: 'https://img.freepik.com/free-photo/cheerful-asian-male-janitor-walking-into-hotel-room-carrying-supplies-bucket_1098-17837.jpg',
    title: 'House Hold',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8',
    title: 'Wood Work',
    author: '@southside_customs',
    featured: true
  },
  {
    img: 'https://img.freepik.com/free-photo/dirty-shirt-laundry-service_1098-13262.jpg',
    title: 'Laundry',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1562601622-e3ea198a61e4',
    title: 'Graphics & Photos',
    author: '@southside_customs',
  },
  {
    img: 'https://img.freepik.com/free-photo/hairdresser-taking-care-her-client_23-2149319810.jpg',
    title: 'Saloon',
    author: '@southside_customs',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1679765934200-d1cb3153c631',
    title: 'Gardening',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1635851801927-44c4d1c555af',
    title: 'Shipping',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1619453989980-5156ac74b63a',
    title: 'Clothing',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1596396799610-f0d8497553e2',
    title: 'Rail Work',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1566701781618-42621bb67c65',
    title: 'Vegetable',
    author: '@southside_customs',
  },
  {
    img: 'https://img.freepik.com/free-photo/people-taking-care-office-cleaning_23-2149374451.jpg',
    title: 'Janitor',
    author: '@southside_customs',
    featured: true
  },
  {
    img: 'https://images.unsplash.com/photo-1623485101793-082c03565fa9',
    title: 'Educational',
    author: '@southside_customs',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1682129168433-1f158473f3d2',
    title: 'Vehicle Repairing',
    author: '@southside_customs',
  }
  
];
export default Blog