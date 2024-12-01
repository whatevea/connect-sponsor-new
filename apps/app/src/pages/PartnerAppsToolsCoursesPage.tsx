import { Typography, Box } from '@mui/material';
import AdCardColl from '../components/AdCardColl';
export default function PartnerAppsToolsCoursesPage() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" width={"100%"} >
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY: 2 }}>
                Partner apps,

                <span style={{ color: '#FFA51F' }}>tools </span>

                &
                <span style={{ color: '#FFA51F' }}> courses </span>
            </Typography>
            <AdCardColl />
        </Box>
    );
}

