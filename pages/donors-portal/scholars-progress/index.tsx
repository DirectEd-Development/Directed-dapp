import { DonorLayout } from '../../../components';

type Props = {};

const ScholarProgress = (props: Props) => {
  return (
    <DonorLayout>
      <main className='scholar-progress'>
        <div className='work-in-progress'>
          <h2>Page Under Development</h2>
          <p>This page is currently being worked on and is not yet available.</p>
          <p>Please check back later for updates.</p>
        </div>
      </main>
    </DonorLayout>
  );
};

export default ScholarProgress;
