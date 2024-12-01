import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Avatar,
    Rating,
    Button,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CancellationPage = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [returnLikelihood, setReturnLikelihood] = useState(null);
    const [additionalFeedback, setAdditionalFeedback] = useState('');

    const cancellationReasons = [
        "Too expensive",
        "Customer service was unsatisfactory",
        "Creatives need to be improved",
        "Missing features or integrations",
        "Unexpected Charge on Credit Card",
        "Product has bugs/issues",
        "Too complicated or hard to use",
        "Other"
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#191153',
                color: 'white',
                py: 10,
                px: { xs: 2, md: 12 }
            }}
        >
            {/* Header Section */}
            <Box textAlign="center" mb={5}>
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                >
                    <Box component="span" color="#FFA51F">Connect</Box>Sponsors.Com
                </Typography>
                <Typography>Tim, we're sad to let you go! We are hoping that you'd stay.</Typography>
                <Typography color="#FFA51F">Let's sweeten the deal for you before you cancel</Typography>
            </Box>

            {/* Main Content Grid */}
            <Grid container spacing={4}>
                {/* Left Column: Discount Offer */}
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)'
                        }}
                    >
                        <Box textAlign="center" mb={3}>
                            <Typography variant="h4" fontWeight="bold">
                                Get <Box component="span" color="#FFA51F">50%</Box> discount forever!
                            </Typography>
                            <Typography variant="body1" px={3}>
                                Let ConnectSponsors.com pay for itself in your first sponsorship!
                            </Typography>
                        </Box>

                        {/* Testimonial Section */}
                        <Paper
                            sx={{
                                p: 3,
                                mb: 3,
                                bgcolor: 'white',
                                color: 'black',
                                borderRadius: 2
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={2} mb={2}>
                                <Avatar
                                    src="https://placehold.co/65x65"
                                    sx={{ border: '2px solid', borderColor: 'primary.main' }}
                                />
                                <Box display="flex">
                                    <Rating value={5} readOnly />
                                </Box>
                            </Box>
                            <Typography variant="caption">George reviewed ConnectSponsors.com</Typography>
                            <Typography>
                                "Get ConnectSponsors.com paid for itself in my first month after securing multiple high-value sponsors with their data. The 50% first-year discount made it an absolute no-brainer!"
                            </Typography>
                        </Paper>

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                Claim <Box component="span" sx={{ color: '#FFA51F' }}>50%</Box> Discount forever!
                            </Typography>
                            <Typography sx={{ px: 4, fontSize: '1.125rem', letterSpacing: 'wider', lineHeight: '1.2', my: 2 }}>
                                9 out of 10 ConnectSponsors.com users say the sponsor leads paid for their subscriptions within the first few months, and we don't want you to miss out on this valuable opportunity!
                            </Typography>
                        </Box>
                        {/* Discount Claim Button */}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#0E9E59',
                                py: 2,
                                borderRadius: 8,
                                mt: 2
                            }}
                        >
                            Claim 50% Discount Forever
                        </Button>
                    </Paper>
                </Grid>

                {/* Right Column: What You'll Lose */}
                <Grid item xs={12} md={6}>
                    <Paper
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)'
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" mb={3}>
                            Here's What You'll Lose:
                        </Typography>

                        {[
                            {
                                title: "Access to Your Sponsor Data",
                                description: "(You'll lose direct contact details of top YouTube sponsors and decision-makers, a key resource for your growth.)"
                            },
                            {
                                title: "Your Competitive Advantage",
                                description: "(By canceling, you'll lose access to the latest sponsors and key decision-makers, which can set you back against your competitors.)"
                            },
                            {
                                title: "Your Current Pricing",
                                description: "(Our pricing is increasing soon! Cancel now, and you won't be able to lock in your current discounted rate forever.)"
                            },
                            {
                                title: "Personalized Support",
                                description: "(You'll lose access to our dedicated support team, ready to help you succeed with sponsor outreach and strategy.)"
                            },
                            {
                                title: "New Features Are Coming Soon",
                                description: "(You're on the verge of exciting updates, including expanded tools and new sponsor opportunities. Stay with us to see them!)"
                            }
                        ].map((item, index) => (
                            <Box key={index} display="flex" alignItems="start" gap={2} mb={3}>
                                <Avatar
                                    sx={{
                                        bgcolor: 'red',
                                        width: 30,
                                        height: 30
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                </Box>
                            </Box>
                        ))}

                        {/* Pause Plan Button */}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#0E9E59',
                                py: 2,
                                borderRadius: 8
                            }}
                        >
                            Pause the plan on the page for 3 months
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            {/* Warning Section */}
            <Box textAlign="center" my={4}>
                <Typography px={{ xs: 2, md: 20 }} mb={2}>
                    Important: By canceling your subscription, you will lose your account, your data, and all features associated with your plan.
                </Typography>
                <Typography>
                    Your new accounts will not have any discounts or legacy pricing.
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<CheckCircleIcon />}
                    sx={{
                        mt: 3,
                        backgroundColor: '#0E9E59',
                        borderRadius: 8
                    }}
                >
                    Never mind! Take me back to Get ConnectSponsors.com
                </Button>
            </Box>

            {/* Feedback Section */}
            <Paper sx={{ backgroundColor: 'rgba(255,255,255,0.1)', p: 4 }}>
                {/* Cancellation Reason */}
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={4}>
                        <Typography>Please share your reason for leaving REQUIRED</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <RadioGroup
                            value={selectedReason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                        >
                            {cancellationReasons.map((reason) => (
                                <FormControlLabel
                                    key={reason}
                                    value={reason}
                                    control={<Radio />}
                                    label={reason}
                                />
                            ))}
                        </RadioGroup>
                    </Grid>
                </Grid>

                {/* Return Likelihood */}
                <Grid container spacing={3} mb={4}>
                    <Grid item xs={12} md={4}>
                        <Typography>How likely are you to return? REQUIRED</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box display="flex" justifyContent="space-between" mb={2}>
                            <Typography>No chance</Typography>
                            <Typography>Absolutely will!</Typography>
                        </Box>
                        <Rating
                            value={returnLikelihood}
                            onChange={(event, newValue) => setReturnLikelihood(newValue)}
                            max={10}
                        />
                    </Grid>
                </Grid>

                {/* Additional Feedback */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Typography>Anything else you'd like to share about your experience? REQUIRED</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ pr: 4 }}>

                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                sx={{
                                    backgroundColor: "white", borderRadius: 4,
                                    marginLeft: 5,
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        color: 'black',
                                    }
                                }}
                                variant="outlined"
                                placeholder="Typing..."
                                value={additionalFeedback}
                                color='primary'
                                onChange={(e) => setAdditionalFeedback(e.target.value)}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Final Buttons */}
            <Box display="flex" justifyContent="center" gap={3} mt={4}>
                <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    sx={{
                        color: '#FFA51F',
                        borderColor: '#FFA51F',
                        borderRadius: 8
                    }}
                >
                    I want to cancel
                </Button>
                <Button
                    variant="contained"
                    startIcon={<CheckCircleIcon />}
                    sx={{
                        backgroundColor: '#33DD58',
                        borderRadius: 8
                    }}
                >
                    I don't want to cancel
                </Button>
            </Box>
        </Box>
    );
};

export default CancellationPage;
