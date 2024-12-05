import FAQComponent from '../components/FaqComponent';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    InputBase,
    ButtonBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function FaqPage() {
    return (

        <Box>
            <Box sx={{ backgroundColor: '#191153', color: 'white', height: '54vh' }}>
                {/* Header Section */}
                <Box sx={{ position: 'relative', objectFit: 'cover' }}>
                    <Box>
                        <img src="/icons/images/editedbg.png" alt="" style={{ width: '100%', border: '1px solid', height: '30vh' }} />
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#191153B2',
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                            padding: '1.5rem 6rem',
                        }}
                    >
                        {/* Language Selector */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ mt: 0 }}>
                                <Box display="flex" justifyContent="center" alignItems="center" gap={1} sx={{ mt: 0 }}>
                                    <Box component="img" src={`/icons/globe.svg`} alt={"globe icon"} sx={{ width: '20px', height: '15px' }} />
                                </Box>
                            </Box>
                            <Select
                                defaultValue="English"
                                variant="standard"
                                sx={{
                                    backgroundColor: 'inherit',
                                    color: 'white',
                                    '& .MuiSelect-icon': { color: 'white' },
                                }}
                            >
                                <MenuItem value="English">English</MenuItem>
                            </Select>
                        </Box>
                        {/* Logo and Search */}
                        <Box sx={{ marginBottom: '2rem' }}>
                            <Typography variant="h3" fontWeight="bold">
                                <span style={{ color: '#FFA51F' }}>Connect</span>Sponsors.Com
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '2rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: 'inherit',
                                        borderRadius: '8px',
                                        padding: '0.5rem 1rem',
                                        width: '60%',
                                        border: '2px solid'
                                    }}
                                >
                                    <SearchIcon />
                                    <InputBase
                                        placeholder="Search for Article"
                                        sx={{
                                            backgroundColor: 'inherit',
                                            fontSize: '1.2rem',
                                            flex: 1,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Content Section */}
                <Box sx={{ padding: '2rem 6rem' }}>
                    {/* Navigation */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <ButtonBase
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                textAlign: 'left',
                                color: 'white',
                            }}
                        >
                            <Typography>All Collections</Typography>
                            <ArrowRightIcon />
                        </ButtonBase>
                        <Typography variant="body1" fontWeight="300">
                            ConnectSponsors.com FAQs
                        </Typography>
                    </Box>
                    {/* Featured Icon */}
                    <Box>
                        <img src="/icons/images/faq.png" alt="" />
                    </Box>
                </Box>
            </Box>
            <FAQComponent />
        </Box>
    );
}
