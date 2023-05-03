import { useEffect } from 'react';

declare const Tally: {
  loadEmbeds: () => void;
};

const Survey = () => {
  useEffect(() => {
    Tally.loadEmbeds();
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/mKzqKk?hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="1210"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="DirectEd Donor Anonymous Survey"
    />
  );
};

export default Survey;
