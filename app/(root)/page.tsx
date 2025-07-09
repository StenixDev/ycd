import SearchForm from '@/components/SearchForm';

export default async function Home({ searchParams }) {
  const { query } = await searchParams;

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className='sub-heading !max=w=3xl'>
          {' '}
          Submit Ideas, vote on Pitches, and get Noticed in Virtual Competition
        </p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
