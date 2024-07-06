import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import CustomText from "../components/common/Text";
import TextInputField from "../components/common/TextInputField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomButton from '../components/common/Button';
import { APP_BG_DARK } from '../utils/colors';
import worker13 from "../components/assets/Worker/worker13.png";
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
        <Box sx={{ paddingTop: '50px' }}>
            <img src={worker13} alt="Toilers" style={{ width: "200px" }} />
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                     <DatePicker sx={{ minWidth: 120, my: 1, width: '100%', textAlign: 'left'}} label='Date of Birth'/>
                    </LocalizationProvider>
                    <FormControl required sx={{ my: 1, minWidth: 120,  width: '100%', textAlign: 'left'}}>
                        <InputLabel id="demo-controlled-open-select-label">Sex</InputLabel>
                        <Select
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
                        </FormControl>
                    <TextInputField
                        sx={{ my: 1}}
                        label="Address"
                        multiline
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // setName(e.target.value)
                        }}
                        rows={5}
                        required
                    />
                    <Box sx={{mt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'center', alignContent: 'center'}}>
                        <CustomButton label="Submit" sx={{width: '350px', backgroundColor: APP_BG_DARK }} />
                        <CustomButton label="No Thanks" variant='outlined' sx={{width: '350px', color: APP_BG_DARK}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile;
