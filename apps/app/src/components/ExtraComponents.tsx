import React from 'react';
import {
    Box,
    Typography,
    Button,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Stack
} from '@mui/material';
export default function ExtraComponents() {
    return (
        <div>
            <h1>Extra Components</h1>
            <SponsorshipCard />
            <OfferCard />
        </div>
    );
}

const SponsorshipCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#191153',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: '70%',
                    border: "1px solid #D0D0D0",
                    borderRadius: 3,
                    backgroundColor: 'white',
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: '800',
                            color: '#FFA51F',
                            ml: 4,
                            mt: 3
                        }}
                    >
                        Get Sponsored.ai
                    </Typography>
                    <Button>
                        <img
                            src="icons/cross.svg"
                            alt=""
                            style={{ width: 50, height: 50 }}
                        />
                    </Button>
                </Box>


                <CardContent>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        alignItems="center"
                    >
                        <Stack
                            alignItems="center"
                            spacing={1}
                        >
                            <Avatar
                                src="icons/images/tim_image.png"
                                sx={{
                                    width: 115,
                                    height: 115
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#FFA51F',
                                    fontWeight: 'semibold'
                                }}
                            >
                                Tim
                            </Typography>
                            <Typography
                                textAlign="center"
                                sx={{
                                    color: '#000000',
                                    fontWeight: '500'
                                }}
                            >
                                Founder & Ceo @Get ConnectSponsors.com
                            </Typography>
                        </Stack>

                        <Stack spacing={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    position: "relative",
                                    alignItems: 'flex-start',

                                }}
                            >
                                <img
                                    src="icons/triangle.svg"
                                    alt="leftTriangle.icon"
                                    style={{ marginTop: 32, width: 30, height: 30, position: 'absolute', left: -7 }}
                                />
                                <Box
                                    sx={{
                                        backgroundColor: '#F1EAEC',
                                        borderRadius: 3,
                                        p: 2,
                                        ml: 1,
                                        pb: 4
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#000000',
                                            fontWeight: '500',
                                        }}
                                    >
                                        Hello Tim Here at Get ConnectSponsors.com we care about users, so to convince you to stay with us,
                                    </Typography>
                                    <Typography py={1} sx={{
                                        color: '#000000',
                                        fontWeight: '500',

                                    }}>
                                        I would like to offer you <Typography sx={{
                                            color: '#FFA51F',
                                            display: 'inline',
                                            fontWeight: '500',

                                        }}>50% OFF any package!</Typography>
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    borderRadius: 20,
                                    backgroundColor: '#0E9E59',
                                    '&:hover': {
                                        backgroundColor: '#0C7F4A'
                                    }
                                }}
                            >
                                Claim 50% Discount
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

const OfferCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#191153',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: '70%',
                    border: "1px solid #D0D0D0",
                    borderRadius: 3,
                    backgroundColor: 'white',
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '800',
                            fontSize: 27,
                            color: '#FFA51F',
                            ml: 4,
                            mt: 3
                        }}
                    >
                        Offer Accepted !
                    </Typography>
                    <Button>
                        <img
                            src="icons/cross.svg"
                            alt=""
                            style={{ width: 50, height: 50 }}
                        />
                    </Button>
                </Box>


                <CardContent sx={{ p: 4 }}>
                    <Typography
                        sx={{
                            fontWeight: 700, fontSize: 27,
                            color: "black",
                        }}>
                        Your discount code is applied!
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 500, fontSize: 20,
                            color: "#3F3E3E",
                            mt: 3,
                            lineHeight: 1.5,
                        }}
                    >
                        Thank you for accepting our offer. You got a fantastic discount, it'll apply to all the next packages you may upgrade!
                    </Typography>
                </CardContent>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        borderRadius: 20,
                        backgroundColor: '#0E9E59',
                        my: 2,
                        mx: 4,
                        width: '90%',
                        '&:hover': {
                            backgroundColor: '#0C7F4A'
                        }
                    }}
                >
                    Got it! Returm to App
                </Button>
            </Card>
        </Box>
    );
};
