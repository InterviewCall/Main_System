// import { Body, Button, Container, Head, Html, Section,Text } from '@react-email/components';
// import { FC } from 'react';

interface TestProps {
  date: string
  timeSlot: string
  testLink: string
  maxStartTime: string
}

// const TestEmail: FC<TestProps> = ({ userName, testLink }) => {
//   return (
//     <Html>
//       <Head />
//       <Body style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
//         <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
//           <Section>
//             <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>Hello {userName},</Text>
//             <Text>
//               You have been invited to take an MCQ test. Click the button below to start the test.
//             </Text>
//             <Button
//               href={testLink}
//               style={{
//                 backgroundColor: '#007bff',
//                 color: '#ffffff',
//                 padding: '10px 20px',
//                 borderRadius: '5px',
//                 textDecoration: 'none',
//                 display: 'inline-block',
//               }}
//             >
//               Start Test
//             </Button>
//             <Text>If you have any questions, feel free to reach out to us.</Text>
//             <Text>Best regards,<br />Your Team</Text>
//           </Section>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// export default TestEmail;

export default function TestEmail({ date, timeSlot, maxStartTime, testLink }: TestProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MCQ Test Invitation</title>
      <style>
        body {
          background-color: #f4f4f4;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          margin: auto;
        }
        .button {
          background-color: #007bff;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          display: inline-block;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hey there, superstar!</h2>
        <p>You’ve been handpicked to take on the InterviewCall Entrance Test—your gateway to the next big opportunity!</p>
        <br />
        <p><b>Date: ${date}</b></p>
        <p><b>Time: ${timeSlot}</b></p>
        <br />
        <p>Test Duration: 22 minutes <b>(Make sure to before ${maxStartTime} to get full time!)</b></p>
        <br />
        <p>Bring your A-game, because this is your moment to shine!</p>
        <br />
        <p>Ready to crush it?</p>
        <a href="${testLink}" class="button">Start Test</a>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,<br>Prithviraj Paul<br>9831649077</p>
      </div>
    </body>
    </html>
  `;
}