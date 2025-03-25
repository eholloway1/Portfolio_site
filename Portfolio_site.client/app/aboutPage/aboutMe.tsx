import { NavBar } from "../navBar";
import {Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './aboutMe.css'

export function AboutMe() {
    return (
        <div>
            <NavBar />
            <Box className="AboutBody">
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">Brief Summary About Me</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        I am currently a Seattle based, full-stack software engineer. I have spent the last five years working in the airline industry. I began my career as a Ramper/Customer Service agent (Passenger Service Agent) for Horizon Airlines.
                        I gained great friends and worked my way to become a Team Captain at the Eugene, OR station. I applied to and was accepted as a new Central Load Planner for Horizon Airlines.
                        This gave me the opportunity to move to Seattle, WA. While there, I was granted opportunities like refreshing our department troubleshooting binders, and reorganizing and updating our internal support documentation.
                        Unfornately, despite these extra opportunities, there was also a LOT of downtime in my role. This helped me to asses what I wanted to prioritize with my time. I began trying to relearn programming around early 2023.
                        A massive stroke of luck struck when around late 2023, an opportunity to begin a software engineering role with Alaska Airlines opened up. Turns out, over half my department alone had applied.
                        Words cannot express how ecstatic and grateful I am to have been given to opportunity to complete the Multiveres Apprenticeship for Alaska Air, and how much I look forward to a long career in software engineering.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">Profesional Summary</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Fullstack software engineer with experience developing using React, Typescript, C#, and .NET 8. Led the effort to bring our payment processor, 
                        serving 200,000 users per month, into PCI compliance. This enabled a company-wide decrease of PCI scope for all current and future teams consuming our microsite. 
                        Led innersource efforts using GoLang and Protobuf to enable usage of ApplePay, used by 50% of users, for a product accounting for $8 million of our monthly revenue. 
                        Led efforts to implement usage of saved payment methods, used by 20% of users per month. Updated documentation for and guided consumer teams through technical integration requirements for our product and payment systems. 
                        Experienced in interdepartmental coordination, process improvement, and working within a fast-paced, highly-technical environment.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    )
};