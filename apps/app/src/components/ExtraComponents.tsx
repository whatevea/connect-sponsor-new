import React from 'react';
import {
    Box,
    Typography,
    Button,
    Avatar,
    Card,
    CardContent,
    Rating,
    TextField,
    Stack
} from '@mui/material';
export default function ExtraComponents() {
    return (
        <div>
            <h1>Extra Components</h1>
            <SponsorshipCard />
            <OfferCard />
            <PaymentDetails />
            <div style={{ margin: '20px', width: "50%" }}>
                <RatingComponent />
            </div>
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


const PaymentDetails = () => {
    return (
        <Box sx={{ width: "50%", border: "1px solid white", borderRadius: 3 }}>
            <Typography variant='h4' mt={4} textAlign="center" >
                Payment Details
            </Typography>

            <Typography textAlign="center" fontSize={20} mt={2} lineHeight={1.5}>
                This is to Verify your account,
                <Typography fontWeight={600} fontSize={20}>
                    You will not be charged during 7 days free trail.
                </Typography>
            </Typography>

            <Box sx={{ p: 4 }}>

                <Stack spacing={2} pb={2}>
                    <Stack direction="row" spacing={2}>
                        <Box width="50%">
                            <Typography textAlign="left" mb={1}>Full Address *</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter Address"
                                variant="filled"
                                sx={{
                                    input: { color: "black" },
                                    borderRadius: "8px",
                                    backgroundColor: "white"
                                }}
                            />
                        </Box>
                        <Box width="50%">
                            <Typography textAlign="left" mb={1}>City Name *</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter City"
                                variant="filled"
                                sx={{
                                    input: { color: "black" },
                                    borderRadius: "8px",
                                    backgroundColor: "white"
                                }}
                            />
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Box width="75%">
                            <Typography textAlign="left" mb={1}>State/Province *</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter State/Province"
                                variant="filled"
                                sx={{
                                    input: { color: "black" },
                                    borderRadius: "8px",
                                    backgroundColor: "white"
                                }}
                            />
                        </Box>
                        <Box width="25%">
                            <Typography textAlign="left" mb={1}>Zip Code *</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter Zip Code"
                                variant="filled"
                                sx={{
                                    input: { color: "black" },
                                    borderRadius: "8px",
                                    backgroundColor: "white"
                                }}
                            />
                        </Box>
                    </Stack>

                    <Box>
                        <Typography textAlign="left" mb={1}>Country</Typography>
                        <TextField
                            fullWidth
                            placeholder="Select Country"
                            variant="filled"
                            sx={{
                                input: { color: "black" },
                                borderRadius: "8px",
                                backgroundColor: "white"
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography textAlign="left" mb={1}>Card Number</Typography>
                        <TextField
                            fullWidth
                            placeholder="013xxxxxxxxxxxx"
                            variant="filled"
                            sx={{
                                input: { color: "black" },
                                borderRadius: "8px",
                                backgroundColor: "white"
                            }}
                        />
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Box width="75%">
                        <Typography textAlign="left" mb={1}>Name on Card *</Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter State/Province"
                            variant="filled"
                            sx={{
                                input: { color: "black" },
                                borderRadius: "8px",
                                backgroundColor: "white"
                            }}
                        />
                    </Box>
                    <Box width="25%">
                        <Typography textAlign="left" mb={1}>Security Code *</Typography>
                        <TextField
                            fullWidth
                            placeholder="Enter Zip Code"
                            variant="filled"
                            sx={{
                                input: { color: "black" },
                                borderRadius: "8px",
                                backgroundColor: "white"
                            }}
                        />
                    </Box>
                </Stack>
                <Box component="img" src="icons/images/cc_providers.png" sx={{}} />

            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#FFA51F", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 1, px: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box component="img" src="icons/lock.svg" sx={{}} />
                    <Typography sx={{ color: "white", fontWeight: 600 }}>
                        Encrypted, safe & secure.
                    </Typography>

                </Box>
                <Box component="img" src="icons/stripe.png" />

            </Box>


        </Box>
    )
}

const RatingComponent = () => {
    return (
        <Box sx={{ p: 2, borderRadius: 8, border: "1px solid #FFA51F" }} bgcolor="rgba(255, 255, 255, 0.1)">
            <Rating value={5}
                max={5}
            />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 1 }}>

                <Typography sx={{ lineHeight: 1.5, my: 4 }}>
                    As an agency owner, I was looking for a way to standardize my processes and improve my team's efficiency. The LTV Spot SOP Library has been a lifesaver in this regard, providing me with clear and actionable steps for success. highly recommend it to any agency looking to scale their business.
                </Typography>
                <Box display="flex" gap={1}>
                    <Box component="img" src="icons/images/tim_image.png" sx={{ width: 55, height: 55, borderRadius: "50%" }} />
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 22, color: "#FFA51F" }}>Timothy</Typography>
                        <Typography sx={{ fontWeight: 600, mt: 1 }}>eCommerceManager</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}