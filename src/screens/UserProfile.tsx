import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { APP_BG_LIGHT } from "../utils/colors"
import CustomText from "../components/common/Text";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import TextInputField from "../components/common/TextInputField";

const UserProfile = () => {
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event: SelectChangeEvent<typeof age>) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    return (
        <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
            <img src={logo} alt="Toilers" style={{ width: "200px" }} />
            <CustomText label="Join Toilers to change your life" variant="h5" isBold={true} />
            <Box style={{ display: 'flex', width: '100%',  flexDirection: 'column', alignSelf: 'center'}}>
                <Box style={{ display: 'block', width: '50%', flexDirection: 'row', alignSelf: 'center'}}>
                    <TextInputField
                        label="First Name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        required
                    />
                    <TextInputField
                        label="Middle Name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                    />
                    <TextInputField
                        label="Last Name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        required
                    />
                    <TextInputField 
                        label="Profession"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        required
                    />
                    <TextInputField
                        label="Date of Birth"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        required
                        
                    />
                        <Select
                            sx={{mt: 1, width: '100%', textAlign: 'left'}}
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            label="Age"
                            required
                            onChange={handleChange}
                        >
                            <MenuItem value={'M'}>Male</MenuItem>
                            <MenuItem value={'F'}>Female</MenuItem>
                            <MenuItem value={'O'}>Other</MenuItem>
                        </Select>
                    <TextInputField
                        label="Address"
                        multiline
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        rows={5}
                        required
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile;
