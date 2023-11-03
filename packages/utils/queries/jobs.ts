export function getJobs() {
  return `query GetJobs {
  jobCollection {
    items {
      title
      company
      url
      startDate
      endDate
      currency
      salary
      variable
      bonus
      bonusDescription
      comment
    }
  }
}`;
}
