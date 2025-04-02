import { Body, Button, Container, Head, Html, Section,Text } from '@react-email/components';
import { FC } from 'react';

interface TestProps {
    userName: string
    testLink: string
}

const TestEmail: FC<TestProps> = ({ userName, testLink }) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
          <Section>
            <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>Hello {userName},</Text>
            <Text>
              You have been invited to take an MCQ test. Click the button below to start the test.
            </Text>
            <Button
              href={testLink}
              style={{
                backgroundColor: '#007bff',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Start Test
            </Button>
            <Text>If you have any questions, feel free to reach out to us.</Text>
            <Text>Best regards,<br />Your Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default TestEmail;