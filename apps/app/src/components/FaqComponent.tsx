import {
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const FAQComponent = () => {
    const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedPanel(isExpanded ? panel : false);
    };

    const faqData = [
        {
            question: "How can ConnectSponsors.com help me secure sponsorships faster?",
            answer: "ConnectSponsors.com gives you direct access to contact details of sponsors actively working with top YouTube channels, including CEO-level contacts and decision-makers. With over 20 data points per sponsor and priority access to new sponsors, you can focus on reaching out to the right partners quickly and efficiently."
        },
        {
            question: "What is included in the Pro Plan that's not in the Startup Plan?",
            answer: "The Pro Plan includes access to the historical database of over 60,000 sponsors, in addition to all features from the Startup Plan, like direct sponsor contact details, CEO and decision-maker information, and access to partner apps. Plus, you get priority access to new sponsors and special tools coming soon."
        },
        {
            question: "What happens if I cancel my subscription?",
            answer: "If you cancel, you'll lose access to your current pricing, all sponsor contact data, and any progress you've made within the platform. You'll also forfeit your access to any new sponsors added after your cancellation. To retain your advantage, you can consider downgrading or pausing instead of canceling."
        },
        {
            question: "How often are new sponsors added to the database?",
            answer: "New sponsors are added monthly. As a subscriber, you will get first access to these sponsors, giving you an edge in securing fresh sponsorship opportunities."
        },
        {
            question: "What if I'm not sure how to approach sponsors?",
            answer: "GetSponsored.ai includes resources and upcoming partner tools (like the \"How To Get Brand Deals\" course) to help guide you through crafting the perfect pitch and outreach strategy. You also have access to our support team for any additional guidance."
        },
        {
            question: "Can I upgrade from the Startup Plan to the Pro Plan at any time?",
            answer: "Yes, you can upgrade from the Startup Plan to the Pro Plan at any time. Upgrading gives you immediate access to the 60,000 sponsor database, along with all other Pro Plan features."
        },
        {
            question: "What is the historical sponsor database, and why is it valuable?",
            answer: "The historical sponsor database is a curated list of 60,000 sponsors who have previously worked with YouTube creators and are highly likely to sponsor content again. This data gives you an expansive view of sponsorship opportunities and significantly increases your chances of securing deals."
        },
        {
            question: "How does the discount work on my subscription?",
            answer: "As an affiliate or through special offers, you can receive up to 50% off your first year's subscription. After the first year, your commissions or discounts may double, allowing you to generate even more value from your referrals or continued subscription."
        },
        {
            question: "What support options do I have with ConnectSponsors.com?",
            answer: "Both the Startup and Pro Plans include email support. The Pro Plan also includes enhanced access to additional partner apps and tools, as well as priority access to new sponsorship opportunities."
        },
        {
            question: "How does the 'pause subscription' feature work?",
            answer: "If you're not actively using your account but don't want to lose your data and pricing, you can pause your subscription. This ensures your account remains active and ready for when you're ready to resume without losing your benefits."
        }
    ];

    return (
        <Box
            sx={{
                color: 'white',
                background: 'linear-gradient(to left, #191153, #3826B9)',
                borderRadius: 2,
                p: 3
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'white'
                }}
            >
                <Box component="span" sx={{ color: '#FFA51F' }}>Connect</Box>Sponsors.Com
            </Typography>

            {faqData.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expandedPanel === `panel${index}`}
                    onChange={handleAccordionChange(`panel${index}`)}
                    sx={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        mb: 2,
                        borderRadius: 2,
                        '&:before': {
                            display: 'none'
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon
                                sx={{
                                    color: expandedPanel === `panel${index}` ? '#FFA51F' : 'white'
                                }}
                            />
                        }
                        sx={{
                            '& .MuiAccordionSummary-content': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }
                        }}
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQComponent;