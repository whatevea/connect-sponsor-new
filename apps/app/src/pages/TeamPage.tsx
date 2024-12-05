
import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    Avatar,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const TeamPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('user');

    return (
        <Box
            sx={{
                backgroundColor: '#191153',
                color: 'white',
                p: 3,
                borderRadius: 2,
                '& > *': {}
            }}
        >
            {/* Header */}
            <Box>
                <Typography variant="h4" fontWeight="bold">
                    Team
                </Typography>
                <Typography sx={{ py: 2, letterSpacing: 1, fontSize: 16 }}>
                    Manage who has access to this workspace.
                </Typography>
            </Box>

            {/* Invite User Section */}
            <Box
                sx={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    p: 2
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography fontSize={18} fontWeight="bold" >Invite User</Typography>
                    <Typography fontSize={18} fontWeight="bold" >
                        User Limit: <span style={{ color: "#FFA51F" }} > 1/1 </span>
                    </Typography>
                </Box>

                <Typography sx={{ mb: 2, fontSize: 15 }}>
                    The user you are creating will get an email with login details.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Employee Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'white',
                                color: "black",
                                fontSize: 14


                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        type="email"
                        variant="outlined"
                        placeholder="Employee Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'white',
                                color: "black",
                                fontSize: 14

                            }
                        }}
                    />
                    <Select
                        fullWidth
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        sx={{
                            borderRadius: 2,
                            backgroundColor: 'white',
                            color: "black",
                            fontSize: 14


                        }}
                    >
                        <MenuItem value="user">User</MenuItem>
                    </Select>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '0.875rem',
                            backgroundColor: '#0E9E59',
                            borderRadius: 8,
                            minWidth: 100,
                            py: 1,
                            color: 'white',
                            '&:hover': { backgroundColor: '#0E7E49' }
                        }}
                    >
                        Invite User

                    </Button>
                </Box>
            </Box>

            {/* Team Members Section */}
            <Box
                sx={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 2,
                    background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                    mt: 2
                }}
            >
                {/* Header Row */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        p: 1,
                        px: 3
                    }}
                >
                    <Typography sx={{ width: '20%', fontWeight: 600, fontSize: 18 }}>User</Typography>
                    <Typography sx={{ width: '20%', fontWeight: 600, fontSize: 18 }}>Email Address</Typography>
                    <Typography sx={{ width: '20%', fontWeight: 600, fontSize: 18 }}>User Type</Typography>
                    <Typography sx={{ width: '16%', fontWeight: 600, fontSize: 18 }}>Actions</Typography>
                </Box>

                {/* Team Member Row */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                        px: 3
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '20%', gap: 2 }}>
                        {/* <Avatar
                            src="icons/images/tim_image.png"
                            alt="Person image"
                            sx={{ width: 60, height: 60 }}
                        /> */}
                        <Typography fontWeight="bold" fontSize={16} >Tim</Typography>
                    </Box>
                    <Typography sx={{ width: '20%', fontWeight: 'light', fontSize: 16 }}>
                        Tim@etsponsored.com
                    </Typography>
                    <Typography sx={{ width: '20%', fontWeight: 'light', fontSize: 16 }}>
                        User
                    </Typography>
                    <Box sx={{ width: '16%' }}  >
                        <IconButton sx={{ color: 'white', borderRadius: 2, backgroundColor: '#FFA51F' }}>
                            <CloseIcon />
                        </IconButton>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TeamPage;

