function getCandidateDetails(candidateName: string, candidateEmail: string, candidatePhone: string) {
    return `<p>
    <strong>Candidate Name:</strong> ${candidateName} <br />
    <strong>Candidate Email:</strong> <a href='mailto:${candidateEmail}'>${candidateEmail}</a> <br />
    <strong>Candidate Phone:</strong> <a href='tel:${candidatePhone}'>${candidatePhone}</a>
  </p>`;
}

export default getCandidateDetails;