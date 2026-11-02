export const getVentureFaqs = (venture) => [
  {
    question: `What does ${venture.name} do?`,
    answer: `${venture.tagline}. ${venture.shortDescription}`,
  },
  {
    question: `Which regions does ${venture.name} cover?`,
    answer: `The team supports clients across ${venture.regions.join(
      ', '
    )}. Contact us to discuss your specific location or workforce needs.`,
  },
  {
    question: `What services does ${venture.name} provide?`,
    answer: `Core services include ${venture.services
      .slice(0, 4)
      .join(', ')}, and more. We tailor each engagement to your business.`,
  },
  {
    question: `How do I get started with ${venture.name}?`,
    answer:
      'Send us a message through the contact page or use the official website button on this page. Our team will connect you with the right specialist.',
  },
];
