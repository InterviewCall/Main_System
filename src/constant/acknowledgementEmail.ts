function getAcknowledgmentEmail(candidateName: string, bootcampName: string) {
    return `
    <p>Dear ${candidateName},</p>

    <p>Thank you for reaching out and expressing interest in our <b>${bootcampName}</b>. We have received your callback request, and our team will get in touch with you shortly to assist with your queries.</p>

    <p>In the meantime, if you have any specific questions, feel free to reply to this email or contact us at <a href="mailto:interviewcall.ic@gmail.com">interviewcall.ic@gmail.com</a>.</p>

    <p>We look forward to speaking with you soon!</p>

    <p>Best regards,</p>
    <p><b>Dibyendu Shannigrahi</b><br>Course Coordinator<br>InterviewCall<br><a href="tel:09875535434">09875535434</a><br><a href="mailto:interviewcall.ic@gmail.com">interviewcall.ic@gmail.com</a></p>
  `;
}

export default getAcknowledgmentEmail;