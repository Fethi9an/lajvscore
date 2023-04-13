import { useRouter } from 'next/router';

function League() {
  const router = useRouter();
  const { league } = router.query; // get the dynamic parameter from the URL

  // use the league parameter to fetch data for the corresponding league

  return (
    <div>
      <h1>{league} </h1>
      
    </div>
  );
}

export default League;
