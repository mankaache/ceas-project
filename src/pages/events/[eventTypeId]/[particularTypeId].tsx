import { useRouter } from "next/router";


const ParticularEvent = () => {

  const router = useRouter();
  const { particularTypeId } = router.query;
  return (
      <div> ParticularEvent <span>{particularTypeId}</span></div>
  )
}

export default ParticularEvent