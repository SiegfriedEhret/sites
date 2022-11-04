export function getJobs() {
	return `query GetJobs {
  jobCollection {
    items {
      title
      company
      url
      startDate
      endDate
      salary
      currency
      bonus
      bonusDescription
      comment
    }
  }
}`;
}
