import {
    Box,
    Typography,
    TextField,
    Rating,
    Stack
} from '@mui/material';

const RatingComponent = () => {
    return (
        <Box sx={{
            p: 2,
            borderRadius: 8,
            border: "1px solid #FFA51F",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            width: 350,
            height: '100%'
        }}>
            <Rating value={5} max={5} />
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
        </Box>
    )
}

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
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFA51F",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 1,
                px: 4
            }}>
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

export default function PaymentDetailPage() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: 'rgba(0,0,0,0.05)',
            padding: 2
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
                width: '100%',
                maxWidth: 1200
            }}>
                <RatingComponent />
                <Box>
                <PaymentDetails />
                </Box>
                <RatingComponent />
            </Box>
        </Box>
    )
}